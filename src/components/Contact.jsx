import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(null);
  const formRef = useRef();

  const inputStyle = (name) => ({
    width: "100%",
    padding: "12px 12px",
    background: "transparent",
    border: "none",
    borderBottom:
      focused === name
        ? "1px solid #D4A017"
        : "1px solid rgba(255,255,255,0.1)",
    color: "#E5E5E5",
    fontSize: 14,
    outline: "none",
    transition: "border 0.2s ease",
    marginBottom: 22,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      {/* HEADER */}
      {/* <div style={{ marginBottom: 60 }}>
        <p
          style={{
            color: "#D4A017",
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 700,
            color: "#E5E5E5",
          }}
        >
          Let’s Work Together
        </h2>
      </div> */}
      {/* HEADER */}
       <div style={{ textAlign: "center", marginBottom: 60 }}>
         <p
           style={{
            color: "#D4A017",
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "#E5E5E5",
          }}
        >
          Let’s <span style={{ color: "#D4A017" }}>Work Together</span>
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            marginTop: 12,
            fontSize: 14,
          }}
        >
          Have a project or idea? Let’s build something great.
        </p>
      </div>

      {/* LAYOUT */}
      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 60,
        }}
      >
        {/* LEFT — SIMPLE INFO */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {[
            { label: "Email", value: "ankur@gandhi.dev" },
            { label: "Location", value: "India" },
            { label: "LinkedIn", value: "linkedin.com/in/ankurgandhi" },
            { label: "GitHub", value: "github.com/ankurgandhi" },
          ].map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontSize: 11,
                  color: "#9CA3AF",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#E5E5E5",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT — CLEAN FORM */}
        <div>
          {sent ? (
            <div>
              <h3 style={{ color: "#E5E5E5", marginBottom: 6 }}>
                Message sent
              </h3>
              <p style={{ color: "#9CA3AF", fontSize: 13 }}>
                I’ll get back to you soon.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                required
                name="from_name"
                placeholder="Your name"
                style={inputStyle("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />

              <input
                required
                name="from_email"
                type="email"
                placeholder="Your email"
                style={inputStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />

              <textarea
                required
                name="message"
                rows={4}
                placeholder="Message"
                style={inputStyle("msg")}
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
              />

              {error && (
                <p style={{ color: "#EF4444", fontSize: 12 }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                style={{
                  marginTop: 10,
                  background: "transparent",
                  border: "none",
                  color: "#D4A017",
                  fontSize: 13,
                  cursor: "pointer",
                  letterSpacing: 1,
                }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>

      </div>
       {/* BACK TO TOP */}
       <div style={{ textAlign: "center", marginTop: 60 }}>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          style={{
            background: "#0F0F0F",
            border: "1px solid rgba(212,160,23,0.4)",
            color: "#D4A017",
            padding: "10px 18px",
            borderRadius: 8,
            fontSize: 12,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "rgba(212,160,23,0.08)";
            e.currentTarget.style.borderColor = "#EAB308";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor =
              "rgba(212,160,23,0.4)";
          }}
        >
          ↑ Back to Top
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;




// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

// const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// const Contact = () => {
//   const [sent, setSent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [focused, setFocused] = useState(null);
//   const formRef = useRef();

//   const inputStyle = (name) => ({
//     width: "100%",
//     padding: "12px 14px",
//     background: "#0F0F0F",
//     border: focused === name
//       ? "1px solid #D4A017"
//       : "1px solid rgba(255,255,255,0.06)",
//     borderRadius: 8,
//     color: "#E5E5E5",
//     fontSize: 13,
//     outline: "none",
//     transition: "all 0.2s ease",
//     marginBottom: 14,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await emailjs.sendForm(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         formRef.current,
//         PUBLIC_KEY
//       );
//       setSent(true);
//     } catch (err) {
//       setError("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       style={{
//         padding: "90px 24px",
//         maxWidth: 1100,
//         margin: "0 auto",
//       }}
//     >
//       {/* HEADER */}
//       <div style={{ textAlign: "center", marginBottom: 60 }}>
//         <p
//           style={{
//             color: "#D4A017",
//             fontSize: 12,
//             letterSpacing: 2,
//             textTransform: "uppercase",
//             marginBottom: 10,
//           }}
//         >
//           Contact
//         </p>

//         <h2
//           style={{
//             fontSize: "clamp(28px, 4vw, 40px)",
//             fontWeight: 800,
//             color: "#E5E5E5",
//           }}
//         >
//           Let’s <span style={{ color: "#D4A017" }}>Work Together</span>
//         </h2>

//         <p
//           style={{
//             color: "#9CA3AF",
//             marginTop: 12,
//             fontSize: 14,
//           }}
//         >
//           Have a project or idea? Let’s build something great.
//         </p>
//       </div>

//       {/* GRID */}
//       <div
//         className="contact-grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: 40,
//           maxWidth: 900,
//           margin: "0 auto",
//         }}
//       >
//         {/* INFO */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//           {[
//             { icon: "📧", label: "Email", value: "ankur@gandhi.dev" },
//             { icon: "📍", label: "Location", value: "India" },
//             { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ankurgandhi" },
//             { icon: "🐙", label: "GitHub", value: "github.com/ankurgandhi" },
//           ].map((item) => (
//             <div
//               key={item.label}
//               style={{
//                 background: "#111111",
//                 border: "1px solid rgba(212,160,23,0.4)",
//                 padding: "16px 18px",
//                 borderRadius: 10,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 14,
//                 transition: "all 0.25s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = "rgba(212,160,23,0.3)";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = "rgba(212,160,23,0.4)";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               <span style={{ fontSize: 20 }}>{item.icon}</span>
//               <div>
//                 <p style={{ fontSize: 11, color: "#9CA3AF" }}>
//                   {item.label}
//                 </p>
//                 <p style={{ fontSize: 13, color: "#E5E5E5" }}>
//                   {item.value}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* FORM */}
//         <div
//           style={{
//             background: "#111111",
//             border: "1px solid rgba(212,160,23,0.4)",
//             padding: 26,
//             borderRadius: 12,
//           }}
//         >
//           {sent ? (
//             <div style={{ textAlign: "center", padding: "30px 0" }}>
//               <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
//               <h3 style={{ color: "#E5E5E5", marginBottom: 6 }}>
//                 Message Sent
//               </h3>
//               <p style={{ color: "#9CA3AF", fontSize: 13 }}>
//                 I’ll reply soon.
//               </p>
//             </div>
//           ) : (
//             <form ref={formRef} onSubmit={handleSubmit}>
//               <input
//                 required
//                 name="from_name"
//                 placeholder="Your Name"
//                 style={inputStyle("name")}
//                 onFocus={() => setFocused("name")}
//                 onBlur={() => setFocused(null)}
//               />

//               <input
//                 required
//                 name="from_email"
//                 type="email"
//                 placeholder="Your Email"
//                 style={inputStyle("email")}
//                 onFocus={() => setFocused("email")}
//                 onBlur={() => setFocused(null)}
//               />

//               <textarea
//                 required
//                 name="message"
//                 rows={5}
//                 placeholder="Your message..."
//                 style={{ ...inputStyle("msg"), resize: "vertical" }}
//                 onFocus={() => setFocused("msg")}
//                 onBlur={() => setFocused(null)}
//               />

//               {error && (
//                 <p style={{ color: "#EF4444", fontSize: 12 }}>
//                   {error}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 className="btn-primary"
//                 style={{
//                   width: "100%",
//                   marginTop: 10,
//                   opacity: loading ? 0.7 : 1,
//                 }}
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Send Message →"}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       {/* BACK TO TOP */}
//       <div style={{ textAlign: "center", marginTop: 60 }}>
//         <button
//           onClick={() =>
//             window.scrollTo({ top: 0, behavior: "smooth" })
//           }
//           style={{
//             background: "#0F0F0F",
//             border: "1px solid rgba(212,160,23,0.4)",
//             color: "#D4A017",
//             padding: "10px 18px",
//             borderRadius: 8,
//             fontSize: 12,
//             cursor: "pointer",
//             transition: "all 0.2s ease",
//           }}
          
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background =
//               "rgba(212,160,23,0.08)";
//             e.currentTarget.style.borderColor = "#EAB308";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "transparent";
//             e.currentTarget.style.borderColor =
//               "rgba(212,160,23,0.4)";
//           }}
//         >
//           ↑ Back to Top
//         </button>
//       </div>

//       <style>{`
//         @media (max-width: 640px) {
//           .contact-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Contact;