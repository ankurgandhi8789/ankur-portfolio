const MobileTimeline = ({ projects }) => (
  <div className="mobile-timeline" style={{ display: "none", flexDirection: "column", gap: 32, position: "relative", paddingLeft: 32 }}>
    <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, transparent, var(--purple), var(--blue), transparent)", opacity: 0.5 }} />
    {projects.map(p => (
      <div key={p.title} style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
        <div style={{ position: "absolute", left: -26, top: 20, width: 12, height: 12, borderRadius: "50%", background: p.color, boxShadow: `0 0 10px ${p.color}`, border: "2px solid var(--bg)", zIndex: 1 }} />
        <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: `1px solid ${p.color}44`, borderRadius: 16, padding: 20, backdropFilter: "blur(12px)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)`, borderRadius: "16px 16px 0 0" }} />
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: p.color, background: `${p.color}18`, padding: "3px 10px", borderRadius: 50 }}>{p.tag}</span>
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{p.title}</h3>
          <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
            {p.stack.map(s => (<span key={s} style={{ fontSize: 11, color: "var(--muted)", background: "rgba(255,255,255,0.06)", padding: "3px 10px", borderRadius: 50, border: "1px solid var(--border)" }}>{s}</span>))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, background: "rgba(255,255,255,0.08)", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href={p.demo} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, background: `${p.color}22`, border: `1px solid ${p.color}55`, color: p.color, textDecoration: "none" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MobileTimeline;
