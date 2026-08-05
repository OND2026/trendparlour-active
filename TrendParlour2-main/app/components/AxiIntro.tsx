import React from 'react';

export interface AxiIntroProps {
  heading?: string;
  lines?: string[];
}

const openingPrompts = [
  'I found six weird things today.',
  'I already clicked the strange links.',
  'I collect internet curiosities.',
  "Today's discoveries are unusually good.",
  "Ready for today's rabbit hole?",
  'Careful. Curiosity spreads.',
  'I keep the best links for later.',
  'Some doors lead to wonderful nonsense.',
  'I came prepared to be delighted.',
  'This place is very good at surprises.',
];

export default function AxiIntro({
  heading = openingPrompts[0],
  lines = ['I collect internet curiosities.', 'Pick a door and let\'s explore.'],
}: AxiIntroProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: '1.4rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '0.8rem',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            animation: 'axi-float 3.4s ease-in-out infinite',
            flexShrink: 0,
            width: 'clamp(140px, 24vw, 190px)',
            maxWidth: '190px',
            transformOrigin: 'center bottom',
          }}
        >
          <svg viewBox="0 0 260 220" role="img" aria-label="Axi the axolotl mascot">
            <ellipse cx="128" cy="182" rx="54" ry="18" fill="#EFE0CC" opacity="0.8" />

            <g transform="translate(10 8)">
              <path d="M92 112c-14 0-25 10-25 24 0 11 7 20 16 24 10-13 20-20 33-25-8-9-14-15-24-23z" fill="#E89A8A" />
              <path d="M162 112c15 0 27 10 27 24 0 11-8 20-18 24-9-13-19-20-32-25 8-9 13-15 23-23z" fill="#E89A8A" />

              <path d="M98 97c-28 0-49 19-49 46 0 16 9 30 20 38 4-15 13-27 26-34 5-2 10-4 14-6-4-13-8-24-11-44z" fill="#D9B7D9" />
              <path d="M160 97c28 0 49 19 49 46 0 16-9 30-20 38-4-15-13-27-26-34-5-2-10-4-14-6 4-13 8-24 11-44z" fill="#D9B7D9" />

              <path d="M107 78c-18 5-31 18-36 36 10-4 20-5 31-2 8 2 16 7 22 14 4-14 5-29 2-43-6-2-12-4-19-5z" fill="#CBA7D3" />
              <path d="M147 78c18 5 31 18 36 36-10-4-20-5-31-2-8 2-16 7-22 14-4-14-5-29-2-43 6-2 12-4 19-5z" fill="#CBA7D3" />

              <path d="M94 113c18-14 44-16 61-3 8 6 12 16 13 27-20 4-42 5-63 0 1-7 2-14 7-24-6-1-10-1-18 0z" fill="#F8ECDD" />
              <path d="M114 136c7 3 15 4 23 4 12 0 24-3 33-8-10 16-23 25-34 30-12-7-17-23-22-26z" fill="#F3C9B7" />
              <path d="M119 102c10-12 24-17 39-16-8 14-18 22-31 26-10 3-17 0-24-7 8-2 11-1 16-3z" fill="#F8ECDD" />

              <path d="M97 146c-10 7-16 17-18 30" stroke="#B98AB8" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M159 146c10 7 16 17 18 30" stroke="#B98AB8" strokeWidth="7" strokeLinecap="round" fill="none" />

              <circle cx="128" cy="113" r="9" fill="#2B3A4A" />
              <circle cx="154" cy="113" r="9" fill="#2B3A4A" />
              <circle cx="125" cy="110" r="3.5" fill="#FFF" />
              <circle cx="151" cy="110" r="3.5" fill="#FFF" />

              <path d="M128 133c8 5 18 5 26 0" stroke="#C67A72" strokeWidth="3.6" strokeLinecap="round" fill="none" />
              <path d="M123 123c5 3 10 4 16 4" stroke="#2B3A4A" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M150 123c-4 3-8 4-13 4" stroke="#2B3A4A" strokeWidth="2" strokeLinecap="round" fill="none" />

              <path d="M112 153c9 7 16 10 25 10" stroke="#8D6A5D" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M139 153c-8 7-15 10-24 10" stroke="#8D6A5D" strokeWidth="4" strokeLinecap="round" fill="none" />

              <circle cx="102" cy="165" r="7" fill="#F8ECDD" />
              <circle cx="156" cy="165" r="7" fill="#F8ECDD" />
              <path d="M95 161c-6 8-9 15-9 24" stroke="#E89A8A" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M161 161c6 8 9 15 9 24" stroke="#E89A8A" strokeWidth="5" strokeLinecap="round" fill="none" />

              <path d="M120 178c8 8 17 11 26 8" stroke="#CBA7D3" strokeWidth="3.8" strokeLinecap="round" fill="none" />
              <path d="M113 170c11 5 23 8 36 4" stroke="#D9B7D9" strokeWidth="4" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        </div>

        <div
          style={{
            position: 'relative',
            maxWidth: '320px',
            background: '#FFFDF8',
            border: '1px solid #EDE2D3',
            borderRadius: '18px',
            padding: '0.85rem 0.95rem 0.9rem',
            boxShadow: '0 10px 24px rgba(31, 41, 55, 0.06)',
            color: '#4B5563',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '-10px',
              bottom: '18px',
              width: '16px',
              height: '16px',
              background: '#FFFDF8',
              borderLeft: '1px solid #EDE2D3',
              borderBottom: '1px solid #EDE2D3',
              transform: 'rotate(45deg)',
            }}
          />
          <p style={{ margin: '0 0 0.35rem', fontSize: '1rem', fontWeight: 700, color: '#1F2937', lineHeight: 1.35 }}>
            {heading}
          </p>
          {lines.map((line, index) => (
            <p
              key={`${line}-${index}`}
              style={{
                margin: index === lines.length - 1 ? '0' : '0 0 0.2rem',
                fontSize: '0.92rem',
                lineHeight: 1.5,
                color: '#6B7280',
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes axi-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }
      `}</style>
    </div>
  );
}
