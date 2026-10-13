'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealSectionProps = {
  id: string;
  className: string;
  children: ReactNode;
};

export function RevealSection({ id, className, children }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 1, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
