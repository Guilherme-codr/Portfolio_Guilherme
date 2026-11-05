import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <div className="p-4">
        <h1 className="text-white text-4xl font-bold flex justify-center pt-6">
          Projetos em Destaque
        </h1>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
