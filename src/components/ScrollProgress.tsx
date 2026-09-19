import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#00A8E8] via-[#176BFF] to-[#D9A441] origin-left shadow-[0_0_8px_rgba(23,107,255,0.4)]"
        style={{ scaleX }}
      />
    </div>
  );
};
