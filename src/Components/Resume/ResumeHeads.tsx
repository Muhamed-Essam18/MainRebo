import React, { useEffect, useState, useRef } from "react";
import Details from "./Details";
import { ResumeIcons } from "../Icons/Icons";
import cv from "../../assets/imgs/CV.jpg";
const heads = [
  {
    type: "not-expandable",
    id: "summary",
    head: { text: "Summary", icon: ResumeIcons["summary"] },
    details: [
      `With 5 years in AIESEC, I developed strong expertise in project management, simplification, and organizational connection. Over the years, 
    I became deeply driven by growth, impact, and youth leadership, always pushing myself to create meaningful experiences that activate potential and deliver real results.
     My journey reflects not just professional development, but a genuine obsession with programming, problem-solving, 
     and building practical systems that make work smoother and more effective. I’m committed to continuous learning, 
     taking on challenges, and creating environments where people and ideas can grow confidently and sustainably..`,
    ],
    titles: [],
  },
  {
    type: "not-expandable",
    id: "quickOverview",
    head: { text: "Quick OverView", icon: ResumeIcons["quickOverview"] },
    details: [
      <img
        key="cv"
        src={cv}
        alt="CV"
        className="w-full max-w-3xl rounded-xl shadow-lg"
      />,
    ],
    titles: [],
  },
  {
    id: "skills",
    type: "not-expandable",
    head: { text: "Skills", icon: ResumeIcons["skills"] },
    details: [
      " Project Management",
      " Complex negotiations",
      " Presentations and Proposals",
      "Time Management",
      "Leadership",
      "Performance tracking and evaluations",
      "Critical Thinking",
      "Territory and account management.",
    ],
    titles: [],
  },
  {
    id: "education",
    type: "not-expandable",
    head: { text: "Education", icon: ResumeIcons["education"] },
    details: [
      " FACULTY OF SCIENCE | Bachelor Software industry & multimedia 2020 - 2025",
    ],
    titles: [],
  },
  {
    id: "contact",
    type: "not-expandable",
    head: { text: "Contact", icon: ResumeIcons["contact"] },
    details: [
      "Email: muhamedessam18@gmail.com",
      "LinkedIn: https://www.linkedin.com/in/muhamed-essam9a8983247",
      "Phone: +201272570775",
      "Location: Alexandria, Egypt",
    ],
    titles: [],
  },
  {
    id: "languages",
    type: "not-expandable",
    head: { text: "Languages", icon: ResumeIcons["languages"] },
    details: ["Arabic (Native)", "English (Professional)"],
    titles: [],
  },
  {
    id: "workExperience",
    type: "expandable",
    head: { text: "Work Experience", icon: ResumeIcons["workExperience"] },
    titles: [
      {
        id: "hr",
        title: "HR Generalist",
        date: " Educatly | Cairo, Egypt August - October 2025",
      },
      {
        id: "od",
        title: "OD Specialist",
        date: "AIESEC | Cairo, Egypt 2024 ‒ 2025",
      },
      {
        id: "frontEnd",
        title: "Front-End Web Developer",
        date: "Freelancer 2018-2019",
      },
    ],
  },

  {
    id: "volunteer",
    type: "expandable",
    head: { text: "Volunteering Experience", icon: ResumeIcons["volunteer"] },
    titles: [
      {
        id: "lcp",
        title: " Local Chapter Director",
        date: " AIESEC | Alexandria, Egypt 2023 - 2024",
      },
      {
        id: "operations",
        title: " Operations Specialist",
        date: "AIESEC | Cairo, Egypt 2024 ‒ 2025",
      },
    ],
  },
  {
    id: "projects",
    type: "expandable",
    head: { text: "Projects & Events", icon: ResumeIcons["projects"] },
    titles: [
      {
        id: "nationalConference",
        title: " National Conferences Lead",
        date: "2024,Egypt",
      },
      {
        id: "localConference",
        title: "Local Conference Organizer",
        date: "AIESEC | Cairo, Egypt 2024 ‒ 2025",
      },
    ],
  },
];
type ToggleState = Record<string, boolean>;
type DetailsRefs = Record<string, HTMLDivElement | null>;
let initialState: ToggleState = {};
heads.forEach((obj) =>
  obj.titles.forEach((title) => {
    initialState[title.id] = false;
  })
);

const ResumeHeads = (props: { compId: any }) => {
  const detailsRef = useRef<DetailsRefs>({});
  const [btntoogle, setBtntoogle] = useState<ToggleState>(initialState);
  useEffect(() => {
    Object.keys(btntoogle).forEach((key) => {
      if (btntoogle[key] && detailsRef.current[key]) {
        detailsRef.current[key]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [btntoogle]);

  const clickedComponent = heads.find((head) => head.id === props.compId);
  let content;
  if (clickedComponent?.type === "expandable") {
    content = (
      <>
        <div className="text-center font-bold text-2xl md:text-4xl mt-5 sm:mt-10 text-red-50 pb-5 flex flex-row justify-center items-center">
          <div className="mt-1 mr-2">{clickedComponent.head.icon}</div>{" "}
          {clickedComponent?.head?.text}
        </div>
        {clickedComponent?.titles?.map((selectedTitle) => (
          <div
            ref={(el) => {
              detailsRef.current[selectedTitle.id] = el;
            }}
            key={selectedTitle.id}
            className="w-full min-h-20 h-auto bg-cyan-900/20 hover:bg-cyan-900/50 text-cyan-50 mt-5 flex flex-col justify-between items-center pl-5 rounded-lg p-5 transition-all duration-500"
          >
            <div className="flex flex-row items-center p-3 text-sm">
              <h1 className="text-center font-bold mr-2 md:text-xl">
                {selectedTitle.title}
              </h1>

              {selectedTitle.date}
            </div>
            <button
              onClick={() => {
                setBtntoogle((prev) => ({
                  ...prev,
                  [selectedTitle?.id]: !prev[selectedTitle.id],
                }));
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded transition"
            >
              {btntoogle[selectedTitle.id] && "Show less"}
              {!btntoogle[selectedTitle.id] && "Show more"}
            </button>
            {btntoogle[selectedTitle.id] && (
              <div className="flex flex-row text-center transition-all duration-600">
                <Details id={selectedTitle.id}></Details>
              </div>
            )}
          </div>
        ))}
      </>
    );
  } else {
    content = (
      <>
        <div className="w-full bg-cyan-900/20 text-cyan-50 mt-5 flex flex-col justify-start items-center rounded-lg pb-15 transition-all duration-500">
          <h1 className="text-center font-bold text-cyan-50 text-4xl mt-10 flex flex-row items-center justify-center gap-2">
            <div className="mt-1.5">{clickedComponent?.head?.icon}</div>
            {clickedComponent?.head?.text}
          </h1>
          <div className=" text-cyan-50 text-center text-lg md:max-w-3/4 flex flex-col items-center justify-center mt-10 ">
            {clickedComponent?.details?.map((obj, key) => {
              if (clickedComponent?.details.length < 2) {
                return (
                  <div key={key} className=" text-cyan-50 text-center text-lg">
                    {obj}
                  </div>
                );
              } else {
                return <li className="m-0 p-0">{obj}</li>;
              }
            })}
          </div>
        </div>
      </>
    );
  }

  return <div className="w-full">{content}</div>;
};

export default React.memo(ResumeHeads);
