import {
  AreaChart, Area, BarChart, Bar, FunnelChart, Funnel,
  LabelList, Cell, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid
} from 'recharts';
import './ResultsDashboard.css';
import { GLOSSARY } from '../auditEngine';
import { getSocialIcon } from './SocialIcons';
import { useState } from 'react';

// ===== DASHBOARD TERM TIP =====
function DashTermTip({ glossaryKey }) {
  const [open, setOpen] = useState(false);
  const info = GLOSSARY[glossaryKey];
  if (!info) return null;
  return (
    <span className="dash-term-tip">
      <button
        className="term-tip-btn small"
        onClick={e => { e.stopPropagation(); setOpen(o => !o); }}
        title="Nima bu?"
      >
        <span className="term-tip-icon">?</span>
      </button>
      {open && (
        <div className="term-tip-popup dash-popup">
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

const RISK_LABELS = {
  low: { label: 'Past xavf', color: '#6BCB77', score: 33 },
  medium: { label: "O'rtacha xavf", color: '#FFD93D', score: 66 },
  high: { label: 'Yuqori xavf', color: '#FF6B6B', score: 90 },
};

const PRIORITY_COLORS = {
  high: { bg: 'rgba(255,107,107,0.12)', border: 'rgba(255,107,107,0.3)', text: '#FF6B6B', label: 'Yuqori' },
  medium: { bg: 'rgba(255,217,61,0.1)', border: 'rgba(255,217,61,0.3)', text: '#FFD93D', label: "O'rtacha" },
  low: { bg: 'rgba(107,203,119,0.1)', border: 'rgba(107,203,119,0.25)', text: '#6BCB77', label: 'Past' },
};

const FUNNEL_COLORS = ['#6C63FF', '#8B85FF', '#FFD93D', '#FF9F43', '#6BCB77'];

function NumberAnim({ value, prefix = '', suffix = '' }) {
  return (
    <span>{prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}</span>
  );
}

const CustomFunnelTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="ct-name">{payload[0].payload.name}</div>
        <div className="ct-value">{payload[0].value?.toLocaleString()}</div>
      </div>
    );
  }
  return null;
};

export default function ResultsDashboard({ result, onReset }) {
  if (!result) return null;

  const {
    platformData, industryData, socialData,
    requiredCustomers, requiredLeads, funnelStages,
    minBudget, optimalBudget, realMinBudget, realOptimalBudget,
    cplMin, cplMax, wastedBudget, currBudget,
    penalties, totalPenaltyPercent,
    riskLevel, riskScore,
    margin, cac, ltv, ltvCacRatio,
    revenueGoal, currRevenue, revenueGap, gapPercent,
    roadmap,
    avgCheck, convRate, responseHours, hasCrm, hasSalesTeam,
  } = result;

  const risk = RISK_LABELS[riskLevel];

  const budgetData = [
    { name: 'Minimal', ideal: minBudget, real: realMinBudget },
    { name: 'Optimal', ideal: optimalBudget, real: realOptimalBudget },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* HEADER */}
      <div className="dash-header animate-fadeInUp">
        <div className="dash-logo">
          <div className="dash-logo-icon">📊</div>
          <div>
            <div className="dash-logo-title">Business Audit Pro</div>
            <div className="dash-logo-sub">Marketing & Moliyaviy Audit Natijasi</div>
          </div>
        </div>
        <button className="btn-secondary" onClick={onReset} id="restart-audit-btn">
          ↩ Qayta boshlash
        </button>
      </div>

      {/* HERO METRICS */}
      <div className="hero-metrics animate-fadeInUp animate-delay-1">
        <div className="hero-metric primary">
          <div className="hm-icon">💰</div>
          <div className="hm-label">Oylik maqsad</div>
          <div className="hm-value">${revenueGoal.toLocaleString()}</div>
          {currRevenue > 0 && (
            <div className="hm-sub">Joriy: ${currRevenue.toLocaleString()} (Farq: +${revenueGap.toLocaleString()})</div>
          )}
        </div>
        <div className="hero-metric">
          <div className="hm-icon">👥</div>
          <div className="hm-label">Kerakli mijozlar</div>
          <div className="hm-value">{requiredCustomers.toLocaleString()}</div>
          <div className="hm-sub">Oyiga {avgCheck}$ chek bilan</div>
        </div>
        <div className="hero-metric">
          <div className="hm-icon">📣</div>
          <div className="hm-label">Kerakli lidlar</div>
          <div className="hm-value">{requiredLeads.toLocaleString()}</div>
          <div className="hm-sub">{convRate}% konversiya bilan</div>
        </div>
        <div className={`hero-metric risk-${riskLevel}`}>
          <div className="hm-icon">⚠️</div>
          <div className="hm-label">Xavf darajasi</div>
          <div className="hm-value" style={{ color: risk.color }}>{risk.label}</div>
          <div className="hm-sub">Reyting: {riskScore}/100</div>
        </div>
      </div>

      <div className="dashboard-grid">

        {/* ===== LEFT COLUMN ===== */}
        <div className="dash-col-main">

          {/* BIZNES HOLATI KARTASI */}
          <div className="dash-card animate-fadeInUp animate-delay-2">
            <div className="card-header">
              <div className="card-title">🏢 Biznes Holati</div>
            </div>
            <div className="status-grid">
              <div className={`status-item ${hasCrm ? 'good' : 'bad'}`}>
                <span className="si-icon">{hasCrm ? '✅' : '❌'}</span>
                <div>
                  <div className="si-label">CRM tizimi</div>
                  <div className="si-sub">{hasCrm ? "Faol — ajoyib!" : "Yo'q — lidlar kuymoqda"}</div>
                </div>
              </div>
              <div className={`status-item ${hasSalesTeam ? 'good' : 'bad'}`}>
                <span className="si-icon">{hasSalesTeam ? '✅' : '❌'}</span>
                <div>
                  <div className="si-label">Sotuv bo'limi</div>
                  <div className="si-sub">{hasSalesTeam ? "Menejerlar mavjud" : "Yo'q — sotuv zaif"}</div>
                </div>
              </div>
              <div className={`status-item ${socialData.penalty === 0 ? 'good' : socialData.penalty <= 10 ? 'warn' : 'bad'}`}>
                <span className="si-icon">{socialData.icon}</span>
                <div>
                  <div className="si-label">Ijtimoiy tarmoq</div>
                  <div className="si-sub">{socialData.label}</div>
                </div>
              </div>
              <div className={`status-item ${responseHours <= 0.5 ? 'good' : responseHours <= 2 ? 'warn' : 'bad'}`}>
                <span className="si-icon">{responseHours <= 0.5 ? '⚡' : responseHours <= 2 ? '🟡' : '🔴'}</span>
                <div>
                  <div className="si-label">Javob tezligi</div>
                  <div className="si-sub">
                    {responseHours < 1 ? `${Math.round(responseHours * 60)} daqiqa` : `${responseHours} soat`}
                  </div>
                </div>
              </div>
            </div>

            {/* Risk bar */}
            <div style={{ marginTop: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Umumiy xavf darajasi</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: risk.color }}>{riskScore}%</span>
              </div>
              <div className="risk-bar">
                <div
                  className={`risk-fill ${riskLevel}`}
                  style={{ width: `${riskScore}%` }}
                />
              </div>
            </div>
          </div>

          {/* SOTUV VORONKASI (FUNNEL) */}
          <div className="dash-card animate-fadeInUp animate-delay-3">
            <div className="card-header">
              <div className="card-title">📈 Sotuv Voronkasi (Funnel)</div>
              <div className="badge badge-primary">Oylik prognoz</div>
            </div>
            <div className="funnel-visual">
              {funnelStages.map((stage, i) => (
                <div key={i} className="funnel-stage" style={{ '--width': `${100 - i * 15}%`, '--color': stage.color }}>
                  <div className="funnel-bar" style={{ width: `${100 - i * 15}%`, background: stage.color }}>
                    <span className="funnel-label">{stage.name}</span>
                    <span className="funnel-value">{stage.value?.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BUDGET COMPARISON CHART */}
          <div className="dash-card animate-fadeInUp animate-delay-4">
            <div className="card-header">
              <div className="card-title">💠 Byudjet Tahlili</div>
              {totalPenaltyPercent > 0 && (
                <div className="badge badge-danger">+{totalPenaltyPercent}% jarima</div>
              )}
            </div>
            <div className="budget-compare">
              <div className="budget-scenario ideal">
                <div className="bs-label">Ideal byudjet</div>
                <div className="bs-subtitle">(Tizim to'liq bo'lsa)</div>
                <div className="bs-range">
                  <div className="bs-min">${minBudget.toLocaleString()}</div>
                  <div className="bs-sep">—</div>
                  <div className="bs-max">${optimalBudget.toLocaleString()}</div>
                </div>
                <div className="bs-hint">CPL: ${cplMin}-${cplMax}</div>
              </div>
              {totalPenaltyPercent > 0 && (
                <div className="budget-scenario real">
                  <div className="bs-label">Real byudjet</div>
                  <div className="bs-subtitle">(Hozirgi holat bilan)</div>
                  <div className="bs-range">
                    <div className="bs-min">${realMinBudget.toLocaleString()}</div>
                    <div className="bs-sep">—</div>
                    <div className="bs-max">${realOptimalBudget.toLocaleString()}</div>
                  </div>
                  <div className="bs-hint danger-text">+{totalPenaltyPercent}% qimmatroq</div>
                </div>
              )}
            </div>

            <div style={{ height: 180, marginTop: 20 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetData} barSize={40} barGap={8}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
                  <Tooltip content={({ active, payload }) => active && payload?.length ? (
                    <div className="custom-tooltip">
                      <div className="ct-name">{payload[0]?.name}</div>
                      {payload.map((p, i) => (
                        <div key={i} style={{ color: p.color }}>{p.name === 'ideal' ? 'Ideal' : 'Real'}: ${p.value?.toLocaleString()}</div>
                      ))}
                    </div>
                  ) : null} />
                  <Bar dataKey="ideal" fill="#6C63FF" radius={[6, 6, 0, 0]} name="ideal" />
                  {totalPenaltyPercent > 0 && (
                    <Bar dataKey="real" fill="#FF6B6B" radius={[6, 6, 0, 0]} name="real" />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>

            {currBudget > 0 && wastedBudget > 0 && (
              <div className="wasted-budget">
                <div className="wb-icon">🔥</div>
                <div>
                  <div className="wb-title">Hozirgi byudjetdan yo'qotish</div>
                  <div className="wb-desc">
                    ${currBudget} dan <strong>${wastedBudget}</strong> ({totalPenaltyPercent}%) tizim muammolari sababli behuda sarflanmoqda
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="dash-col-side">

          {/* UNIT ECONOMICS */}
          <div className="dash-card animate-fadeInUp animate-delay-2">
            <div className="card-header">
              <div className="card-title">📐 Unit Iqtisodiyot</div>
            </div>
            <div className="unit-metrics">
              <div className="unit-metric">
                <div className="um-icon" style={{ background: 'rgba(108,99,255,0.15)' }}>🎯</div>
                <div className="um-info">
                  <div className="um-label">CAC — Jalb narxi <DashTermTip glossaryKey="cac" /></div>
                  <div className="um-value">${cac}</div>
                  <div className="um-sub">1 xaridorni jalb qilish xarajati</div>
                </div>
              </div>
              <div className="unit-metric">
                <div className="um-icon" style={{ background: 'rgba(107,203,119,0.15)' }}>♻️</div>
                <div className="um-info">
                  <div className="um-label">LTV — Umrbod qiymat <DashTermTip glossaryKey="ltv" /></div>
                  <div className="um-value">${ltv}</div>
                  <div className="um-sub">Mijoz 3 marta xarid qilsa</div>
                </div>
              </div>
              <div className="unit-metric">
                <div className="um-icon" style={{ background: 'rgba(255,217,61,0.15)' }}>📊</div>
                <div className="um-info">
                  <div className="um-label">LTV:CAC nisbati <DashTermTip glossaryKey="ltv_cac" /></div>
                  <div className={`um-value ${ltvCacRatio >= 3 ? 'good' : ltvCacRatio >= 1.5 ? 'warn' : 'bad'}`}>
                    {ltvCacRatio}x
                  </div>
                  <div className="um-sub">{ltvCacRatio >= 3 ? '🌟 A\'lo! (3x dan yuqori ideal)' : ltvCacRatio >= 1.5 ? '🟡 Yaxshi (1.5-3x)' : '🔴 Past — zarar ko\'p'}</div>
                </div>
              </div>
              <div className="unit-metric">
                <div className="um-icon" style={{ background: 'rgba(255,107,107,0.15)' }}>💵</div>
                <div className="um-info">
                  <div className="um-label">Sof marja (Foyda %) <DashTermTip glossaryKey="sof_marja" /></div>
                  <div className="um-value">{margin}%</div>
                  <div className="um-sub">{industryData.label} o'rtachasi</div>
                </div>
              </div>
            </div>
          </div>

          {/* PENALTIES */}
          {penalties.length > 0 && (
            <div className="dash-card animate-fadeInUp animate-delay-3">
              <div className="card-header">
                <div className="card-title">⚠️ Samaradorlik Yo'qotishlari</div>
                <div className="badge badge-danger">-{totalPenaltyPercent}%</div>
              </div>
              <div className="penalties-list">
                {penalties.map((p, i) => (
                  <div key={i} className={`penalty-item ${p.type}`}>
                    <div className="penalty-header">
                      <span className="penalty-icon">{p.icon}</span>
                      <div className="penalty-info">
                        <div className="penalty-title">{p.title}</div>
                        <div className="penalty-desc">{p.description}</div>
                      </div>
                      <div className="penalty-badge">-{p.penalty}%</div>
                    </div>
                    <div className="penalty-fix">
                      <span className="pf-label">✅ Yechim:</span> {p.fix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PLATFORM INFO */}
          <div className="dash-card animate-fadeInUp animate-delay-3">
            <div className="card-header">
              <div className="card-title dash-platform-title">
                <div className="dash-platform-icon">{getSocialIcon(platformData.id, 22)}</div>
                {platformData.label} Tahlili
              </div>
            </div>
            <div className="platform-stats">
              <div className="ps-row">
                <span className="ps-label">Lid narxi (CPL)</span>
                <span className="ps-value">${platformData.cpl_min} — ${platformData.cpl_max}</span>
              </div>
              <div className="ps-row">
                <span className="ps-label">Kerakli lidlar</span>
                <span className="ps-value">{requiredLeads.toLocaleString()} ta/oy</span>
              </div>
              <div className="ps-row">
                <span className="ps-label">Minimal byudjet</span>
                <span className="ps-value" style={{ color: '#6C63FF' }}>${minBudget.toLocaleString()}</span>
              </div>
              <div className="ps-row">
                <span className="ps-label">Optimal byudjet</span>
                <span className="ps-value" style={{ color: '#6BCB77' }}>${optimalBudget.toLocaleString()}</span>
              </div>
              {totalPenaltyPercent > 0 && (
                <>
                  <div className="ps-divider" />
                  <div className="ps-row">
                    <span className="ps-label" style={{ color: '#FF6B6B' }}>Real minimal byudjet</span>
                    <span className="ps-value" style={{ color: '#FF6B6B' }}>${realMinBudget.toLocaleString()}</span>
                  </div>
                  <div className="ps-row">
                    <span className="ps-label" style={{ color: '#FF6B6B' }}>Real optimal byudjet</span>
                    <span className="ps-value" style={{ color: '#FF6B6B' }}>${realOptimalBudget.toLocaleString()}</span>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ROADMAP - FULL WIDTH */}
      <div className="dash-card roadmap-card animate-fadeInUp">
        <div className="card-header">
          <div className="card-title">🗺️ Harakat Rejasi (Roadmap)</div>
          <div className="badge badge-primary">{roadmap.length} ta qadam</div>
        </div>
        <div className="roadmap-grid">
          {roadmap.map((item, i) => {
            const pColor = PRIORITY_COLORS[item.priority];
            return (
              <div
                key={i}
                className="roadmap-item"
                style={{
                  background: pColor.bg,
                  borderColor: pColor.border,
                }}
              >
                <div className="rm-week">{item.week}</div>
                <div className="rm-title">{item.title}</div>
                <div className="rm-desc">{item.desc}</div>
                <div className="rm-footer">
                  <div className="rm-impact">📈 {item.impact}</div>
                  <div className="rm-cost">💰 {item.cost}</div>
                </div>
                <div
                  className="rm-priority-badge"
                  style={{ color: pColor.text, borderColor: pColor.border }}
                >
                  {item.priority === 'high' ? '🔴' : item.priority === 'medium' ? '🟡' : '🟢'} {pColor.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="dash-footer animate-fadeInUp">
        <div className="footer-text">
          <div className="footer-title">Bu audit natijalarini saqlang!</div>
          <div className="footer-sub">Natijalarni skrinshotga olib, har oyda qaytadan tekshiring.</div>
        </div>
        <button className="btn-primary" onClick={onReset} id="new-audit-btn">
          + Yangi Audit
        </button>
      </div>
    </div>
  );
}
