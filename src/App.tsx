/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'motion/react';

// Sections
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Timeline } from './components/Timeline';
import { Insights } from './components/Insights';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Shared
import { CustomCursor } from './components/shared/CustomCursor';
import { Navigation } from './components/shared/Navigation';
import { CindersOverlay } from './components/shared/CindersOverlay';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-ink-void overflow-x-hidden selection:bg-ember-blood/30 flex flex-col">
      <CustomCursor />
      
      <CindersOverlay />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="content" className="flex-1 flex flex-col">
            <Navigation />
            <div className="flex-1 px-6 md:px-12">
              <Hero />
              <About />
              <Highlights />
              <Timeline />
              <Insights />
              <Projects />
              <Resume />
              <Contact />
            </div>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

