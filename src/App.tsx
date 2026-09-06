/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuSection from './components/MenuSection';
import BreakfastPlanner from './components/BreakfastPlanner';
import StallLocator from './components/StallLocator';
import FeedbackSection from './components/FeedbackSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RecruitmentPage from './components/RecruitmentPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'recruitment'>('home');
  // State to bridge selection between Menu cards and the interactive Breakfast Planner widget
  const [selectedMilkId, setSelectedMilkId] = useState<string | null>(null);
  const [selectedCarbId, setSelectedCarbId] = useState<string | null>(null);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#recrui' || hash === '#recruitment' || hash === '#tuyen-dung') {
        setCurrentPage('recruitment');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectIngredient = (type: 'milk' | 'carb', id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }

    if (type === 'milk') {
      setSelectedMilkId(id);
    } else {
      setSelectedCarbId(id);
    }

    // Smoothly scroll to the planner section
    setTimeout(() => {
      const plannerSection = document.getElementById('planner');
      if (plannerSection) {
        plannerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleResetPreselected = () => {
    setSelectedMilkId(null);
    setSelectedCarbId(null);
  };

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'recrui' || sectionId === 'recruitment') {
      setCurrentPage('recruitment');
      window.location.hash = '#recrui';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = sectionId === 'home' ? '' : `#${sectionId}`;
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const targetElement = document.getElementById(sectionId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }, 100);
      return;
    }

    if (sectionId === 'home') {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-800 antialiased selection:bg-blue-500 selection:text-white stars-bg">
      {/* Sticky Top Navigation Bar */}
      <Header onNavClick={handleNavigation} currentPage={currentPage} />

      {/* Main View: Recruitment Subpage vs Home Sections */}
      {currentPage === 'recruitment' ? (
        <main>
          <RecruitmentPage onNavigateHome={handleNavigation} />
        </main>
      ) : (
        <main>
          {/* Hero Banner Section */}
          <Hero onCtatClick={handleNavigation} />

          {/* Story & Core Values Section */}
          <Story onLearnMoreClick={handleNavigation} />

          {/* Full Menu Showcase Section */}
          <MenuSection onSelectIngredient={handleSelectIngredient} />

          {/* Interactive Customizer and Nutrition Calculator Widget */}
          <BreakfastPlanner
            preselectedMilkId={selectedMilkId}
            preselectedCarbId={selectedCarbId}
            onResetPreselected={handleResetPreselected}
          />

          {/* Stall Locator and District Filtering Section */}
          <StallLocator />

          {/* Testimonials and Testimonials Slider Section */}
          <FeedbackSection />

          {/* FAQ Accordion Section */}
          <FAQSection />

          {/* Franchise & Contact Inquiry Form */}
          <ContactSection />
        </main>
      )}

      {/* Footer Details and Links Section */}
      <Footer onLinkClick={handleNavigation} />
    </div>
  );
}
