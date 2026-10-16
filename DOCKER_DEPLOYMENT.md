# DATAINSIGHT 2027 — Docker Deployment & Handover Guide

This guide details the complete workflow for deploying the **DATAINSIGHT 2027** conference website container on the **PSG College of Technology** server using Docker Compose and GitHub.

---

## 1. Project Overview

- **Project:** DATAINSIGHT 2027 — International Conference on Multimodal Data Analytics, Intelligence and Security
- **Organization:** Department of Information Technology, PSG College of Technology, Coimbatore, Tamil Nadu, India
- **Dates:** December 16–18, 2027
- **GitHub Repository:** [https://github.com/RIGASWAR/datainsight-2027](https://github.com/RIGASWAR/datainsight-2027)
- **Frontend Stack:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide Icons
- **Architecture:** Client-Side Single Page Application (SPA), Pure Static Bundle (No backend/database required)
- **Container Server:** Production Nginx 1.27 Alpine Container
- **Target College Domain:** `datainsight.pgtech.ac.in`

---

## 2. Docker Architecture

The project uses a clean **two-stage Docker build**:

1. **Stage 1 (`builder` — `node:22-alpine`):**
   - Installs production dependencies using `package.json` and `package-lock.json` via `npm ci` with resilient network retry flags.
   - Compiles TypeScript and runs `npm run build` (`tsc -b && vite build`) to generate the optimized, tree-shaken static production bundle in `/app/dist`.
2. **Stage 2 (`runner` — `nginx:1.27-alpine`):**
   - Cleans the default Nginx web root and copies the production assets into `/usr/share/nginx/html`.
   - Injects custom `nginx.conf`:
     - **SPA Fallback Routing:** Directs client-side paths to `/index.html` (`try_files $uri $uri/ /index.html;`) so page refreshes never return 404.
     - **Gzip Compression:** Enabled for HTML, CSS, JavaScript, JSON, SVG, and web fonts.
     - **Security Headers:** Enforces `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, and `Referrer-Policy`.
     - **Byte-Range Media Streaming:** Enables `Accept-Ranges bytes` for smooth video playback (PSG Drone background video).
     - **Vite Asset Caching:** 1-year immutable caching (`max-age=31536000, immutable`) for fingerprinted bundles in `/assets/`, 30-day caching for media/images, and explicit `no-cache` for `index.html`.
     - **Health Check Endpoint:** Lightweight `/healthz` probe returning HTTP 200 `OK`.

---

## 3. Files Created for Docker Deployment

| File | Purpose |
|---|---|
| `Dockerfile` | Multi-stage build definition (`node:22-alpine` $\rightarrow$ `nginx:1.27-alpine`) |
| `compose.yaml` | Production Docker Compose orchestration for service `datainsight-web` |
| `nginx.conf` | Web server configuration with SPA routing, security headers, compression, and caching |
| `.dockerignore` | Excludes `node_modules`, `dist`, `.git`, temporary files, and local caches from Docker build context |
| `DOCKER_DEPLOYMENT.md` | Deployment manual and administrator handover documentation |

---

## 4. Developer Workflow (Pushing to GitHub)

When publishing or updating the Docker configuration on GitHub:

1. **Review Docker Configuration Files:**
   Verify `Dockerfile`, `compose.yaml`, `nginx.conf`, `.dockerignore`, and `DOCKER_DEPLOYMENT.md`.
2. **Commit and Push to GitHub:**
   ```bash
   git status
   git add Dockerfile compose.yaml nginx.conf .dockerignore DOCKER_DEPLOYMENT.md
   git commit -m "Add Docker deployment configuration"
   git push origin main
   ```
3. **Share Repository Details with College Server Administrator:**
   - **Repository:** `https://github.com/RIGASWAR/datainsight-2027.git`
   - **Branch:** `main`
   - **Target Domain:** `datainsight.pgtech.ac.in`

---

## 5. College Server Workflow (Deploying the Website)

### Step 1: Verify Prerequisites
Ensure the college server has Docker Engine and the Docker Compose plugin installed:
```bash
docker --version
docker compose version
```

### Step 2: Clone the Repository
Clone the repository to the desired deployment directory on the server:
```bash
git clone https://github.com/RIGASWAR/datainsight-2027.git
cd datainsight-2027
```

### Step 3: Build and Start the Website
Build the production Docker image and launch the container in detached mode:
```bash
docker compose up --build -d
```
*Note: By default, the container maps port `8080` on the host to port `80` inside the container. To use a different host port (e.g., `80` or `3000`), pass the `PORT` variable:*
```bash
PORT=80 docker compose up --build -d
```

### Step 4: Verify Deployment and Container Health
Confirm the container is running and healthy:
```bash
docker compose ps
```
*Expected output:*
```
NAME              IMAGE                     COMMAND                  SERVICE           STATUS                    PORTS
datainsight-web   datainsight-2027:latest   "/docker-entrypoint.…"   datainsight-web   Up (healthy)              0.0.0.0:8080->80/tcp
```

### Step 5: Check Container Logs
Inspect the startup logs to ensure Nginx started cleanly without warnings or errors:
```bash
docker compose logs --tail=100
```

### Step 6: Test Locally on the Server
Verify the health check endpoint and homepage directly on the server:
```bash
# Test health check probe (must return HTTP 200 OK)
curl -i http://localhost:8080/healthz

# Test homepage response
curl -I http://localhost:8080/
```

---

## 6. Updating the Deployment (Future GitHub Changes)

Whenever new conference updates, committee additions, or announcements are pushed to the `main` branch on GitHub, update the server deployment with:

```bash
cd /path/to/datainsight-2027
git pull origin main
docker compose up --build -d
```
Docker Compose will rebuild the updated static bundle, create a new image, and recreate the container with zero downtime.

---

## 7. Stopping or Restarting the Service

```bash
# Graceful shutdown:
docker compose down

# Restart container:
docker compose restart

# View streaming live logs:
docker compose logs -f
```

---

## 8. Server Administrator Responsibilities (Domain, HTTPS & Reverse Proxy)

> [!IMPORTANT]
> Deploying the container on the college server starts the web service locally on the specified host port (default `8080`). **It does not automatically configure DNS, public domain routing, firewall rules, or SSL/HTTPS.**
> The college server administrator must configure the public reverse proxy and institutional domain mapping for **`datainsight.pgtech.ac.in`**.

### 1. DNS Mapping
Map the intended domain:
- **Domain:** `datainsight.pgtech.ac.in`
- **DNS Record:** Point `A` or `CNAME` record for `datainsight.pgtech.ac.in` to the public IP address of the college gateway server.

### 2. Firewall Rules
Allow inbound traffic on:
- **Port 80** (HTTP $\rightarrow$ auto-redirect to HTTPS)
- **Port 443** (HTTPS $\rightarrow$ secure SSL/TLS traffic)

### 3. Host Reverse Proxy Configuration (Nginx Example)
Configure the college host's reverse proxy (e.g. `/etc/nginx/sites-available/datainsight.pgtech.ac.in.conf`) to terminate SSL and proxy requests to the container:

```nginx
# HTTP: Redirect all traffic to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name datainsight.pgtech.ac.in;
    return 301 https://$host$request_uri;
}

# HTTPS: SSL Termination and Container Reverse Proxy
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name datainsight.pgtech.ac.in;

    # Institutional or Let's Encrypt SSL Certificates
    ssl_certificate /etc/ssl/certs/datainsight_pgtech_ac_in.crt;
    ssl_certificate_key /etc/ssl/private/datainsight_pgtech_ac_in.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Buffer and client size settings
    client_max_body_size 100M;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket & HTTP/1.1 connection settings
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

---

## 9. Verification Checklist

The server administrator can verify full functionality across the following checks:

| Check | URL / Command | Expected Result |
|---|---|---|
| Health Check | `curl -i http://localhost:8080/healthz` | Returns `HTTP/1.1 200 OK` with body `OK` |
| Homepage | `http://localhost:8080/` | DATAINSIGHT 2027 page renders with header, hero, countdown, and logos |
| Drone Video | `http://localhost:8080/videos/PsgDroneshot-2.mp4` | Returns `HTTP/1.1 200/206 Partial Content`, `video/mp4` |
| Hashed Assets | `http://localhost:8080/assets/...` | Returns `Cache-Control: public, max-age=31536000, immutable` |
| SPA Fallback | `http://localhost:8080/conference/tracks/data` | Returns `HTTP/1.1 200 OK` (serves `index.html`, no 404) |
| Container Logs | `docker compose logs --tail=50` | Clean startup logs, 0 worker errors |
