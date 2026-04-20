/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../shared/SectionHeading';
import { Sigil } from '../shared/Sigil';
import { EXPERIENCE } from '../../lib/data';
import { DispersingText } from '../shared/DispersingText';

const TimelineEntry: React.FC<{ entry: typeof EXPERIENCE[0]; index: number }> = ({ entry, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative mb-20 md:flex ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
      {/* Date - Desktop */}
      <div className={`hidden md:flex w-1/2 ${isLeft ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
        <motion.span 
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-mono text-bone-faded tracking-widest text-xs"
        >
          {entry.year}
        </motion.span>
      </div>

      {/* Center Sigil Marker */}
      <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 z-10 flex flex-col items-center">
        <Sigil variant="runes" className="w-8 h-8 text-bone-dim bg-ink-void p-1 rounded-full border border-bone-faded/20" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className={`md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
      >
        <div className="md:hidden font-mono text-bone-faded text-[10px] tracking-widest mb-2">
          {entry.year}
        </div>
        
        <h4 className="font-display text-2xl text-bone-white mb-1 uppercase tracking-wider">
          {entry.role}
        </h4>
        
        <div className="font-subdisplay text-xs text-gilt/80 mb-4 tracking-widest">
          {entry.company}
        </div>
        
        <DispersingText 
          text={entry.description}
          className="font-body text-bone-dim text-sm italic mb-6 leading-relaxed max-w-lg md:mx-0 mx-auto"
        />
        
        <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
          {entry.skills.map((skill, i) => (
            <span 
              key={i} 
              className="px-3 py-1 border border-bone-faded/20 text-[10px] font-mono text-bone-faded uppercase tracking-tighter"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  return (
    <section id="chronicle" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          numeral="IV" 
          title="The Chronicle" 
          sigil="runes"
        />
        
        <div className="relative mt-20">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-bone-faded/20 -translate-x-1/2" />
          
          <div className="space-y-12">
            {EXPERIENCE.map((entry, i) => (
              <TimelineEntry key={i} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
