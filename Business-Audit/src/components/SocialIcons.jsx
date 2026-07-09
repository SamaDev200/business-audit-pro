// Social Media SVG Icons as React components
export const SocialIcons = {
  instagram: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad1" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#ffd600"/>
          <stop offset="50%" stopColor="#ff0100"/>
          <stop offset="100%" stopColor="#d800b9"/>
        </radialGradient>
        <radialGradient id="ig-grad2" cx="10%" cy="120%" r="150%">
          <stop offset="0%" stopColor="#ff6400"/>
          <stop offset="50%" stopColor="#ff0100"/>
          <stop offset="100%" stopColor="#fd00ff" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="ig-grad3" x1="20%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#7638fa" stopOpacity="0"/>
          <stop offset="100%" stopColor="#7638fa"/>
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad1)"/>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad2)"/>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad3)"/>
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
      <circle cx="17.2" cy="6.8" r="1.2" fill="white"/>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
    </svg>
  ),

  facebook: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#1877F2"/>
      <path d="M16.5 8H14.5C14 8 13.5 8.5 13.5 9V11H16.5L16 14H13.5V21H10.5V14H8.5V11H10.5V9C10.5 7 11.8 5.5 14 5.5H16.5V8Z" fill="white"/>
    </svg>
  ),

  telegram: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#229ED9"/>
      <path d="M18.9 5.5L16 19.5C15.8 20.2 15.3 20.4 14.7 20L10.7 17L8.8 18.8C8.6 19 8.3 19.1 8 19.1L8.3 15L15.7 8.3C16 8 15.7 7.9 15.3 8.2L6.2 13.9L2.3 12.7C1.5 12.5 1.5 11.9 2.5 11.5L17.8 5.2C18.5 4.9 19.1 5.3 18.9 5.5Z" fill="white"/>
    </svg>
  ),

  google: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="white"/>
      <path d="M12 5C9.18 5 6.76 6.58 5.5 8.9L8.1 11C8.74 9.2 10.24 7.9 12 7.9C13.2 7.9 14.3 8.34 15.14 9.08L17.28 6.94C15.9 5.74 14.04 5 12 5Z" fill="#EA4335"/>
      <path d="M5.5 8.9C4.56 10.52 4.56 13.48 5.5 15.1L8.1 13C7.62 11.72 7.62 12.28 8.1 11L5.5 8.9Z" fill="#FBBC05"/>
      <path d="M12 19C14.04 19 15.9 18.26 17.28 17.06L14.68 15C13.9 15.58 12.98 15.9 12 15.9C10.24 15.9 8.74 14.6 8.1 12.8L5.5 14.9C6.76 17.22 9.18 19 12 19Z" fill="#34A853"/>
      <path d="M19 12C19 11.42 18.94 10.86 18.82 10.32H12V13.68H15.98C15.78 14.7 15.2 15.56 14.36 16.14L16.96 18.14C18.3 16.88 19 14.62 19 12Z" fill="#4285F4"/>
    </svg>
  ),

  tiktok: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#010101"/>
      <path d="M9.5 15.5C9.5 17.16 10.84 18.5 12.5 18.5C14.16 18.5 15.5 17.16 15.5 15.5C15.5 13.84 14.16 12.5 12.5 12.5V10C15.54 10 18 12.46 18 15.5C18 18.54 15.54 21 12.5 21C9.46 21 7 18.54 7 15.5H9.5Z" fill="#FF0050"/>
      <path d="M15.5 15.5C15.5 13.84 14.16 12.5 12.5 12.5V10C15.54 10 18 12.46 18 15.5H15.5Z" fill="#00F2EA"/>
      <path d="M15 3H17.5C17.5 5.5 19.5 7 21 7V9.5C19.5 9.5 17.5 9 16 7.5V15.5C16 18.26 13.76 20.5 11 20.5C8.24 20.5 6 18.26 6 15.5C6 12.74 8.24 10.5 11 10.5V13C9.62 13 8.5 14.12 8.5 15.5C8.5 16.88 9.62 18 11 18C12.38 18 13.5 16.88 13.5 15.5V3H15Z" fill="white"/>
    </svg>
  ),

  youtube: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#FF0000"/>
      <path d="M20.5 7.5C20.5 7.5 20.3 6.3 19.7 5.7C19 5 18.2 5 17.8 4.9C15.8 4.8 12 4.8 12 4.8C12 4.8 8.2 4.8 6.2 5C5.8 5 5 5 4.3 5.7C3.7 6.3 3.5 7.5 3.5 7.5C3.5 7.5 3.3 8.9 3.3 10.3V11.7C3.3 13.1 3.5 14.5 3.5 14.5C3.5 14.5 3.7 15.7 4.3 16.3C5 17 6 16.9 6.4 17C7.8 17.1 12 17.2 12 17.2C12 17.2 15.8 17.2 17.8 17C18.2 17 19 16.9 19.7 16.3C20.3 15.7 20.5 14.5 20.5 14.5C20.5 14.5 20.7 13.1 20.7 11.7V10.3C20.7 8.9 20.5 7.5 20.5 7.5Z" fill="#FF0000"/>
      <polygon points="10,8.5 10,14.5 15.5,11.5" fill="white"/>
    </svg>
  ),

  linkedin: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#0A66C2"/>
      <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="white"/>
      <circle cx="6.25" cy="6.75" r="1.5" fill="white"/>
      <path d="M19 13.5C19 11.5 17.8 9.5 15.5 9.5C14.3 9.5 13.3 10.1 12.8 10.8V9.5H10.5V19H13V14C13 12.9 13.7 12 14.8 12C15.9 12 16.5 12.9 16.5 14V19H19V13.5Z" fill="white"/>
    </svg>
  ),

  organic: ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#22c55e"/>
      <text x="12" y="17" textAnchor="middle" fontSize="14">🌱</text>
    </svg>
  ),
};

// Icon getter helper
export const getSocialIcon = (id, size = 24) => {
  const Icon = SocialIcons[id] || SocialIcons['organic'];
  return <Icon size={size} />;
};
