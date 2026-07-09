// ===== AUDIT CALCULATION ENGINE =====

export const PLATFORMS = [
  { id: 'instagram', label: 'Instagram', desc: 'Rasmlar va reels orqali eng ko\'p ishlatiladigan platforma', cpl_min: 0.8, cpl_max: 1.5 },
  { id: 'facebook', label: 'Facebook', desc: 'Keng auditoriya, turli yosh guruhlari', cpl_min: 0.5, cpl_max: 1.2 },
  { id: 'telegram', label: 'Telegram Ads', desc: 'Kanallar orqali maqsadli reklama', cpl_min: 0.3, cpl_max: 0.9 },
  { id: 'google', label: 'Google Ads', desc: 'Qidiruv so\'zlari orqali aktiv xaridorlar', cpl_min: 1.5, cpl_max: 4.0 },
  { id: 'tiktok', label: 'TikTok Ads', desc: 'Yosh auditoriya, video kontenti', cpl_min: 0.4, cpl_max: 1.0 },
  { id: 'youtube', label: 'YouTube Ads', desc: 'Video reklama, uzoq muddatli ta\'sir', cpl_min: 0.6, cpl_max: 2.0 },
  { id: 'linkedin', label: 'LinkedIn Ads', desc: 'B2B, korporativ va professional auditoriya', cpl_min: 5.0, cpl_max: 15.0 },
  { id: 'organic', label: 'Organik (SMM)', desc: 'Pulsiz kontent orqali o\'sish', cpl_min: 0.1, cpl_max: 0.5 },
];

// ===== GLOSSARY: Texnik atamalar izohi =====
export const GLOSSARY = {
  crm: {
    term: 'CRM',
    full: 'Customer Relationship Management',
    uz: 'Mijozlarni boshqarish tizimi',
    desc: 'Har bir xaridor va qiziquvchi haqida ma\'lumot saqlovchi dastur. Kim qachon qo\'ng\'iroq qildi, nima so\'radi, xarid qildimi — hammasi bitta joyda.',
    example: 'AmoCRM, Bitrix24, Kommo'
  },
  lid: {
    term: 'Lid (Lead)',
    full: 'Lead',
    uz: 'Qiziquvchi mijoz',
    desc: 'Reklamangizni ko\'rib, telefon qilgan yoki xabar yozgan odam. U hali xarid qilmagan, lekin qiziqish bildirgan.',
    example: 'Instagramdan "narx qancha?" deb yozgan odam — bu lid'
  },
  konversiya: {
    term: 'Konversiya',
    full: 'Conversion Rate',
    uz: 'Qiziquvchidan xaridorga aylanish foizi',
    desc: '100 ta lid kelsa, shulardan nechta xarid qiladi? Masalan 20 ta xarid qilsa — konversiya 20% bo\'ladi.',
    example: '100 lid → 20 sotuv = 20% konversiya'
  },
  cpl: {
    term: 'CPL',
    full: 'Cost Per Lead',
    uz: 'Bir lidning narxi',
    desc: 'Bitta qiziquvchi jalb qilish uchun qancha pul sarflaysiz. Reklama xarajati ÷ Lidlar soni.',
    example: '$100 xarajat, 50 lid = $2 CPL'
  },
  cac: {
    term: 'CAC',
    full: 'Customer Acquisition Cost',
    uz: 'Bir xaridorni jalb qilish narxi',
    desc: 'Bitta to\'liq xaridorga erishish uchun umumiy xarajat. Bu CRM, menejer, reklama xarajatlarini o\'z ichiga oladi.',
    example: '$500 xarajat → 10 xaridor = $50 CAC'
  },
  ltv: {
    term: 'LTV',
    full: 'Lifetime Value',
    uz: 'Mijozning umrbod qiymati',
    desc: 'Bir xaridor umri davomida sizga qancha pul olib keladi? Bir marta xarid qilmasa ham, keyinchalik qaytib kelsa — bu LTV.',
    example: 'Mijoz 3 marta xarid qilsa: $60 × 3 = $180 LTV'
  },
  sof_marja: {
    term: 'Sof marja',
    full: 'Net Profit Margin',
    uz: 'Foyda foizi',
    desc: 'Sotuvdan tushgan pulning qanchasi sof foyda? Xarajatlarni (tovar narxi, ish haqi, reklama) chiqargandan so\'ng qolgan qism.',
    example: '$100 sotuvdan $35 foyda = 35% marja'
  },
  funnel: {
    term: 'Sotuv voronkasi (Funnel)',
    full: 'Sales Funnel',
    uz: 'Sotuv qadamlari',
    desc: 'Xaridor qanday yo\'l bilan reklamadan xaridgacha boradi. Ko\'p odam ko\'radi → Oz qismi qiziqadi → Yana ozrog\'i xarid qiladi.',
    example: '1000 ko\'rish → 50 lid → 10 sotuv'
  },
  ltv_cac: {
    term: 'LTV:CAC nisbati',
    full: 'LTV to CAC Ratio',
    uz: 'Foyda va xarajat nisbati',
    desc: 'Har bir jalb qilgan xaridor qancha foyda olib kelishi. 3:1 dan yuqori bo\'lsa — biznes sog\'lom. 1:1 dan past — zarar ko\'ryapsiz.',
    example: 'LTV $180, CAC $50 = 3.6x nisbat (Zo\'r!)'
  },
  byudjet: {
    term: 'Reklama byudjeti',
    full: 'Advertising Budget',
    uz: 'Reklamaga ajratiladigan pul',
    desc: 'Maqsadingizga erishish uchun reklama platformasiga (Instagram, Google va h.k.) to\'laydigan oylik pul miqdori.',
    example: 'Oyiga $500 Instagram reklamasiga'
  },
};

export const INDUSTRIES = [
  { id: 'ecommerce', label: "E-commerce / Do'kon", icon: '🛒', avg_margin: 30 },
  { id: 'beauty', label: "Go'zallik / Beauty", icon: '💄', avg_margin: 55 },
  { id: 'education', label: "Ta'lim / Kurslar", icon: '📚', avg_margin: 70 },
  { id: 'food', label: "Oziq-ovqat / Restoran", icon: '🍽️', avg_margin: 25 },
  { id: 'real_estate', label: "Ko'chmas mulk", icon: '🏠', avg_margin: 15 },
  { id: 'services', label: "Xizmatlar (B2C)", icon: '🛠️', avg_margin: 60 },
  { id: 'b2b', label: "B2B xizmatlar", icon: '🤝', avg_margin: 40 },
  { id: 'fitness', label: "Fitness / Sport", icon: '💪', avg_margin: 65 },
  { id: 'tech', label: "IT / Texnologiya", icon: '💻', avg_margin: 75 },
  { id: 'medical', label: "Tibbiyot / Sog'liqni saqlash", icon: '🏥', avg_margin: 45 },
  { id: 'other', label: "Boshqa soha", icon: '🏢', avg_margin: 40 },
];

export const SOCIAL_CONDITIONS = [
  { id: 'excellent', label: "A'lo darajada (10K+ followers, Faol)", icon: '🌟', penalty: 0 },
  { id: 'good', label: "Yaxshi (1K-10K followers, Muntazam)", icon: '✅', penalty: 0 },
  { id: 'average', label: "O'rtacha (Mavjud, lekin faol emas)", icon: '⚠️', penalty: 10 },
  { id: 'poor', label: "Zaif (Kam post, kam followers)", icon: '❌', penalty: 20 },
  { id: 'none', label: "Umuman yo'q", icon: '🚫', penalty: 30 },
];

// ===== AUDIT CALCULATION FUNCTION =====
export function calculateAudit(data) {
  const {
    hasCrm,
    hasSalesTeam,
    socialCondition,
    industry,
    platforms,
    monthlyRevenueGoal,
    averageCheck,
    conversionRate,
    currentRevenue,
    currentBudget,
    leadsPerMonth,
    responseTimeHours,
  } = data;

  const platform = PLATFORMS.find(p => p.id === platforms) || PLATFORMS[0];
  const industryData = INDUSTRIES.find(i => i.id === industry) || INDUSTRIES[INDUSTRIES.length - 1];
  const socialData = SOCIAL_CONDITIONS.find(s => s.id === socialCondition) || SOCIAL_CONDITIONS[2];

  const revenueGoal = parseFloat(monthlyRevenueGoal) || 0;
  const avgCheck = parseFloat(averageCheck) || 0;
  const convRate = parseFloat(conversionRate) || 0;
  const currRevenue = parseFloat(currentRevenue) || 0;
  const currBudget = parseFloat(currentBudget) || 0;
  const responseHours = parseFloat(responseTimeHours) || 24;

  // ===== CORE FUNNEL CALCULATIONS =====
  const requiredCustomers = avgCheck > 0 ? Math.ceil(revenueGoal / avgCheck) : 0;
  const requiredLeads = convRate > 0 ? Math.ceil(requiredCustomers / (convRate / 100)) : 0;

  // ===== BUDGET CALCULATIONS =====
  const minBudget = Math.ceil(requiredLeads * platform.cpl_min);
  const optimalBudget = Math.ceil(requiredLeads * platform.cpl_max);
  const cplMin = platform.cpl_min;
  const cplMax = platform.cpl_max;

  // ===== PENALTIES CALCULATION =====
  let penalties = [];
  let totalPenaltyPercent = 0;

  if (!hasCrm) {
    const penalty = 20;
    totalPenaltyPercent += penalty;
    penalties.push({
      title: "CRM tizimi yo'q",
      description: "Lidlar kuzatilmaydi, 30-40% yo'qoladi",
      penalty,
      icon: '📁',
      type: 'danger',
      fix: "AmoCRM yoki Bitrix24 o'rnating (oyiga $15-50)"
    });
  }

  if (!hasSalesTeam) {
    const penalty = 20;
    totalPenaltyPercent += penalty;
    penalties.push({
      title: "Sotuv bo'limi yo'q",
      description: "Konversiya pasayadi, o'z-o'zidan sotuv samarasiz",
      penalty,
      icon: '👥',
      type: 'danger',
      fix: "Kamida 1 ta sotuv menejeri yollang"
    });
  }

  if (socialData.penalty > 0) {
    totalPenaltyPercent += socialData.penalty;
    penalties.push({
      title: "Ijtimoiy tarmoq holati zaif",
      description: "Reklama samaradorligi pasayadi, ishonchsizlik",
      penalty: socialData.penalty,
      icon: '📱',
      type: socialData.penalty > 15 ? 'danger' : 'warning',
      fix: "SMM mutaxassisi yoki kunlik 1-2 post strategiyasi"
    });
  }

  if (responseHours > 2) {
    const penalty = responseHours > 24 ? 25 : responseHours > 8 ? 15 : 10;
    totalPenaltyPercent += penalty;
    penalties.push({
      title: `Lid javob vaqti: ${responseHours} soat`,
      description: "5 daqiqada javob bermasangiz, konversiya 80% pasayadi",
      penalty,
      icon: '⏱️',
      type: 'danger',
      fix: "Lidlarga 15 daqiqa ichida aloqaga chiqish qoidasini kiriting"
    });
  }

  // ===== REAL BUDGET WITH PENALTIES =====
  const penaltyMultiplier = 1 + (totalPenaltyPercent / 100);
  const realMinBudget = Math.ceil(minBudget * penaltyMultiplier);
  const realOptimalBudget = Math.ceil(optimalBudget * penaltyMultiplier);
  const wastedBudget = currBudget > 0 ? Math.ceil(currBudget * (totalPenaltyPercent / 100)) : 0;

  // ===== RISK LEVEL =====
  let riskLevel = 'low';
  let riskScore = 0;
  if (!hasCrm) riskScore += 30;
  if (!hasSalesTeam) riskScore += 25;
  if (socialData.penalty >= 20) riskScore += 20;
  if (responseHours > 8) riskScore += 15;
  if (convRate < 10) riskScore += 10;

  if (riskScore >= 60) riskLevel = 'high';
  else if (riskScore >= 30) riskLevel = 'medium';

  // ===== UNIT ECONOMICS =====
  const margin = industryData.avg_margin / 100;
  const revenuePerCustomer = avgCheck * margin;
  const cac = avgCheck > 0 ? ((minBudget + optimalBudget) / 2 / requiredCustomers) : 0;
  const ltv = revenuePerCustomer * 3; // estimated 3 purchase cycles
  const ltvCacRatio = cac > 0 ? (ltv / cac) : 0;

  // ===== FUNNEL STAGES =====
  const funnelStages = [
    { name: 'Qamrov (Reach)', value: requiredLeads * 8, color: '#6C63FF', percent: 100 },
    { name: 'Kliklar (Clicks)', value: requiredLeads * 3, color: '#8B85FF', percent: 37 },
    { name: 'Lidlar', value: requiredLeads, color: '#FFD93D', percent: 12 },
    { name: 'Suhbat', value: Math.ceil(requiredLeads * (convRate / 100) * 2), color: '#FF9F43', percent: 8 },
    { name: 'Sotuvlar', value: requiredCustomers, color: '#6BCB77', percent: 5 },
  ];

  // ===== GROWTH GAP =====
  const revenueGap = revenueGoal - currRevenue;
  const gapPercent = currRevenue > 0 ? Math.round((revenueGap / currRevenue) * 100) : 100;

  // ===== ROADMAP =====
  const roadmap = [];

  if (!hasCrm) {
    roadmap.push({
      week: '1-2 hafta',
      title: "CRM tizimini o'rnating",
      desc: "AmoCRM yoki Bitrix24 bilan lidlarni avtomatik kuzating",
      priority: 'high',
      impact: '+20% konversiya',
      cost: '$15-50/oy'
    });
  }

  if (responseHours > 2) {
    roadmap.push({
      week: 'Darhol',
      title: "Tezkor javob tizimi yarating",
      desc: "Telegram bot yoki chatbot orqali 5 daqiqada avtomatik javob",
      priority: 'high',
      impact: '+40% konversiya',
      cost: 'Bepul - $30'
    });
  }

  if (!hasSalesTeam) {
    roadmap.push({
      week: '2-4 hafta',
      title: "Sotuv menejeri yollang",
      desc: "To'g'ri savollar berish va yopish texnikasini biladigan menejer",
      priority: 'high',
      impact: '+30% sotuv',
      cost: "O'rtacha ish haqi + Foiz"
    });
  }

  roadmap.push({
    week: '3-6 hafta',
    title: `${platform.label} da Test reklama`,
    desc: `$${Math.ceil(optimalBudget * 0.3)} test byudjeti bilan CPL ni aniqlang, keyin kengaytiring`,
    priority: 'medium',
    impact: 'CPL optimizatsiyasi',
    cost: `$${Math.ceil(optimalBudget * 0.3)}`
  });

  if (socialData.penalty > 0) {
    roadmap.push({
      week: '1-oy davomida',
      title: "Ijtimoiy tarmoqlarni jonlantiring",
      desc: "Kunlik kontent, Reels/Stories strategiyasi, organik o'sish",
      priority: 'medium',
      impact: 'Ishonch + organik lid',
      cost: '$0 - $200/oy'
    });
  }

  roadmap.push({
    week: '2-oy',
    title: "A/B testlar va optimizatsiya",
    desc: "Eng yaxshi ishlayotgan reklama kreativlarini kengaytiring",
    priority: 'low',
    impact: 'CPL -30%',
    cost: 'Vaqt sarfi'
  });

  return {
    // Inputs
    platformData: platform,
    industryData,
    socialData,

    // Funnel
    requiredCustomers,
    requiredLeads,
    funnelStages,

    // Budget
    minBudget,
    optimalBudget,
    realMinBudget,
    realOptimalBudget,
    cplMin,
    cplMax,
    wastedBudget,
    currBudget,

    // Penalties
    penalties,
    totalPenaltyPercent,
    penaltyMultiplier,

    // Risk
    riskLevel,
    riskScore,

    // Unit Economics
    margin: industryData.avg_margin,
    revenuePerCustomer,
    cac: Math.ceil(cac),
    ltv: Math.ceil(ltv),
    ltvCacRatio: ltvCacRatio.toFixed(1),

    // Gap
    revenueGoal,
    currRevenue,
    revenueGap,
    gapPercent,

    // Roadmap
    roadmap,

    // Raw
    avgCheck,
    convRate,
    responseHours,
    hasCrm,
    hasSalesTeam,
  };
}
