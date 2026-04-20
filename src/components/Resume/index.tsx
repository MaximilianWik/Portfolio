/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { PROFILE, EDUCATION } from '../../lib/data';
import { motion } from 'motion/react';
import { RevealOnScroll } from '../shared/RevealOnScroll';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          numeral="VII" 
          title="The Formal Hand" 
          sigil="eye"
        />
        
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-16 md:gap-24">
          {/* Left Metadata */}
          <RevealOnScroll className="space-y-12">
            <div>
              <h4 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-6">Identity</h4>
              <div className="space-y-2">
                <p className="font-display text-2xl text-bone-white uppercase tracking-wider">{PROFILE.name}</p>
                <p className="font-body italic text-bone-dim">{PROFILE.role}</p>
              </div>
            </div>

            <div>
              <h4 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-6">Contact</h4>
              <div className="space-y-4 font-mono text-xs text-bone-dim tracking-wider uppercase">
                <p className="flex flex-col">
                  <span className="text-bone-faded text-[10px] mb-1">Email</span>
                  <a href={`mailto:${PROFILE.email}`} className="hover:text-gilt transition-colors">{PROFILE.email}</a>
                </p>
                <p className="flex flex-col">
                  <span className="text-bone-faded text-[10px] mb-1">Phone</span>
                  <a href={`tel:${PROFILE.phone}`} className="hover:text-gilt transition-colors">{PROFILE.phone}</a>
                </p>
                <p className="flex flex-col">
                  <span className="text-bone-faded text-[10px] mb-1">Location</span>
                  <span>{PROFILE.location}</span>
                </p>
              </div>
            </div>

            <motion.a 
              href="/resume.pdf"
              whileHover={{ backgroundColor: '#3D2B1F', borderColor: '#B8935A' }}
              className="inline-block px-10 py-4 border border-bone-faded/40 font-subdisplay text-xs text-bone-white tracking-[0.4em] uppercase transition-colors"
            >
              Download Ledger (PDF)
            </motion.a>
          </RevealOnScroll>

          {/* Right Content */}
          <RevealOnScroll delay={0.2} className="space-y-20">
            <div>
              <h4 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-10 border-b border-bone-faded/10 pb-4">Education</h4>
              <div className="space-y-12">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l border-bone-faded/20">
                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-bone-faded/40" />
                    <p className="font-mono text-[10px] text-bone-faded uppercase tracking-widest mb-2">{edu.period}</p>
                    <h5 className="font-display text-xl text-bone-white uppercase tracking-wide">{edu.institution}</h5>
                    <p className="font-body italic text-bone-dim">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-10 border-b border-bone-faded/10 pb-4">Knowledge Glyphs</h4>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h6 className="font-subdisplay text-[10px] text-gilt/60 uppercase tracking-widest mb-2">AI & Automation</h6>
                    <p className="font-body text-bone-dim italic text-sm">Microsoft Copilot, Copilot Studio, Power Automate, Agentic AI Architectures, Python (AI Frameworks)</p>
                  </div>
                  <div>
                    <h6 className="font-subdisplay text-[10px] text-gilt/60 uppercase tracking-widest mb-2">Development</h6>
                    <p className="font-body text-bone-dim italic text-sm">Python, SQL, TypeScript/React, API Integration (REST/FDL), Scripting</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h6 className="font-subdisplay text-[10px] text-gilt/60 uppercase tracking-widest mb-2">Data & BI</h6>
                    <p className="font-body text-bone-dim italic text-sm">Power BI, DAX, Medallion Architecture, Data Modeling, SQL Server</p>
                  </div>
                  <div>
                    <h6 className="font-subdisplay text-[10px] text-gilt/60 uppercase tracking-widest mb-2">IAM & Architecture</h6>
                    <p className="font-body text-bone-dim italic text-sm">SailPoint, Role-Based Access Control, Identity Governance, Information Systems Architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
