import React, { useState, useEffect } from 'react';
import { FaTelegramPlane, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Laptop, Zap, Bot, ArrowUpRight } from 'lucide-react';
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
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50 flex items-center justify-center p-4 md:p-8 relative overflow-y-auto font-sans">
      
      {/* Dynamic Cursor Background Glow (Slate/Zinc glow) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(161, 161, 170, 0.05), transparent 60%)`
        }}
      />
      
      {/* Antigravity Particle Animation (Monochrome) */}
      <ParticleVortex />
      
      {/* Dashboard Wrapper */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 items-stretch relative z-10 my-auto py-8">
        
        {/* Left Column - Profile Card */}
        <div className="w-full lg:w-[350px] shrink-0 border border-zinc-800 bg-zinc-900/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between">
          <div>
            {/* Avatar / Profile Frame */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-6">
              <div className="w-24 h-24 rounded-full border border-zinc-800 overflow-hidden mb-4 bg-zinc-950 flex items-center justify-center relative">
                <img 
                  src="/profile_nobg.png" 
                  alt="Samadev"
                  className="w-full h-full object-cover object-top scale-[1.35] translate-y-1.5 relative z-10"
                />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-100">Samandar Qurbonov</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-900 text-zinc-400 border border-zinc-800">Pro</span>
              </div>
              <p className="text-xs text-zinc-500 font-mono tracking-wider">@Sama_Dev</p>
            </div>

            {/* Bio */}
            <div className="border-t border-zinc-800/60 py-6">
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                Raqamli mahsulotlarning vizual va texnik mukammalligini yaratuvchi injener. Murakkab g'oyalarni AI va ilg'or veb-texnologiyalar yordamida yuqori sifatli kodga aylantiraman.
              </p>
            </div>
          </div>

          {/* Core Roles / Skills */}
          <div className="border-t border-zinc-800/60 pt-6 space-y-3.5">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <div className="p-1.5 rounded-md bg-zinc-950 border border-zinc-800">
                <Laptop size={14} className="text-sky-400" />
              </div>
              <span>Frontend Arxitektor</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <div className="p-1.5 rounded-md bg-zinc-950 border border-zinc-800">
                <Zap size={14} className="text-amber-400" />
              </div>
              <span>Vibe Coder</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <div className="p-1.5 rounded-md bg-zinc-950 border border-zinc-800">
                <Bot size={14} className="text-emerald-400" />
              </div>
              <span>AI & Avtomatlashtirish</span>
            </div>
          </div>
        </div>

        {/* Right Column - Links Card */}
        <div className="flex-1 border border-zinc-800 bg-zinc-900/10 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Title Section */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-50">Bog'lanish</h1>
              <p className="text-sm text-zinc-400 mt-1">Mening ijtimoiy tarmoqlarim va aloqa ma'lumotlarim.</p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACTS.map((contact) => {
                const Icon = contact.icon;
                
                return (
                  <a 
                    key={contact.id} 
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-200 overflow-hidden"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 ${contact.iconClass} transition-colors`}>
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-[15px] text-zinc-200 group-hover:text-zinc-50 transition-colors leading-snug">{contact.title}</h3>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5 truncate max-w-[180px] sm:max-w-[200px]">{contact.value}</p>
                      </div>
                    </div>

                    <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Section */}
          <div className="border-t border-zinc-800/60 mt-8 pt-6 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>© 2026 SamaDev</span>
            <span>Vibe coder</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
