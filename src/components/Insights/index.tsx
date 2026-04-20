/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { CornerBrackets } from '../shared/CornerBrackets';
import { SkillRadar, DomainsBar, ToolsDonut, CareerArea } from './Charts';
import { RevealOnScroll } from '../shared/RevealOnScroll';

export const Insights: React.FC = () => {
  return (
    <section id="glyphs" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          numeral="V" 
          title="The Glyphs Laid Bare" 
          sigil="compass"
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          <RevealOnScroll className="bg-ink-deep p-8 md:p-12 border border-bone-faded/10 relative h-[450px]">
            <h3 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-10">V.a — Skill Proficiency</h3>
            <div className="h-[300px]">
              <SkillRadar />
            </div>
            <CornerBrackets className="text-bone-faded/20" />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="bg-ink-deep p-8 md:p-12 border border-bone-faded/10 relative h-[450px]">
             <h3 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-10">V.b — AI Domains</h3>
             <div className="h-[300px]">
               <DomainsBar />
             </div>
             <CornerBrackets className="text-bone-faded/20" />
          </RevealOnScroll>

          <RevealOnScroll delay={0.4} className="bg-ink-deep p-8 md:p-12 border border-bone-faded/10 relative h-[450px]">
             <h3 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-10">V.c — Tools Arsenal</h3>
             <div className="h-[300px]">
               <ToolsDonut />
             </div>
             <CornerBrackets className="text-bone-faded/20" />
          </RevealOnScroll>

          <RevealOnScroll delay={0.6} className="bg-ink-deep p-8 md:p-12 border border-bone-faded/10 relative h-[450px]">
             <h3 className="font-subdisplay text-xs text-bone-faded uppercase tracking-widest mb-10">V.d — Career Velocity</h3>
             <div className="h-[300px]">
               <CareerArea />
             </div>
             <CornerBrackets className="text-bone-faded/20" />
          </RevealOnScroll>
        </div>

        <div className="hidden">
          {/* SR fallbacks could go here */}
          <table>
            <caption>Skill Proficiency Data</caption>
            <thead>
              <tr><th>Domain</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>AI</td><td>95</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
