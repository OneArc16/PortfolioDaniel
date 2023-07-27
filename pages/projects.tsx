import ProjectCard from "@/components/ProjectCard"
import ProjectsNavbar from "@/components/ProjectsNavbar"
import { projects as projectData } from "@/data"
import { Category } from "@/type"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "@/animation"

const Projects = () => {

  const [projects, setProjects] = useState(projectData)
  const [active, setActive] = useState('all')

  const handlerFilterCategory = ( category:Category | 'all' ) => {
    if( category === 'all' ) {
      setProjects(projectData);
      setActive(category);
      return;
    }

    const newArray = projectData.filter(project => project.category.includes(category));
    setProjects(newArray);
    setActive(category);
  }

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{height: "65vh"}}>

      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />

      <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial="initial" animate="animate">

        {
          projects.map(project => (
            <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeInUp} key={project.name}>
              <ProjectCard project={project} />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Projects