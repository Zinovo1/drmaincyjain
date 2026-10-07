const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
};

export const NavkarLotusLogo = ({ className = "" }) => (
  <svg className={className} {...iconProps}>
    <path
      d="M24 6c-1.5 4.5-5 7.5-5 12a5 5 0 0 0 10 0c0-4.5-3.5-7.5-5-12z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M14 20c2 3 5 5 10 5s8-2 10-5M10 24c3 4 8 6 14 6s11-2 14-6M38 24c-3 4-8 6-14 6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="24" cy="17" r="2.2" fill="currentColor" />
  </svg>
);

export const GynecologyIcon = ({ className = "" }) => (
  <svg className={className} {...iconProps}>
    <path
      d="M24 8v32M24 8c-4 0-7 3-7 7 0 3 2 5.5 4.5 6.5M24 8c4 0 7 3 7 7 0 3-2 5.5-4.5 6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <ellipse cx="17" cy="18" rx="4" ry="5" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="31" cy="18" rx="4" ry="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 34h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PregnancyCareIcon = ({ className = "" }) => (
  <svg className={className} {...iconProps}>
    <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M24 16v6M18 38c0-6 2.5-10 6-12 0 2 2 4 4 4s4-2 4-4c3.5 2 6 6 6 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M24 22c3 2 5 5 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const HormonalHealthIcon = ({ className = "" }) => (
  <svg className={className} {...iconProps}>
    <path
      d="M24 10c-1 3-3.5 5-3.5 8a3.5 3.5 0 0 0 7 0c0-3-2.5-5-3.5-8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M16 24c2 2.5 5 4 8 4s6-1.5 8-4M12 28c3 3.5 7 5.5 12 5.5s9-2 12-5.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="24" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

export const PreventiveCareIcon = ({ className = "" }) => (
  <svg className={className} {...iconProps}>
    <path
      d="M24 8l12 4v10c0 8-5 14-12 16-7-2-12-8-12-16V12l12-4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M24 18c-2 2.5-4 3.5-4 6a4 4 0 0 0 8 0c0-2.5-2-3.5-4-6z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const HERO_ICON_MAP = {
  gynecology: GynecologyIcon,
  pregnancy: PregnancyCareIcon,
  hormonal: HormonalHealthIcon,
  preventive: PreventiveCareIcon,
};

export const HeroServiceIcon = ({ id, className }) => {
  const Icon = HERO_ICON_MAP[id];
  return Icon ? <Icon className={className} /> : null;
};
