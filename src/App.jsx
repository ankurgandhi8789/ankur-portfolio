import { useState } from "react";
import Heading from "./components/Heading.jsx";
import Intro from "./components/Intro.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SplashScreen from "./components/SplashScreen.jsx";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
    
      <SplashScreen onDone={() => setSplashDone(true)} />

      {/* Background gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div style={{ opacity: splashDone ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <Heading />
        <Intro />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
