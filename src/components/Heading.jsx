import { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

const Heading = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (!e.target.closest("nav")) setOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      fontFamily: "var(--font)", transition: "background 0.3s, border-color 0.3s",
      background: scrolled ? "rgba(10,10,20,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* Logo */}
        <span style={{ fontWeight: 700, fontSize: 18, fontFamily: "monospace" }}>
          <span style={{ color: "#60a5fa" }}>&lt;</span>
          <span style={{ background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Ankur Gandhi </span>
          <span style={{ color: "#a78bfa" }}>/&gt;</span>
        </span>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: "flex", gap: 36, listStyle: "none" }}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                style={{ color: "var(--muted)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "var(--text)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <a href="#contact" className="nav-desktop btn-primary" style={{ padding: "8px 20px", fontSize: 13 }}>
          Hire Me
        </a>

        {/* Hamburger — mobile only */}
        <button className="nav-mobile" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}>
          <span style={{ display: "block", width: 24, height: 2, background: open ? "var(--purple)" : "var(--text)", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: open ? "var(--purple)" : "var(--text)", borderRadius: 2, transition: "all 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: open ? "var(--purple)" : "var(--text)", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className="nav-mobile" style={{
        maxHeight: open ? 320 : 0, overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        background: "rgba(10,10,20,0.97)", borderTop: open ? "1px solid var(--border)" : "none",
      }}>
        {links.map((l, i) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              color: "var(--text)", textDecoration: "none",
              padding: "14px 24px", fontSize: 15, fontWeight: 500,
              borderBottom: i < links.length - 1 ? "1px solid var(--border)" : "none",
              transition: "color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--purple)"; e.currentTarget.style.background = "rgba(167,139,250,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "transparent"; }}>
            {l}
            <span style={{ color: "var(--muted)", fontSize: 12 }}>→</span>
          </a>
        ))}
        <div style={{ padding: "16px 24px" }}>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ display: "block", textAlign: "center" }}>
            Hire Me
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) { .nav-mobile { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
      `}</style>
    </nav>
  );
};

export default Heading;
