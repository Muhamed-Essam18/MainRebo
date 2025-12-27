import React from "react";

const Tools = () => {
  const tools = [
    {
      id: 1,
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      id: 2,
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      id: 3,
      name: "Java Script",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      id: 4,
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      id: 5,
      name: "Tailwind",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      id: 6,
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
    },
  ];
  const final = tools.map((tool) => {
    return (
      <div key={tool.id} className={`${tool.name} hover:animate-pulse group`}>
        <img
          src={tool.img}
          className="md:w-24 md:h-24 w-16 h-14 group-hover:w-28 group-hover:h-28 transition-all duration-300 "
        />
        <h2 className="md:mt-5 md:text-lg text-white mt-2 font-bold text-[13px]">
          {tool.name}
        </h2>
      </div>
    );
  });
  return (
    <>
      <div className="md:grid-cols-6 md:pt-10 w-1/2 pt-10 m-auto grid grid-cols-3 gap-5 justify-center justify-items-center">
        {final}
      </div>
    </>
  );
};

export default Tools;
