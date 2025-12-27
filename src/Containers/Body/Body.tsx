import React from "react";
import Footer from "../../Components/Footer/Footer";
import Me from "../../Components/Me/Me";
import Projects from "../../Components/Projects/Projects";
import Resume from "../../Components/Resume/Resume";
import Timeline from "../../Components/DevPhases/DevPhases";
import ContactForm from "../../Components/Contact/Contact";
const Body = () => {
  return (
    <div
      className="min-h-screen pb-0 m-0 bg-[#111827] "
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="absolute  h-auto overflow-visible inset-0 bg-[radial-gradient(circle_600px_at_center,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none"></div>
      <Me />
      <Resume />
      <Projects />
      <Timeline />
      <ContactForm />
      <Footer />
    </div>
  );
};
export default Body;
