/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SectionHeading } from '../shared/SectionHeading';
import { CornerBrackets } from '../shared/CornerBrackets';
import { Sigil } from '../shared/Sigil';
import { usePretextLayout } from '../../hooks/usePretextLayout';
import { DispersingText } from '../shared/DispersingText';

const StatItem: React.FC<{ label: string; value: number; prefix?: string }> = ({ label, value, prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const stepTime = Math.abs(Math.floor(duration / value));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-4 relative bg-ink-deep border border-bone-faded/10 flex flex-col justify-center">
      <CornerBrackets className="text-bone-faded/20" size={6} />
      <span className="font-mono text-bone-white text-2xl mb-1">
        {prefix}{count.toString().padStart(2, '0')}
      </span>
      <span className="font-subdisplay text-[9px] tracking-tighter text-bone-faded uppercase">{label}</span>
    </div>
  );
};

export const About: React.FC = () => {
  const bio = "You find the signatory's mark in the margin. Maximilian Wikström, holder of the Information Systems rite, keeps the ledgers at DNB. His hand binds Copilot and Power Automate into instruments that spare others from repetition. He writes Python in the night hours.";
  // We use Pretext to pre-calculate the layout height for visual stability
  const layout = usePretextLayout(bio, 'italic 18px "EB Garamond"', 500, 1.6);

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <SectionHeading 
        numeral="II" 
        title="The Bearer" 
        sigil="eye"
      />
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-sm mx-auto"
        >
          <div className="absolute inset-0 rounded-full border border-bone-faded/20 flex items-center justify-center">
             <div className="w-[90%] h-[90%] rounded-full border-2 border-bone-faded/10 p-4">
                <div className="w-full h-full rounded-full bg-ink-deep flex items-center justify-center overflow-hidden relative group">
                  <Sigil variant="compass" className="w-2/3 h-2/3 text-bone-faded/20 absolute animate-[spin_40s_linear_infinite]" />
                  <span className="font-display text-7xl md:text-8xl text-bone-white font-light z-10 transition-transform group-hover:scale-110 duration-700">MW</span>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-void/60" />
                </div>
             </div>
          </div>
          <CornerBrackets className="text-bone-faded/40" />
        </motion.div>

        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l border-ember-blood pl-6 py-4"
            style={{ minHeight: layout.height || 'auto' }}
          >
            <div className="font-mono text-[10px] text-bone-faded uppercase tracking-widest mb-4">The Ledger Mark</div>
            <DispersingText 
              text={bio}
              className="font-body text-bone-dim text-lg leading-relaxed italic"
              style={{ width: layout.tightestWidth || 'auto' }}
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <StatItem label="Years Active" value={6} />
            <StatItem label="Systems Tamed" value={14} />
            <StatItem label="Lingua Franca" value={6} />
          </div>
        </div>
      </div>
    </section>
  );
};
