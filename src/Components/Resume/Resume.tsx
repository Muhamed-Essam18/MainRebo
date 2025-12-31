import { ResumeIcons } from "../Icons/Icons";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import OverLay from "../../Containers/Body/Overlay/OverLay";
import ResumeHeads from "./ResumeHeads";
import Reveal from "../../Containers/Animations/Reveal";

const ResumeContent = [
  { id: "summary", title: "Summary", icon: ResumeIcons["summary"] },
  {
    id: "workExperience",
    title: "Work Experience",
    icon: ResumeIcons["workExperience"],
  },
  { id: "skills", title: "Core Skills", icon: ResumeIcons["skills"] },
  { id: "education", title: "Education", icon: ResumeIcons["education"] },
  {
    id: "quickOverview",
    title: "Quick Overview",
    icon: ResumeIcons["quickOverview"],
  },
  { id: "volunteer", title: "volunteering", icon: ResumeIcons["volunteer"] },
  { id: "languages", title: "Languages", icon: ResumeIcons["languages"] },
  { id: "projects", title: "Projects&Events", icon: ResumeIcons["projects"] },
  { id: "contact", title: "Contact Me", icon: ResumeIcons["contact"] },
];

export const icons = ResumeContent.map((obj) => ({ [obj.id]: obj.icon }));

const Resume = () => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [clickedId, setClickedId] = useState("null");

  const closeModal = () => {
    if (history.state?.modal) history.back();
  };

  useEffect(() => {
    const onBack = () => {
      setShowDetails(false);
      setShouldRender(false);
      document.body.style.overflow = "";
    };

    window.addEventListener("popstate", onBack);
    return () => window.removeEventListener("popstate", onBack);
  }, []);

  useEffect(() => {
    if (shouldRender) {
      if (!history.state?.modal) {
        history.pushState({ modal: true }, "", location.pathname);
      }

      document.body.style.overflow = "hidden";
      setTimeout(() => setShowDetails(true), 10);
    }
    return () => {};
  }, [shouldRender]);

  useEffect(() => {
    if (!ShowDetails && shouldRender) {
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [ShowDetails]);

  return (
    <>
      <Reveal>
        <section className="relative block pb-16 md:pb-30">
          <h1
            id="resume"
            className="w-90 md:pb-15 pb-10 m-auto text-center text-[45px] md:text-[50px] font-bold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"
          >
            About Me
          </h1>

          <div className="grid grid-cols-2 gap-5 w-4/5 md:w-2/3 m-auto sm:grid sm:grid-cols-2 md:grid md:grid-cols-3">
            {ResumeContent.map((cont) => (
              <div
                key={cont.id}
                className="w-full h-32 rounded-md bg-gray-800/70 flex justify-center items-center hover:bg-gray-700/70 group cursor-pointer transition-all duration-500"
                onClick={() => {
                  setClickedId(cont.id);
                  setShouldRender(true);
                }}
              >
                <div className="font-bold text-center text-white group-hover:text-gray-300 flex flex-col justify-center items-center gap-2  text-sm md:text-lg">
                  <div className="text-2xl ">{cont.icon}</div>
                  <div className="text-center">{cont.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {shouldRender && (
        <div
          className={`${
            ShowDetails ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        >
          <OverLay clicked={closeModal} />

          <div className="m-auto md:max-w-3/4 max-h-screen sm:max-h-[90vh] bg-[#111827]/80 backdrop-blur-sm fixed inset-0 flex flex-col justify-start items-center transition-all duration-300 z-20 overflow-y-auto overflow-x-hidden rounded-lg p-5">
            <button className="ml-auto" onClick={closeModal}>
              <MdOutlineCancel className="w-8 h-8 text-white cursor-pointer hover:text-red-500 hover:animate-pulse" />
            </button>

            <ResumeHeads compId={clickedId} />
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
