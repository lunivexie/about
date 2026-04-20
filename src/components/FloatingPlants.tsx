'use client';

import { motion } from 'framer-motion';

export default function FloatingPlants() {
  const leaves = [
    { size: 20, x: '10%', y: '15%', delay: 0 },
    { size: 30, x: '85%', y: '10%', delay: 1 },
    { size: 25, x: '75%', y: '80%', delay: 2 },
    { size: 15, x: '5%', y: '70%', delay: 0.5 },
    { size: 40, x: '50%', y: '40%', delay: 1.5, opacity: 0.05 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#01110a]">
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: leaf.opacity || 0.15, 
            scale: 1,
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 8,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: leaf.x,
            top: leaf.y,
            width: leaf.size,
            height: leaf.size,
          }}
          className="text-vibrant-green/20"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 12 10 2 12C12 14 12 22 12 22C12 22 12 14 22 12C12 10 12 2 12 2Z" />
          </svg>
        </motion.div>
      ))}
      
      {/* Dynamic Halos */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.05, 0.1, 0.05],
          x: [0, 50, 0],
          y: [0, 30, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-vibrant-green/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2], 
          opacity: [0.03, 0.07, 0.03],
          x: [0, -40, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-soft-leaf/5 rounded-full blur-[100px]"
      />
      
      {/* Constant Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
}
