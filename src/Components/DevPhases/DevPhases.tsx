import Reveal from "../../Containers/Animations/Reveal";

const phases = [
  {
    id: 1,
    title: "Discovery",
    desc: "I start by understanding the project goals, target users, and core features. I review requirements carefully, ask clarifying questions, and analyze similar products to ensure the final solution aligns with both business and user needs.",
  },
  {
    id: 2,
    title: "Design",
    desc: "I translate designs or ideas into a clear UI structure, breaking the layout into reusable components. I focus on spacing, typography, color consistency, and responsiveness to create a clean and scalable interface.",
  },
  {
    id: 3,
    title: "Development",
    desc: "I build the user interface using modern front-end technologies, writing clean and maintainable code. I focus on component reusability, performance, and best practices while ensuring the UI behaves smoothly across different devices.",
  },
  {
    id: 4,
    title: "Testing",
    desc: "I test the interface across multiple screen sizes and browsers, fixing layout issues, improving accessibility, and refining interactions. I iterate on feedback to polish the user experience before final delivery.",
  },
  {
    id: 5,
    title: "Deployment",
    desc: "I prepare the project for deployment by optimizing assets, improving load times, and ensuring production-ready builds. I also provide basic documentation and remain available for future improvements or maintenance.",
  },
];
export default function Timeline() {
  return (
    <Reveal>
      {" "}
      <section className="md:w-2/3 w-[95%] m-auto pt-25">
        <h2 className="text-[45px] md:text-[50px] font-bold w[95%] leading-12 md:leading-normal text-center mb-3 bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Development Process
        </h2>
        <p className="mid:text-xl text-xl text-center w-[95%] m-auto  text-gray-400 pb-15">
          "From planning to deployment, these are the key phases I follow to
          build my front-end projects efficiently"
        </p>

        <div className="relative ">
          <div className=" left-5 absolute md:left-1/2 top-0 h-full w-1 bg-gray-600/70  -translate-x-1/2"></div>

          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`mb-5 flex flex-row  items-center    ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 w-[90%] px-6  order-3 md:order-1">
                <div className="bg-gray-800/70  p-6 rounded-xl shadow-lg ">
                  <h3 className="text-xl font-bold text-white">
                    {phase.title}{" "}
                  </h3>
                  <p className="text-gray-400 mt-2">{phase.desc}</p>
                </div>
              </div>

              <div className="relative z-10 order-2 ml-2.5 md:m-0">
                <span className="block w-5 h-5 bg-linear-to-r from-red-500 to-blue-500 rounded-full"></span>
              </div>

              <div className="hidden md:block w-1/2 order-1 md:order-3"></div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
