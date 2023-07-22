import { IProject } from "@/type"
import { FunctionComponent, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { MdClose } from "react-icons/md"

const ProjectCard:FunctionComponent<{

    project:IProject

}> = ({
    project:{
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    },
}) => {

    const [showDetail, setShowDetail] = useState(false);
    
  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(true)}/>
      <p className="my-2 text-center">{name}</p>

      {showDetail &&(

      <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
        <div>
        <img src={image_path} alt={name} />
        <div>
        <a href={github_url}>
            <AiFillGithub /> <span>GitHub</span>
        </a>
        <a href={deployed_url}>
        <AiFillGithub /> <span>Project</span>
        </a>
        </div>
        </div>
      
      <div>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <div>
        {
            key_techs.map((tech=><span key={tech}>
             {tech}
            </span>))
        }
        </div>
      </div>

      <button onClick={() => setShowDetail(false)}>
        <MdClose size={30} />
      </button>
           
      </div>
)}
    </div>
  )
}

export default ProjectCard
