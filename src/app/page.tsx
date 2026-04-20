'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Sprout } from 'lucide-react';
import WeatherWidget from '@/components/WeatherWidget';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 opacity-40">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 opacity-40">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 opacity-40">
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-10 py-20">
      <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-10 flex justify-between items-center max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-vibrant-green/40" />
          <span className="font-serif italic font-light text-mist/30 tracking-[0.2em] text-xs lowercase">lunivexie</span>
        </motion.div>
        <WeatherWidget />
      </nav>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center"
      >
        {/* Personaje */}
        <div className="relative h-[400px] lg:h-[650px] w-full flex items-center justify-center order-first lg:order-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-vibrant-green/5 rounded-full blur-[100px] pointer-events-none" />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image 
              src="/personaje.png" 
              alt="Lunivexie Character"
              fill
              className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              priority
            />
          </motion.div>
        </div>

        {/* Info / Links */}
        <div className="space-y-14">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] tracking-[0.4em] font-medium text-vibrant-green/30 uppercase pl-1"
            >
              Ángel Tech • Santiago
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-serif italic font-light tracking-tight text-mist/90 select-none lowercase"
            >
              lunivexie
            </motion.h1>

            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-lg md:text-xl text-mist/60 leading-relaxed font-light whitespace-pre-line"
              >
                Hablo sobre tecnología, <span className="text-mist font-normal">leaks</span> y el lado <span className="text-vibrant-green/60 font-medium italic">orgánico</span> del código 🌿✨
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-mist/40 text-sm tracking-wide font-light max-w-sm leading-relaxed"
              >
                Analizando vulnerabilidades y hardware desde Chile.
              </motion.p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col gap-3"
          >
            {[
              { name: 'Mycellium', url: 'https://lunivexie.github.io/mycellium/', icon: <Sprout className="w-5 h-5 opacity-40" /> },
              { name: 'Twitter / X', url: 'https://x.com/lunivexie', icon: <XIcon /> },
              { name: 'GitHub', url: 'https://github.com/lunivexie', icon: <GithubIcon /> },
              { name: 'Instagram', url: 'https://www.instagram.com/lunivexy', icon: <InstagramIcon /> }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between py-4 border-b border-white/[0.03] hover:border-vibrant-green/20 transition-all duration-700"
              >
                <div className="flex items-center gap-5">
                  <div className="text-mist/20 group-hover:text-vibrant-green/40 transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-light tracking-widest text-mist/40 group-hover:text-mist/80 transition-all text-xs uppercase">{link.name}</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-20 transition-all translate-x-[-10px] group-hover:translate-x-0" />
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="pt-10"
          >
            <a href="mailto:lunivex.dev@gmail.com" className="text-[10px] tracking-[0.3em] text-mist/20 hover:text-vibrant-green/50 transition-colors uppercase font-medium">
              lunivex.dev@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
