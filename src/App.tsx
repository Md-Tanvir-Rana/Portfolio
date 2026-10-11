/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Training } from './components/Training';
import { Education } from './components/Education';
import { CareerGoals } from './components/CareerGoals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
        {/* Sticky 3-Zone Navigation */}
        <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenCvModal={() => setCvModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Training />
          <Education />
          <CareerGoals />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* CV Download / Print Modal */}
        <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
