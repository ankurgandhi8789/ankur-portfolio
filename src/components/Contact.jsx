import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  color: "var(--text)",
  fontFamily: "var(--font)",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  marginBottom: 16,
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(null);
  const formRef = useRef();

  const focusStyle = name => ({
    ...inputStyle,
    borderColor: focused === name ? "var(--purple)" : "var(--border)",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={{ color: "var(--purple)", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Contact</p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800 }}>Let's <span className="gradient-text">Work Together</span></h2>
        <p style={{ color: "var(--muted)", marginTop: 12, fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Have a project in mind?</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 900, margin: "0 auto" }} className="contact-grid">
        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { icon: "📧", label: "Email", value: "ankur@gandhi.dev" },
            { icon: "📍", label: "Location", value: "India" },
            { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ankurgandhi" },
            { icon: "🐙", label: "GitHub", value: "github.com/ankurgandhi" },
          ].map(item => (
            <div key={item.label} className="glass" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: 11, color: "var(--muted)", marginBottom: 2 }}>{item.label}</p>
                <p style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass" style={{ padding: 32 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: "var(--muted)", fontSize: 14 }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <input required name="from_name" placeholder="Your Name" style={focusStyle("name")}
                onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
              <input required name="from_email" type="email" placeholder="Your Email" style={focusStyle("email")}
                onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
              <input name="subject" placeholder="Subject" style={focusStyle("subject")}
                onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} />
              <textarea required name="message" rows={5} placeholder="Your message..." style={{ ...focusStyle("msg"), resize: "vertical" }}
                onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)} />
              {error && <p style={{ color: "#f87171", fontSize: 13, marginBottom: 12 }}>{error}</p>}
              <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", opacity: loading ? 0.7 : 1 }} disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Back to top button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            background: "transparent", border: "none", cursor: "pointer", color: "var(--muted)",
            fontFamily: "var(--font)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
        >
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            border: "1px solid rgba(167,139,250,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(167,139,250,0.08)",
            fontSize: 18, transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.2)"; e.currentTarget.style.borderColor = "var(--purple)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(167,139,250,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(167,139,250,0.08)"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            ↑
          </div>
          Back to Top
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
