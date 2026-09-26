import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Theme } from './components/Theme';
import { ImportantDates } from './components/ImportantDates';
import { Tracks } from './components/Tracks';
import { Speakers } from './components/Speakers';
import { CallForPapers } from './components/CallForPapers';
import { Publication } from './components/Publication';
import { Committee } from './components/Committee';
import { Venue } from './components/Venue';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionDivider } from './components/SectionDivider';
import { Modal } from './components/Modal';
import type { ModalContent } from './components/Modal';
import { Toast } from './components/Toast';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleActionClick = (actionType: 'submit' | 'register' | 'cfp') => {
    if (actionType === 'submit') {
      setModalContent({
        title: 'Paper Submission System',
        subtitle: 'Online Submission Portal Scheduling',
        details:
          'The paper submission platform (e.g. CMT / EasyChair) will be opened once the official Call for Papers timeline is formally released by the Department of Information Technology, PSG College of Technology. Status: TO BE INCLUDED',
        statusBadge: 'TO BE INCLUDED',
      });
      setModalOpen(true);
    } else if (actionType === 'register') {
      setModalContent({
        title: 'Conference Registration',
        subtitle: 'Delegate & Author Registration Portal',
        details:
          'Registration fee structures, student delegate rates, and payment gateway links will be made available following acceptance notifications. Status: TO BE INCLUDED',
        statusBadge: 'TO BE INCLUDED',
      });
      setModalOpen(true);
    } else if (actionType === 'cfp') {
      setModalContent({
        title: 'Call for Papers (CFP)',
        subtitle: 'Official Conference Circular Download',
        details:
          'The complete high-resolution CFP circular containing submission formatting guidelines and author instructions will be available for download here. Status: TO BE INCLUDED',
        statusBadge: 'TO BE INCLUDED',
      });
      setModalOpen(true);
    }
  };

  const handleMapClick = () => {
    setModalContent({
      title: 'PSG College of Technology Campus Map',
      subtitle: 'PSG College of Technology, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu, 641004, India.',
      details:
        'Live interactive navigation and detailed building-level route maps for the Department of Information Technology at PSG College of Technology will be linked here. Status: TO BE INCLUDED',
      statusBadge: 'TO BE INCLUDED',
    });
    setModalOpen(true);
  };

  const handleLegalClick = (type: 'privacy' | 'terms') => {
    setModalContent({
      title: type === 'privacy' ? 'Privacy Policy' : 'Terms of Service',
      subtitle: 'DATAINSIGHT 2027 Regulatory Governance',
      details:
        'Official privacy practices and delegate participation policies for DATAINSIGHT 2027 are currently being drafted under institutional guidelines. Status: TO BE INCLUDED',
      statusBadge: 'TO BE INCLUDED',
    });
    setModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSuccess = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A2B4A] flex flex-col font-sans selection:bg-[#176BFF] selection:text-white">
      {/* Subtle Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Sticky Navigation */}
      <Navbar onActionClick={handleActionClick} />

      {/* Main Page Flow */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero
          onActionClick={handleActionClick}
          onExploreClick={handleExploreClick}
        />

        {/* Live Conference Countdown */}
        <Countdown />

        <SectionDivider variant="cyan-blue" />

        {/* Conference Introduction */}
        <About />

        <SectionDivider variant="blue-gold" />

        {/* Conference Highlights */}
        <Highlights />

        <SectionDivider variant="gold-cyan" />

        {/* Conference Themes & Convergence */}
        <Theme />

        <SectionDivider variant="cyan-blue" />

        {/* Important Dates Timeline */}
        <ImportantDates />

        <SectionDivider variant="blue-gold" />

        {/* Conference Tracks */}
        <Tracks />

        <SectionDivider variant="gold-cyan" />

        {/* Keynote Speakers */}
        <Speakers />

        <SectionDivider variant="cyan-blue" />

        {/* Call for Papers */}
        <CallForPapers onActionClick={handleActionClick} />

        <SectionDivider variant="blue-gold" />

        {/* Publication & Indexing */}
        <Publication />

        <SectionDivider variant="gold-cyan" />

        {/* Organizing Committee */}
        <Committee />

        <SectionDivider variant="cyan-blue" />

        {/* Venue & Travel */}
        <Venue onMapClick={handleMapClick} />

        <SectionDivider variant="blue-gold" />

        {/* Contact Us & Secretariat Form */}
        <Contact onFormSuccess={handleFormSuccess} />
      </main>

      {/* Conference Footer */}
      <Footer
        onActionClick={handleActionClick}
        onLegalClick={handleLegalClick}
      />

      {/* Floating Back to Top */}
      <BackToTop />

      {/* Action Dialog / Modal */}
      <Modal
        isOpen={modalOpen}
        content={modalContent}
        onClose={() => setModalOpen(false)}
      />

      {/* Success Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
