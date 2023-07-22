import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data"

const Projects = () => {
  return (
    <div>
      <nav>
        Navbar
      </nav>

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {
          projects.map(project => (
            <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
              <ProjectCard project={project} key={project.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects