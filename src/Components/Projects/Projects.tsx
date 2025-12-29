import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <div id="projects" className="w-70 m-auto pt-30">
        <h1 className="text-[45px] md:text-[50px] text-center font-bold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          My Projects
        </h1>
      </div>

      <p className="text-xl text-center text-gray-400 pb-15">
        These projects showcase my work. They include both practice templates
        and real freelance projects.
      </p>
      <ProjectCard />
    </>
  );
};

export default Projects;
