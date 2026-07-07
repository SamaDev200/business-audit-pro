import React, { useState, useEffect } from 'react';
import { FaTelegramPlane, FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Laptop, Zap, Bot } from 'lucide-react';
import ParticleVortex from './ParticleVortex';

const CONTACTS = [
  {
    id: 'tg',
    title: 'Telegram',
    value: '@Sama_Dev',
    url: 'https://t.me/Sama_Dev',
    icon: FaTelegramPlane,
    iconClass: 'text-[#2AABEE]',
  },
  {
    id: 'gh',
    title: 'GitHub',
    value: 'SamaDev200',
    url: 'https://github.com/SamaDev200',
    icon: FaGithub,
    iconClass: 'text-white',
  },
  {
    id: 'in',
    title: 'LinkedIn',
    value: 'samadev',
    url: 'https://linkedin.com/in/samadev',
    icon: FaLinkedin,
    iconClass: 'text-[#0077B5]',
  },
  {
    id: 'ig',
    title: 'Instagram',
    value: 'saman_darbek2000',
    url: 'https://instagram.com/saman_darbek2000',
    icon: FaInstagram,
    iconClass: 'text-[#E1306C]',
  },
  {
    id: 'email',
    title: 'Pochta',
    value: 'darbeksaman320@gmail.com',
    url: 'mailto:darbeksaman320@gmail.com',
    icon: FaEnvelope,
    iconClass: 'text-[#EA4335]',
  },
  {
    id: 'phone',
    title: 'Telefon',
    value: '+998 99 662 56 02',
    url: 'tel:+998996625602',
    icon: FaPhone,
    iconClass: 'text-[#34A853]',
  }
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white font-sans flex flex-col md:flex-row overflow-hidden relative">
      
      {/* Dynamic Cursor Background Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232,121,249,0.12), transparent 40%)`
        }}
      />
      
      {/* Antigravity Particle Animation */}
      <ParticleVortex />
      
      {/* Left Column */}
      <div className="w-full h-[45vh] md:h-screen md:w-[350px] lg:w-[420px] shrink-0 flex flex-col bg-transparent border-b md:border-b-0 md:border-r border-white/10 relative z-10">
        
        {/* Profile Image Area */}
        <div className="w-full flex-1 md:h-[55%] relative overflow-hidden bg-transparent flex items-start justify-center">
          {/* Subtle gradient to blend the bottom into the bio section */}
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
          
          <img 
            src="/profile_nobg.png" 
            alt="Samadev"
            className="w-full h-full object-contain object-top pt-8 scale-[1.15] relative z-10"
          />
        </div>
        
        {/* Bio Area */}
        <div className="bg-transparent p-5 md:p-10 z-20 flex flex-col justify-end shrink-0 relative">
          {/* Dark backing for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent -z-10 pointer-events-none"></div>
          <p className="text-gray-300 text-[12px] md:text-[14.5px] leading-relaxed mb-5 md:mb-8 font-medium">
            Raqamli mahsulotlarning vizual va texnik mukammalligini yaratuvchi injener. Murakkab g'oyalarni AI va ilg'or veb-texnologiyalar yordamida yuqori sifatli kodga aylantiraman.
          </p>
          
          <div className="space-y-2.5 md:space-y-4 text-[12px] md:text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-3">
              <Laptop size={16} className="text-gray-500" />
              <span>Frontend Arxitektor</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap size={16} className="text-gray-500" />
              <span>Vibe Coder</span>
            </div>
            <div className="flex items-center gap-3">
              <Bot size={16} className="text-gray-500" />
              <span>AI & Avtomatlashtirish</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 h-[55vh] md:h-screen p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center md:items-start relative overflow-hidden bg-transparent z-10">
        
        <div className="w-full max-w-3xl flex flex-col justify-center h-full relative z-10">
          {/* Title */}
          <h1 
            className="text-2xl md:text-[42px] lg:text-[54px] font-mono font-bold text-[#e879f9] uppercase tracking-[0.2em] mb-6 md:mb-12 text-center md:text-left shrink-0" 
            style={{ textShadow: '0 0 20px rgba(232, 121, 249, 0.4)' }}
          >
            BOG'LANISH
          </h1>

          {/* Grid Container */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 w-full">
            {CONTACTS.map((contact) => {
              const Icon = contact.icon;
              
              return (
                <a 
                  key={contact.id} 
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-black/40 backdrop-blur-xl border border-[#e879f9]/20 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center text-center hover:border-[#e879f9]/80 transition-all hover:shadow-[0_0_20px_rgba(232,121,249,0.15)] overflow-hidden min-h-[85px] md:min-h-[140px]"
                >
                  {/* Background ambient glow inside card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#e879f9]/5 rounded-full blur-xl group-hover:bg-[#e879f9]/15 transition-colors"></div>

                  {/* Logo */}
                  <div className="mb-1.5 md:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 md:w-10 md:h-10 ${contact.iconClass} drop-shadow-lg`} />
                  </div>

                  {/* Text Info */}
                  <div className="relative z-10 w-full px-1">
                    <h2 className="text-white font-semibold text-[11px] md:text-[16px] tracking-wide leading-tight">{contact.title}</h2>
                    <p className="text-[#e879f9] text-[9px] md:text-[13px] mt-0.5 md:mt-1 font-mono tracking-wider truncate w-full">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default App;
