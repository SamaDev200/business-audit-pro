import { useState } from 'react';
import './AuditForm.css';
import { PLATFORMS, INDUSTRIES, SOCIAL_CONDITIONS, GLOSSARY } from '../auditEngine';
import { getSocialIcon } from './SocialIcons';

// ===== TERM TIP COMPONENT =====
function TermTip({ glossaryKey }) {
  const [open, setOpen] = useState(false);
  const info = GLOSSARY[glossaryKey];
  if (!info) return null;
  return (
    <span className="term-tip-wrapper">
      <button
        className="term-tip-btn"
        onClick={e => { e.preventDefault(); setOpen(o => !o); }}
        title="Nima bu?"
      >
        <span className="term-tip-icon">?</span>
      </button>
      {open && (
        <div className="term-tip-popup">
          <div className="ttp-header">
            <span className="ttp-term">{info.term}</span>
            <span className="ttp-full">{info.full}</span>
            <button className="ttp-close" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="ttp-uz">{info.uz}</div>
          <div className="ttp-desc">{info.desc}</div>
          {info.example && (
            <div className="ttp-example">
              <span className="ttp-ex-label">Misol:</span> {info.example}
            </div>
          )}
        </div>
      )}
    </span>
  );
}

const STEPS = [
  { id: 1, label: 'Biznes holati', icon: '🏢', color: '#6C63FF' },
  { id: 2, label: 'Moliyaviy maqsad', icon: '💰', color: '#FF6B6B' },
  { id: 3, label: 'Marketing', icon: '📈', color: '#FFD93D' },
  { id: 4, label: 'Sotuv tizimi', icon: '🎯', color: '#6BCB77' },
];

const DEFAULT_FORM = {
  // Step 1 - Business
  isBusinessOwner: null,
  hasCrm: null,
  hasSalesTeam: null,
  socialCondition: '',
  industry: '',

  // Step 2 - Finance
  monthlyRevenueGoal: '',
  currentRevenue: '',
  averageCheck: '',
  currentBudget: '',

  // Step 3 - Marketing
  platforms: '',
  conversionRate: '',

  // Step 4 - Sales
  responseTimeHours: '',
  teamSize: '',
  mainChallenge: '',
};

const CHALLENGES = [
  { id: 'low_leads', label: 'Lidlar kam keladi', icon: '📉' },
  { id: 'low_conversion', label: 'Lidlar sotuvga aylanmaydi', icon: '🔄' },
  { id: 'expensive_ads', label: "Reklama qimmat, natija yo'q", icon: '💸' },
  { id: 'no_system', label: "Tizim yo'q, hammasi tartibsiz", icon: '🌀' },
  { id: 'competition', label: "Raqobat juda kuchli", icon: '⚔️' },
  { id: 'scaling', label: 'O\'sib bo\'lmayapman, to\'ydim', icon: '🚀' },
];

export default function AuditForm({ onComplete }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(DEFAULT_FORM);
  const [direction, setDirection] = useState('right');

  const progress = ((step - 1) / STEPS.length) * 100;

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const goNext = () => {
    setDirection('right');
    setStep(s => Math.min(s + 1, STEPS.length));
  };

  const goPrev = () => {
    setDirection('left');
    setStep(s => Math.max(s - 1, 1));
  };

  const handleSubmit = () => {
    onComplete(form);
  };

  const canProceed = () => {
    if (step === 1) return form.isBusinessOwner !== null && form.hasCrm !== null && form.hasSalesTeam !== null && form.socialCondition && form.industry;
    if (step === 2) return form.monthlyRevenueGoal && form.averageCheck;
    if (step === 3) return form.platforms && form.conversionRate;
    if (step === 4) return form.responseTimeHours;
    return false;
  };

  return (
    <div className="audit-form-wrapper">
      {/* HEADER */}
      <div className="audit-header">
        <div className="audit-logo">
          <div className="audit-logo-icon">📊</div>
          <div>
            <div className="audit-logo-title">Business Audit Pro</div>
            <div className="audit-logo-sub">Marketing & Moliyaviy Audit</div>
          </div>
        </div>

        <div className="step-badges">
          {STEPS.map(s => (
            <div
              key={s.id}
              className={`step-badge ${step === s.id ? 'active' : ''} ${step > s.id ? 'done' : ''}`}
            >
              {step > s.id ? '✓' : s.id}
            </div>
          ))}
        </div>
      </div>

      {/* PROGRESS */}
      <div className="progress-section">
        <div className="progress-info">
          <span className="progress-step-label">
            {STEPS[step - 1].icon} {STEPS[step - 1].label}
          </span>
          <span className="progress-percent">{Math.round(((step - 0.5) / STEPS.length) * 100)}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${((step - 0.5) / STEPS.length) * 100}%` }} />
        </div>
      </div>

      {/* FORM CONTENT */}
      <div className={`form-content animate-fadeInScale`} key={step}>

        {/* ====== STEP 1: BIZNES HOLATI ====== */}
        {step === 1 && (
          <div className="step-container">
            <div className="section-tag">🏢 Biznes Holati</div>
            <h2 className="step-title">Biznesingiz haqida gapiring</h2>
            <p className="step-subtitle">Quyidagi savollarga halol javob bering — natija shunchalik aniq bo'ladi</p>

            <div className="questions-grid">
              {/* Q1: Biznes egasi */}
              <div className="question-block animate-fadeInUp animate-delay-1">
                <label className="question-label">
                  <span className="q-num">01</span> Siz biznes egasimisiz?
                </label>
                <div className="bool-options">
                  {[{ val: true, label: "Ha, men egaman", icon: '✅' }, { val: false, label: "Yo'q, xodimman", icon: '👤' }].map(opt => (
                    <div
                      key={String(opt.val)}
                      className={`option-card ${form.isBusinessOwner === opt.val ? 'selected' : ''}`}
                      onClick={() => update('isBusinessOwner', opt.val)}
                    >
                      <span className="option-icon">{opt.icon}</span>
                      <span className="option-label">{opt.label}</span>
                      <div className="option-check" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Q2: CRM */}
              <div className="question-block animate-fadeInUp animate-delay-2">
                <label className="question-label">
                  <span className="q-num">02</span>
                  CRM tizimingiz bormi?
                  <TermTip glossaryKey="crm" />
                </label>
                <div className="term-desc-inline">📋 Mijozlar ma'lumotini saqlovchi dastur (masalan: AmoCRM, Bitrix24)</div>
                <div className="bool-options">
                  {[
                    { val: true, label: "Ha, ishlataman", icon: '📊' },
                    { val: false, label: "Yo'q, kerak emas deb o'ylaganman", icon: '❌' }
                  ].map(opt => (
                    <div
                      key={String(opt.val)}
                      className={`option-card ${form.hasCrm === opt.val ? 'selected' : ''}`}
                      onClick={() => update('hasCrm', opt.val)}
                    >
                      <span className="option-icon">{opt.icon}</span>
                      <span className="option-label">{opt.label}</span>
                      <div className="option-check" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Q3: Sales Team */}
              <div className="question-block animate-fadeInUp animate-delay-3">
                <label className="question-label">
                  <span className="q-num">03</span> Alohida sotuv bo'limingiz bormi?
                </label>
                <div className="bool-options">
                  {[
                    { val: true, label: "Ha, menejerlar bor", icon: '👥' },
                    { val: false, label: "Yo'q, o'zim sotaman", icon: '🙋' }
                  ].map(opt => (
                    <div
                      key={String(opt.val)}
                      className={`option-card ${form.hasSalesTeam === opt.val ? 'selected' : ''}`}
                      onClick={() => update('hasSalesTeam', opt.val)}
                    >
                      <span className="option-icon">{opt.icon}</span>
                      <span className="option-label">{opt.label}</span>
                      <div className="option-check" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Q4: Social Media */}
              <div className="question-block animate-fadeInUp animate-delay-4">
                <label className="question-label">
                  <span className="q-num">04</span> Ijtimoiy tarmoqlaringiz holati?
                </label>
                <div className="options-list">
                  {SOCIAL_CONDITIONS.map(opt => (
                    <div
                      key={opt.id}
                      className={`option-card ${form.socialCondition === opt.id ? 'selected' : ''}`}
                      onClick={() => update('socialCondition', opt.id)}
                    >
                      <span className="option-icon">{opt.icon}</span>
                      <span className="option-label">{opt.label}</span>
                      <div className="option-check" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Q5: Industry */}
              <div className="question-block animate-fadeInUp animate-delay-5">
                <label className="question-label">
                  <span className="q-num">05</span> Biznesingiz qaysi sohada?
                </label>
                <div className="industry-grid">
                  {INDUSTRIES.map(ind => (
                    <div
                      key={ind.id}
                      className={`industry-card ${form.industry === ind.id ? 'selected' : ''}`}
                      onClick={() => update('industry', ind.id)}
                    >
                      <span className="ind-icon">{ind.icon}</span>
                      <span className="ind-label">{ind.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== STEP 2: MOLIYAVIY MAQSAD ====== */}
        {step === 2 && (
          <div className="step-container">
            <div className="section-tag">💰 Moliyaviy Maqsad</div>
            <h2 className="step-title">Moliyaviy ko'rsatkichlar</h2>
            <p className="step-subtitle">Aniq raqamlar = aniq natijalar. Dollar ($) da kiriting</p>

            <div className="questions-grid">
              <div className="question-block animate-fadeInUp animate-delay-1">
                <label className="question-label">
                  <span className="q-num">06</span> Oylik DAROMAD maqsadingiz
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input with-prefix"
                    placeholder="Masalan: 5000"
                    value={form.monthlyRevenueGoal}
                    onChange={e => update('monthlyRevenueGoal', e.target.value)}
                  />
                </div>
                <div className="quick-picks">
                  {[1000, 3000, 5000, 10000, 20000].map(v => (
                    <button key={v} className={`quick-pick ${form.monthlyRevenueGoal == v ? 'active' : ''}`} onClick={() => update('monthlyRevenueGoal', v)}>${v.toLocaleString()}</button>
                  ))}
                </div>
              </div>

              <div className="question-block animate-fadeInUp animate-delay-2">
                <label className="question-label">
                  <span className="q-num">07</span> Joriy oylik daromadingiz (ixtiyoriy)
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input with-prefix"
                    placeholder="Masalan: 2000 (bo'lmasa 0)"
                    value={form.currentRevenue}
                    onChange={e => update('currentRevenue', e.target.value)}
                  />
                </div>
              </div>

              <div className="question-block animate-fadeInUp animate-delay-3">
                <label className="question-label">
                  <span className="q-num">08</span> O'rtacha chek qancha?
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input with-prefix"
                    placeholder="Masalan: 60"
                    value={form.averageCheck}
                    onChange={e => update('averageCheck', e.target.value)}
                  />
                </div>
                <p className="input-hint">💡 Bir sotuvdan o'rtacha qancha pul olasiz?</p>
                <div className="quick-picks">
                  {[20, 50, 100, 250, 500, 1000].map(v => (
                    <button key={v} className={`quick-pick ${form.averageCheck == v ? 'active' : ''}`} onClick={() => update('averageCheck', v)}>${v}</button>
                  ))}
                </div>
              </div>

              <div className="question-block animate-fadeInUp animate-delay-4">
                <label className="question-label">
                  <span className="q-num">09</span> Hozirgi oylik reklama byudjetingiz (ixtiyoriy)
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">$</span>
                  <input
                    type="number"
                    className="form-input with-prefix"
                    placeholder="Masalan: 500 (bo'lmasa 0)"
                    value={form.currentBudget}
                    onChange={e => update('currentBudget', e.target.value)}
                  />
                </div>
              </div>

              {/* Live Preview */}
              {form.monthlyRevenueGoal && form.averageCheck && (
                <div className="live-preview animate-fadeInScale">
                  <div className="live-preview-title">⚡ Jonli hisob</div>
                  <div className="live-preview-metrics">
                    <div className="lp-metric">
                      <div className="lp-label">Kerakli mijozlar</div>
                      <div className="lp-value">{Math.ceil(parseFloat(form.monthlyRevenueGoal) / parseFloat(form.averageCheck))} ta</div>
                    </div>
                    <div className="lp-divider" />
                    <div className="lp-metric">
                      <div className="lp-label">Maqsad</div>
                      <div className="lp-value">${parseFloat(form.monthlyRevenueGoal).toLocaleString()}</div>
                    </div>
                    <div className="lp-divider" />
                    <div className="lp-metric">
                      <div className="lp-label">O'rtacha chek</div>
                      <div className="lp-value">${parseFloat(form.averageCheck).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ====== STEP 3: MARKETING ====== */}
        {step === 3 && (
          <div className="step-container">
            <div className="section-tag">📈 Marketing & Reklama</div>
            <h2 className="step-title">Reklama va konversiya</h2>
            <p className="step-subtitle">Qayerda reklama qilasiz va qanday natija olasiz?</p>

            <div className="questions-grid">
              <div className="question-block animate-fadeInUp animate-delay-1">
                <label className="question-label">
                  <span className="q-num">10</span> Asosiy reklama platformangiz
                </label>
                <div className="term-desc-inline">💡 Eng ko'p foydalanuvchi bor deb hisoblagan platformani tanlang</div>
                <div className="platform-grid">
                  {PLATFORMS.map(p => (
                    <div
                      key={p.id}
                      className={`platform-card ${form.platforms === p.id ? 'selected' : ''}`}
                      onClick={() => update('platforms', p.id)}
                    >
                      <div className="platform-icon-svg">{getSocialIcon(p.id, 32)}</div>
                      <span className="platform-name">{p.label}</span>
                      <span className="platform-cpl">
                        <TermTip glossaryKey="cpl" />
                        ${p.cpl_min}–${p.cpl_max}/lid
                      </span>
                      <span className="platform-desc">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="question-block animate-fadeInUp animate-delay-2">
                <label className="question-label">
                  <span className="q-num">11</span> Sotuv konversiyasi
                  <TermTip glossaryKey="konversiya" />
                </label>
                <div className="term-desc-inline">📊 Qiziquvchi (lid) kelsa, ulardan necha foizi xarid qiladi?</div>
                <div className="slider-container">
                  <div className="slider-value-display">
                    <span className="slider-main-value">{form.conversionRate || 0}%</span>
                    <span className="slider-desc">
                      {!form.conversionRate ? 'Suring yoki kiriting' :
                        form.conversionRate < 5 ? '😟 Juda past — tizim kerak' :
                        form.conversionRate < 15 ? '🟡 O\'rtacha — yaxshilash mumkin' :
                        form.conversionRate < 30 ? '🟢 Yaxshi!' :
                        '🌟 A\'lo darajada!'}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="range-slider"
                    min={0} max={80} step={1}
                    value={form.conversionRate || 0}
                    onChange={e => update('conversionRate', e.target.value)}
                  />
                  <div className="slider-labels">
                    <span>0%</span>
                    <span>20%</span>
                    <span>40%</span>
                    <span>60%</span>
                    <span>80%</span>
                  </div>
                </div>
                <div className="quick-picks" style={{ marginTop: 16 }}>
                  {[5, 10, 20, 30, 50].map(v => (
                    <button key={v} className={`quick-pick ${form.conversionRate == v ? 'active' : ''}`} onClick={() => update('conversionRate', v)}>{v}%</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====== STEP 4: SOTUV TIZIMI ====== */}
        {step === 4 && (
          <div className="step-container">
            <div className="section-tag">🎯 Sotuv Tizimi</div>
            <h2 className="step-title">Sotuv jarayonlaringiz</h2>
            <p className="step-subtitle">Bu ma'lumotlar eng muhim yo'qotishlarni aniqlashga yordam beradi</p>

            <div className="questions-grid">
              <div className="question-block animate-fadeInUp animate-delay-1">
                <label className="question-label">
                  <span className="q-num">12</span> Lid kelgach, qancha vaqtda javob berasiz?
                </label>
                <div className="options-list">
                  {[
                    { val: '0.08', label: '5 daqiqa ichida (Ideal!)', icon: '⚡', color: 'success' },
                    { val: '0.5', label: '30 daqiqa ichida (Yaxshi)', icon: '✅', color: 'success' },
                    { val: '2', label: '1-2 soat ichida (O\'rtacha)', icon: '🟡', color: 'warning' },
                    { val: '8', label: '3-8 soat (Zaif)', icon: '⚠️', color: 'danger' },
                    { val: '24', label: '1 kun yoki ko\'proq (Xavfli!)', icon: '🔴', color: 'danger' },
                  ].map(opt => (
                    <div
                      key={opt.val}
                      className={`option-card response-card ${form.responseTimeHours === opt.val ? 'selected' : ''} ${form.responseTimeHours === opt.val ? opt.color : ''}`}
                      onClick={() => update('responseTimeHours', opt.val)}
                    >
                      <span className="option-icon">{opt.icon}</span>
                      <span className="option-label">{opt.label}</span>
                      <div className="option-check" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="question-block animate-fadeInUp animate-delay-2">
                <label className="question-label">
                  <span className="q-num">13</span> Asosiy muammongiz nima?
                  <span className="optional-tag">ixtiyoriy</span>
                </label>
                <div className="challenge-grid">
                  {CHALLENGES.map(ch => (
                    <div
                      key={ch.id}
                      className={`challenge-card ${form.mainChallenge === ch.id ? 'selected' : ''}`}
                      onClick={() => update('mainChallenge', ch.id)}
                    >
                      <span>{ch.icon}</span>
                      <span>{ch.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* NAVIGATION */}
      <div className="form-nav">
        <button
          className="btn-secondary"
          onClick={goPrev}
          disabled={step === 1}
          style={{ opacity: step === 1 ? 0 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}
        >
          ← Orqaga
        </button>

        <div className="step-dots">
          {STEPS.map(s => (
            <div
              key={s.id}
              className={`step-dot ${step === s.id ? 'active' : ''} ${step > s.id ? 'done' : ''}`}
            />
          ))}
        </div>

        {step < STEPS.length ? (
          <button
            className="btn-primary"
            onClick={goNext}
            disabled={!canProceed()}
          >
            Keyingisi →
          </button>
        ) : (
          <button
            className="btn-primary submit-btn"
            onClick={handleSubmit}
            disabled={!canProceed()}
          >
            🔍 Auditni boshlash
          </button>
        )}
      </div>
    </div>
  );
}
