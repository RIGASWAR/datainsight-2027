import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { InstitutionalHeader } from './components/InstitutionalHeader';
import { Hero } from './components/Hero';
import { AboutPSGCT } from './components/AboutPSGCT';
import { About } from './components/About';
import { Scope } from './components/Scope';
import { Speakers } from './components/Speakers';
import { Theme } from './components/Theme';
import { Tracks } from './components/Tracks';
import { Publication } from './components/Publication';
import { ImportantDates } from './components/ImportantDates';
import { PaperSubmission } from './components/PaperSubmission';
import { Registration } from './components/Registration';
import { ExpertOpinions } from './components/ExpertOpinions';
import { Events } from './components/Events';
import { Committee } from './components/Committee';
import { AdditionalCommittees } from './components/AdditionalCommittees';
import { Venue } from './components/Venue';
import { Contact } from './components/Contact';
import { Sponsors } from './components/Sponsors';
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

  const handleActionClick = (actionType: 'submit' | 'register' | 'cfp' | 'sponsors') => {
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
    } else if (actionType === 'sponsors') {
      setModalContent({
        title: 'Conference Sponsorship',
        subtitle: 'Industry & Academic Partnership Opportunities',
        details:
          'DATAINSIGHT 2027 offers comprehensive sponsorship packages, exhibition booth allocations, and branding opportunities for technology organizations and research institutions. Status: TO BE ANNOUNCED',
        statusBadge: 'TO BE ANNOUNCED',
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
    const el = document.getElementById('about-psgct');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSuccess = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A2B4A] flex flex-col font-sans selection:bg-[#244A91] selection:text-white">
      {/* Subtle Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Sticky Navigation with exact 16 items */}
      <Navbar onActionClick={handleActionClick} />

      {/* Institutional Header with PSG & DATAINSIGHT Logos */}
      <InstitutionalHeader />

      {/* Main Page Flow - Exact 19 Sections Sequence */}
      <main className="flex-1 flex flex-col">
        {/* 01. Home / Entry Page with Drone Video, Translucent Box & Countdown */}
        <Hero
          onActionClick={handleActionClick}
          onExploreClick={handleExploreClick}
        />

        <SectionDivider variant="cyan-blue" />

        {/* 02. About PSGCT */}
        <AboutPSGCT />

        <SectionDivider variant="blue-gold" />

        {/* 03. About DATAINSIGHT 2027 (with animated circular multimodal data visualization) */}
        <About />

        <SectionDivider variant="gold-cyan" />

        {/* 04. Scope of the Conference */}
        <Scope />

        <SectionDivider variant="cyan-blue" />

        {/* 05. Keynote Speakers and Panelists */}
        <Speakers />

        <SectionDivider variant="blue-gold" />

        {/* 06. Theme */}
        <Theme />

        <SectionDivider variant="gold-cyan" />

        {/* 07. Conference Tracks and Topics (with 3D flip card interaction) */}
        <Tracks />

        <SectionDivider variant="cyan-blue" />

        {/* 08. Conference Publication */}
        <Publication />

        <SectionDivider variant="blue-gold" />

        {/* 09. Important Dates */}
        <ImportantDates />

        <SectionDivider variant="gold-cyan" />

        {/* 10. Paper Submission */}
        <PaperSubmission onActionClick={handleActionClick} />

        <SectionDivider variant="cyan-blue" />

        {/* 11. Registration Details */}
        <Registration onActionClick={handleActionClick} />

        <SectionDivider variant="blue-gold" />

        {/* 12. Expert Opinions on DATAINSIGHT 2027 (auto-sliding 5-card carousel) */}
        <ExpertOpinions />

        <SectionDivider variant="gold-cyan" />

        {/* 13. Events */}
        <Events />

        <SectionDivider variant="cyan-blue" />

        {/* 14. Organizing Committee */}
        <Committee />

        <SectionDivider variant="blue-gold" />

        {/* 15. Additional Committees and Advisory Bodies */}
        <AdditionalCommittees />

        <SectionDivider variant="gold-cyan" />

        {/* 16. Conference Venue */}
        <Venue onMapClick={handleMapClick} />

        <SectionDivider variant="cyan-blue" />

        {/* 17. Contact Us */}
        <Contact onFormSuccess={handleFormSuccess} />

        <SectionDivider variant="blue-gold" />

        {/* 18. Sponsors (EXACTLY 4 sponsor boxes: SPONSOR 1 to SPONSOR 4 TO BE ANNOUNCED) */}
        <Sponsors onActionClick={handleActionClick} />
      </main>

      {/* 19. Footer */}
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
