import { useState } from 'react';
import AuditForm from './components/AuditForm';
import ResultsDashboard from './components/ResultsDashboard';
import { calculateAudit } from './auditEngine';
import './App.css';

export default function App() {
  const [phase, setPhase] = useState('landing'); // 'landing' | 'form' | 'results'
  const [auditResult, setAuditResult] = useState(null);

  const handleFormComplete = (formData) => {
    const result = calculateAudit(formData);
    setAuditResult(result);
    setPhase('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAuditResult(null);
    setPhase('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startAudit = () => {
    setPhase('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {phase === 'landing' && (
        <LandingPage onStart={startAudit} />
      )}
      {phase === 'form' && (
        <AuditForm onComplete={handleFormComplete} />
      )}
      {phase === 'results' && (
        <ResultsDashboard result={auditResult} onReset={handleReset} />
      )}
    </div>
  );
}

function LandingPage({ onStart }) {
  const features = [
    {
      icon: '🏢',
      title: "Biznes Diagnostikasi",
      desc: "CRM, sotuv bo'limi, ijtimoiy tarmoq va operatsion tizimlaringizni chuqur tahlil qilamiz"
    },
    {
      icon: '💰',
      title: "Moliyaviy Hisob-kitob",
      desc: "Maqsadga erishish uchun aniq raqamlar: kerakli lidlar, byudjet va konversiya ko'rsatkichlari"
    },
    {
      icon: '📈',
      title: "Marketing Strategiyasi",
      desc: "Har bir platforma uchun CPL benchmark va optimal byudjet taqsimoti tavsiyasi"
    },
    {
      icon: '⚡',
      title: "Tezkor Yechimlar",
      desc: "Konkret muammolar va ularning haftalik kesimda amalga oshiriladigan yechimlari"
    },
    {
      icon: '🎯',
      title: "Unit Iqtisodiyot",
      desc: "CAC, LTV va LTV:CAC nisbatlarini hisoblaydi — biznesingiz qanchalik rentabelligini ko'rsatadi"
    },
    {
      icon: '🗺️',
      title: "Harakat Rejasi",
      desc: "Qayerdan boshlash, qachon, qancha xarajat qilish — hamma narsa aniq tartibda"
    },
  ];

  const stats = [
    { value: '9+', label: "Tahlil o'lchovi" },
    { value: '4', label: "Audit moduli" },
    { value: '8', label: "Reklama platformasi" },
    { value: '11', label: "Biznes sohasi" },
  ];

  return (
    <div className="landing">
      {/* HERO */}
      <div className="hero">
        <div className="hero-bg-orb orb-1" />
        <div className="hero-bg-orb orb-2" />
        <div className="hero-content">
          <div className="hero-badge">🚀 Marketing & Moliya Audit Platformasi</div>
          <h1 className="hero-title">
            Biznesingizni<br />
            <span className="gradient-text">Chuqur Tahlil</span><br />
            Qiling
          </h1>
          <p className="hero-desc">
            9 ta savol orqali marketing va moliyaviy holatni tahlil qilamiz.
            Qayerda pul yo'qotayotganingizni va qanday tuzatish kerakligini aniq ko'rsatamiz.
          </p>
          <div className="hero-actions">
            <button className="btn-primary hero-btn" onClick={onStart} id="start-audit-btn">
              🔍 Auditni Boshlash
              <span className="hero-btn-time">~3 daqiqa</span>
            </button>
          </div>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-section">
        <div className="section-header">
          <div className="section-tag">✨ Nima tahlil qilinadi?</div>
          <h2 className="section-title">To'liq 360° Biznes Audit</h2>
          <p className="section-subtitle">Har bir soha bo'yicha aniq raqamlar va amaliy tavsiyalar</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card animate-fadeInUp animate-delay-${i + 1}`}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-section">
        <div className="section-header">
          <div className="section-tag">📋 Qanday ishlaydi?</div>
          <h2 className="section-title">3 qadamda natija</h2>
        </div>
        <div className="steps-row">
          {[
            { num: '01', title: "Savollarga Javob Bering", desc: "4 ta modul bo'yicha 13 ta savol — 3 daqiqa vaqtingizni oladi", icon: '📝' },
            { num: '02', title: "Tizim Tahlil Qiladi", desc: "Algoritmimiz 20+ metrikani hisoblaydi va muammolarni aniqlaydi", icon: '⚙️' },
            { num: '03', title: "Natijani Ko'ring", desc: "Interaktiv dashboard, grafiklar va aniq harakat rejasi taqdim etiladi", icon: '📊' },
          ].map((s, i) => (
            <div key={i} className="how-step">
              <div className="how-num">{s.num}</div>
              <div className="how-icon">{s.icon}</div>
              <div className="how-title">{s.title}</div>
              <div className="how-desc">{s.desc}</div>
              {i < 2 && <div className="how-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="landing-cta">
        <h2 className="cta-title">Tayyor bo'ldingizmi?</h2>
        <p className="cta-desc">Hozir audit boshlang va biznesingizning to'liq rasmini ko'ring</p>
        <button className="btn-primary cta-btn" onClick={onStart} id="cta-start-btn">
          🚀 Bepul Auditni Boshlash
        </button>
      </div>
    </div>
  );
}
