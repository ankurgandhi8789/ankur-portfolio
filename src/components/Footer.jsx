const socials = [
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385..." />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569..." />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:ankur@gandhi.dev",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const navLinks = ["About", "Projects", "Skills", "Contact"];

const Footer = () => (
  <footer style={{ marginTop: 80, fontFamily: "var(--font)" }}>

    {/* top border */}
    <div style={{
      height: 1,
      background: "linear-gradient(90deg, transparent, #D4A017, transparent)",
      opacity: 0.4
    }} />

    <div style={{
      padding: "50px 24px 30px",
      background: "#0F0F0F"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* GRID */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          marginBottom: 40
        }}>

          {/* BRAND */}
          <div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#E5E5E5",
              marginBottom: 10
            }}>
              Ankur <span style={{ color: "#D4A017" }}>Gandhi</span>
            </h3>

            <p style={{
              color: "#9CA3AF",
              fontSize: 13,
              lineHeight: 1.7,
              maxWidth: 220
            }}>
              Building clean and scalable web applications with modern technologies.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#9CA3AF",
              marginBottom: 14
            }}>
              Navigation
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  style={{
                    color: "#E5E5E5",
                    fontSize: 13,
                    textDecoration: "none",
                    opacity: 0.7,
                    transition: "0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = 1;
                    e.target.style.color = "#D4A017";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = 0.7;
                    e.target.style.color = "#E5E5E5";
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#9CA3AF",
              marginBottom: 14
            }}>
              Contact
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ fontSize: 13, color: "#E5E5E5" }}>ankur@gandhi.dev</p>
              <p style={{ fontSize: 13, color: "#9CA3AF" }}>India</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16
        }}>
          <p style={{ fontSize: 12, color: "#9CA3AF" }}>
            © {new Date().getFullYear()} Ankur Gandhi
          </p>

          {/* SOCIALS */}
          <div style={{ display: "flex", gap: 10 }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#9CA3AF",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#D4A017";
                  e.currentTarget.style.color = "#D4A017";
                  e.currentTarget.style.background = "rgba(212,160,23,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "#9CA3AF";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 640px) {
        .footer-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </footer>
);

export default Footer;









// const socials = [
//   {
//     name: "GitHub",
//     href: "#",
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
//       </svg>
//     ),
//   },
//   {
//     name: "LinkedIn",
//     href: "#",
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Twitter",
//     href: "#",
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Email",
//     href: "mailto:ankur@gandhi.dev",
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//       </svg>
//     ),
//   },
// ];

// const navLinks = ["About", "Projects", "Skills", "Contact"];

// const Footer = () => (
//   <footer style={{ position: "relative", zIndex: 1, fontFamily: "var(--font)", marginTop: 40 }}>

//     {/* Gradient top border */}
//     <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #a78bfa, #60a5fa, transparent)" }} />

//     <div style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)", padding: "56px 24px 32px" }}>
//       <div style={{ maxWidth: 1100, margin: "0 auto" }}>

//         {/* Top row */}
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginBottom: 48, flexWrap: "wrap" }} className="footer-grid">

//           {/* Brand */}
//           <div>
//             <p style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, fontFamily: "monospace" }}>
//               <span style={{ color: "#60a5fa" }}>&lt;</span>
//               <span style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Ankur Gandhi </span>
//               <span style={{ color: "#a78bfa" }}>/&gt;</span>
//             </p>
//             <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, maxWidth: 220 }}>
//               Building clean, performant web experiences. Open to full-time & freelance opportunities.
//             </p>
//           </div>

//           {/* Nav */}
//           <div>
//             <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Navigation</p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//               {navLinks.map(l => (
//                 <a key={l} href={`#${l.toLowerCase()}`}
//                   style={{ color: "var(--muted)", fontSize: 14, textDecoration: "none", transition: "color 0.2s", width: "fit-content" }}
//                   onMouseEnter={e => e.target.style.color = "var(--purple)"}
//                   onMouseLeave={e => e.target.style.color = "var(--muted)"}>
//                   → {l}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact info */}
//           <div>
//             <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Get In Touch</p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//               {[
//                 { label: "ankur@gandhi.dev", href: "mailto:ankur@gandhi.dev" },
//                 { label: "linkedin.com/in/ankurgandhi", href: "#" },
//                 { label: "github.com/ankurgandhi", href: "#" },
//               ].map(item => (
//                 <a key={item.label} href={item.href}
//                   style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", transition: "color 0.2s", width: "fit-content" }}
//                   onMouseEnter={e => e.target.style.color = "var(--blue)"}
//                   onMouseLeave={e => e.target.style.color = "var(--muted)"}>
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{ height: 1, background: "var(--border)", marginBottom: 28 }} />

//         {/* Bottom row */}
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
//           <p style={{ color: "var(--muted)", fontSize: 12 }}>
//             © {new Date().getFullYear()} Ankur Gandhi. Built with <span style={{ color: "#a78bfa" }}>React</span> + <span style={{ color: "#60a5fa" }}>Vite</span>.
//           </p>

//           {/* Social icons */}
//           <div style={{ display: "flex", gap: 10 }}>
//             {socials.map(s => (
//               <a key={s.name} href={s.href} title={s.name} target="_blank" rel="noreferrer"
//                 style={{
//                   width: 38, height: 38, borderRadius: "50%",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                   background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)",
//                   color: "var(--muted)", textDecoration: "none", transition: "all 0.25s",
//                 }}
//                 onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.15)"; e.currentTarget.style.borderColor = "var(--purple)"; e.currentTarget.style.color = "var(--purple)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}>
//                 {s.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>

//     <style>{`
//       @media (max-width: 640px) {
//         .footer-grid { grid-template-columns: 1fr !important; }
//       }
//     `}</style>
//   </footer>
// );

// export default Footer;
