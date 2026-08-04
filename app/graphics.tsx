/* Decorative chart motifs for the project cards. Single accent hue with
   opacity tints; identity is never carried by color alone (shape/position/labels). */

const MONO = "var(--font-geist-mono), monospace";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 128"
      role="img"
      aria-hidden="true"
      className="h-32 w-full"
    >
      {children}
    </svg>
  );
}

export function CannibalizationChart() {
  // Stacked product mix before/after a launch; the new product (solid) absorbs
  // share from the base product (bottom segment shrinks).
  return (
    <Frame>
      {/* before */}
      <rect x="90" y="68" width="44" height="40" rx="2" fill="var(--accent)" opacity="0.9" />
      <rect x="90" y="38" width="44" height="28" rx="2" fill="var(--accent)" opacity="0.5" />
      <rect x="90" y="16" width="44" height="20" rx="2" fill="var(--accent)" opacity="0.25" />
      {/* after */}
      <rect x="190" y="82" width="44" height="26" rx="2" fill="var(--accent)" opacity="0.9" />
      <rect x="190" y="52" width="44" height="28" rx="2" fill="var(--accent)" opacity="0.5" />
      <rect x="190" y="30" width="44" height="20" rx="2" fill="var(--accent)" opacity="0.25" />
      <rect x="190" y="12" width="44" height="16" rx="2" fill="var(--accent)" />
      <text x="112" y="123" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="var(--muted)">
        before
      </text>
      <text x="212" y="123" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="var(--muted)">
        after
      </text>
    </Frame>
  );
}

export function RocCurveChart() {
  return (
    <Frame>
      <line x1="30" y1="108" x2="300" y2="108" stroke="var(--line)" strokeWidth="1" />
      <line x1="30" y1="108" x2="30" y2="14" stroke="var(--line)" strokeWidth="1" />
      {/* chance diagonal */}
      <line x1="30" y1="108" x2="300" y2="14" stroke="var(--muted)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
      {/* area between curve and diagonal */}
      <path d="M30,108 C 80,42 140,24 300,14 L 30,108 Z" fill="var(--accent)" opacity="0.08" />
      {/* ROC curve */}
      <path d="M30,108 C 80,42 140,24 300,14" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="96" cy="46" r="4" fill="var(--accent)" stroke="var(--background)" strokeWidth="2" />
      <text x="200" y="70" fontFamily={MONO} fontSize="10" fill="var(--muted)">
        AUC 0.761
      </text>
    </Frame>
  );
}

export function AbTestChart() {
  // Two nearly-coincident distributions: the honest picture of a null result.
  return (
    <Frame>
      <line x1="20" y1="108" x2="300" y2="108" stroke="var(--line)" strokeWidth="1" />
      {/* control (dashed, muted) */}
      <path
        d="M28,108 C 88,108 96,26 150,26 C 204,26 212,108 272,108"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="2"
        strokeDasharray="5 4"
        opacity="0.7"
      />
      {/* variant (solid, accent) */}
      <path
        d="M40,108 C 100,108 108,30 162,30 C 216,30 224,108 284,108"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <text x="220" y="24" fontFamily={MONO} fontSize="10" fill="var(--muted)">
        p = n.s.
      </text>
    </Frame>
  );
}

const PIXELS = [
  [0.06, 0.06, 0.1, 0.15, 0.15, 0.1, 0.06, 0.06],
  [0.06, 0.1, 0.3, 0.55, 0.5, 0.25, 0.1, 0.06],
  [0.1, 0.3, 0.7, 0.95, 0.9, 0.6, 0.25, 0.1],
  [0.15, 0.5, 0.95, 0.4, 0.35, 0.9, 0.5, 0.15],
  [0.15, 0.55, 0.9, 0.35, 0.3, 0.95, 0.55, 0.15],
  [0.1, 0.3, 0.65, 0.9, 0.95, 0.7, 0.3, 0.1],
  [0.06, 0.1, 0.25, 0.5, 0.55, 0.3, 0.1, 0.06],
  [0.06, 0.06, 0.1, 0.15, 0.15, 0.1, 0.06, 0.06],
];

export function CnnChart() {
  const cell = 13;
  const gap = 2;
  const x0 = 100;
  const y0 = 5;
  return (
    <Frame>
      {PIXELS.map((row, r) =>
        row.map((o, c) => (
          <rect
            key={`${r}-${c}`}
            x={x0 + c * (cell + gap)}
            y={y0 + r * (cell + gap)}
            width={cell}
            height={cell}
            rx="2"
            fill="var(--accent)"
            opacity={o}
          />
        ))
      )}
      {/* convolution kernel outline */}
      <rect
        x={x0 + 1 * (cell + gap) - 2}
        y={y0 + 1 * (cell + gap) - 2}
        width={cell * 3 + gap * 2 + 4}
        height={cell * 3 + gap * 2 + 4}
        rx="3"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="2"
      />
    </Frame>
  );
}

const NORMAL_POINTS: Array<[number, number]> = [
  [60, 88], [76, 74], [88, 92], [98, 66], [110, 80], [120, 96], [128, 60],
  [140, 74], [150, 88], [158, 52], [170, 66], [180, 84], [190, 58], [200, 74],
  [212, 92], [220, 64], [232, 78], [244, 56], [252, 88], [264, 70], [274, 84],
  [96, 100], [166, 98], [236, 100], [70, 58], [204, 48],
];

const FRAUD_POINTS: Array<[number, number]> = [
  [246, 24], [270, 34], [258, 16],
];

export function FraudChart() {
  return (
    <Frame>
      <line x1="30" y1="112" x2="300" y2="112" stroke="var(--line)" strokeWidth="1" />
      {/* decision boundary */}
      <path
        d="M200,6 C 216,40 220,60 296,74"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        opacity="0.7"
      />
      {NORMAL_POINTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="var(--accent)" opacity="0.35" />
      ))}
      {FRAUD_POINTS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4.5"
          fill="var(--foreground)"
          stroke="var(--background)"
          strokeWidth="2"
        />
      ))}
      <text x="196" y="16" textAnchor="end" fontFamily={MONO} fontSize="10" fill="var(--muted)">
        flagged →
      </text>
    </Frame>
  );
}
