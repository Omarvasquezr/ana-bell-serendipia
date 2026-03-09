/**
 * Botanical line-art decorative SVG elements.
 * Usage: <BotanicalDeco variant="branch-left" /> etc.
 */

interface Props {
  variant?: "branch-left" | "branch-right" | "leaf-divider" | "petal-corner";
  className?: string;
}

const BotanicalDeco = ({ variant = "branch-left", className = "" }: Props) => {
  const stroke = "hsl(var(--primary))";
  const strokeLight = "hsl(var(--accent))";

  if (variant === "branch-left") {
    return (
      <svg viewBox="0 0 200 300" fill="none" className={className} aria-hidden="true">
        <path
          d="M100 280 C100 200, 60 180, 30 140 C10 110, 20 70, 50 50 C70 35, 90 40, 100 60"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M100 220 C120 190, 150 180, 170 150"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        />
        <ellipse cx="50" cy="48" rx="18" ry="12" stroke={strokeLight} strokeWidth="0.8" opacity="0.25" transform="rotate(-30 50 48)" />
        <ellipse cx="170" cy="148" rx="14" ry="9" stroke={strokeLight} strokeWidth="0.8" opacity="0.2" transform="rotate(20 170 148)" />
        <circle cx="30" cy="138" r="3" stroke={strokeLight} strokeWidth="0.6" opacity="0.2" />
        <circle cx="100" cy="58" r="2.5" stroke={strokeLight} strokeWidth="0.6" opacity="0.25" />
      </svg>
    );
  }

  if (variant === "branch-right") {
    return (
      <svg viewBox="0 0 200 300" fill="none" className={className} aria-hidden="true">
        <path
          d="M100 280 C100 200, 140 180, 170 140 C190 110, 180 70, 150 50 C130 35, 110 40, 100 60"
          stroke={stroke}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M100 220 C80 190, 50 180, 30 150"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        />
        <ellipse cx="150" cy="48" rx="18" ry="12" stroke={strokeLight} strokeWidth="0.8" opacity="0.25" transform="rotate(30 150 48)" />
        <ellipse cx="30" cy="148" rx="14" ry="9" stroke={strokeLight} strokeWidth="0.8" opacity="0.2" transform="rotate(-20 30 148)" />
        <circle cx="170" cy="138" r="3" stroke={strokeLight} strokeWidth="0.6" opacity="0.2" />
      </svg>
    );
  }

  if (variant === "leaf-divider") {
    return (
      <svg viewBox="0 0 400 60" fill="none" className={className} aria-hidden="true">
        <path
          d="M0 30 Q50 10, 100 30 T200 30 T300 30 T400 30"
          stroke={stroke}
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.15"
        />
        <ellipse cx="100" cy="28" rx="12" ry="7" stroke={strokeLight} strokeWidth="0.7" opacity="0.2" transform="rotate(-15 100 28)" />
        <ellipse cx="200" cy="32" rx="10" ry="6" stroke={strokeLight} strokeWidth="0.7" opacity="0.18" transform="rotate(10 200 32)" />
        <ellipse cx="300" cy="28" rx="12" ry="7" stroke={strokeLight} strokeWidth="0.7" opacity="0.2" transform="rotate(-10 300 28)" />
      </svg>
    );
  }

  // petal-corner
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 110 C10 60, 30 30, 60 10"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.2"
      />
      <ellipse cx="58" cy="12" rx="14" ry="9" stroke={strokeLight} strokeWidth="0.8" opacity="0.2" transform="rotate(-40 58 12)" />
      <ellipse cx="12" cy="70" rx="10" ry="6" stroke={strokeLight} strokeWidth="0.7" opacity="0.15" transform="rotate(30 12 70)" />
      <circle cx="35" cy="40" r="2" stroke={strokeLight} strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};

export default BotanicalDeco;
