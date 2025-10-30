import React from 'react';

interface IconPlaceholderProps {
  name: string;
  size?: number;
  className?: string;
}

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({ 
  name, 
  size = 24, 
  className = "" 
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={['lucide', `lucide-${name?.toLowerCase()}`, className].filter(Boolean).join(' ')}
    aria-hidden="true"
  >
    {/* Menu */}
    {name === 'Menu' && (
      <>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </>
    )}
    {/* X */}
    {name === 'X' && (
      <>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </>
    )}
    {/* ChevronDown */}
    {name === 'ChevronDown' && <polyline points="6 9 12 15 18 9"></polyline>}
    {/* CheckCircle */}
    {name === 'CheckCircle' && (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </>
    )}
    {/* Shield */}
    {name === 'Shield' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>}
    {/* Users */}
    {name === 'Users' && (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </>
    )}
    {/* Zap */}
    {name === 'Zap' && <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>}
    {/* TrendingUp */}
    {name === 'TrendingUp' && (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </>
    )}
    {/* BarChart3 */}
    {name === 'BarChart3' && (
      <>
        <path d="M3 3v18h18"></path>
        <path d="M18 17V9"></path>
        <path d="M13 17V5"></path>
        <path d="M8 17v-3"></path>
      </>
    )}
    {/* ArrowRight */}
    {name === 'ArrowRight' && (
      <>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </>
    )}
    {/* Mail */}
    {name === 'Mail' && (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <polyline points="22,6 12,13 2,6"></polyline>
      </>
    )}
    {/* Phone */}
    {name === 'Phone' && (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    )}
    {/* MapPin */}
    {name === 'MapPin' && (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </>
    )}
    {/* Linkedin */}
    {name === 'Linkedin' && (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </>
    )}
    {/* Award */}
    {name === 'Award' && (
      <>
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </>
    )}
    {/* AlertCircle */}
    {name === 'AlertCircle' && (
      <>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </>
    )}
    {/* Home */}
    {name === 'Home' && (
      <>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </>
    )}
    {/* Spinner */}
    {name === 'Spinner' && <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>}
    {/* Default Rectangle Placeholder */}
    {!['Menu', 'X', 'ChevronDown', 'CheckCircle', 'Shield', 'Users', 'Zap', 'TrendingUp', 'BarChart3', 'ArrowRight', 'Mail', 'Phone', 'MapPin', 'Linkedin', 'Award', 'AlertCircle', 'Home', 'Spinner'].includes(name) && (
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    )}
  </svg>
);
