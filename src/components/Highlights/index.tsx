/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import VanillaTilt from 'vanilla-tilt';
import { SectionHeading } from '../shared/SectionHeading';
import { CornerBrackets } from '../shared/CornerBrackets';

interface DeedCardProps {
  index: string;
  title: string;
  description: string;
  delay: number;
}

const DeedCard: React.FC<DeedCardProps> = ({ index, title, description, delay }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 600,
        reverse: true,
        glare: true,
        'max-glare': 0.1,
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="group relative"
    >
      <div 
        ref={tiltRef}
        className="relative bg-ink-deep p-8 md:p-10 border border-bone-faded/10 transition-colors duration-500 group-hover:bg-ink-iron overflow-hidden"
      >
        <span className="absolute top-6 right-6 font-subdisplay text-xs text-bone-faded group-hover:text-gilt transition-colors">
          {index}
        </span>
        
        <h3 className="font-display text-2xl text-bone-white mb-4 tracking-wide uppercase transition-colors group-hover:text-soul-pale">
          {title}
        </h3>
        
        <p className="font-body text-bone-dim leading-relaxed italic text-sm md:text-base">
          {description}
        </p>

        <CornerBrackets className="text-bone-faded/20 group-hover:border-gilt transition-colors duration-500" />
        
        {/* Hover blood-rule */}
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-ember-blood transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

export const Highlights: React.FC = () => {
  const deeds = [
    {
      index: "I",
      title: "DNB Bank — Copilot Bindings",
      description: "Binding Copilot Studio agents and Power Automate flows into the secure foundations of DNB. Scaling identity governance and automation in the regulated shadows."
    },
    {
      index: "II",
      title: "SEB — The Agentic Thesis",
      description: "A scholar's pursuit into Agentic AI within the iron-clad walls of SEB. Developing frameworks for autonomous reasoning where failure is not an option."
    },
    {
      index: "III",
      title: "Örebro University — The Decay Model",
      description: "Modernizing data architecture through Medallion rites. Forging decay-curve models in Power BI to forecast the inevitable fade of resources."
    }
  ];

  return (
    <section id="highlights" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          numeral="III" 
          title="The Deeds" 
          sigil="serpent"
        />
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {deeds.map((deed, i) => (
            <DeedCard 
              key={i} 
              {...deed} 
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
