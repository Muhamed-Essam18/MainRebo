import ProjectCard from "./ProjectCard";
const Projects: React.FC = () => {
  return (
    <>
      <div id="projects" className=" m-auto">
        <h1 className="text-[45px] md:text-[50px]  text-center font-bold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </h1>
      </div>

      <p className="text-xl text-center w-[90%] m-auto text-gray-400 pb-10">
        These projects showcase my work. They include both practice templates
        and real freelance projects.
      </p>
      <ProjectCard />
    </>
  );
};

export default Projects;
