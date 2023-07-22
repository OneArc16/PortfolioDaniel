import {RiComputerLine} from 'react-icons/ri'
import { IService, ISkill, IProject } from './type'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'

export const services: IService[] = [
    {
        title: "Frontend Development",
        about: "Poseo experiencia en <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>NextJS</b>, <b>ReactJS</b>, <b>JAVA</b>, <b>C#</b> y <b>NodeJS</b>",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Development",
        about: "Manejo Base de Datos como <b>PostgreSQL</b>, <b>MySQL</b>",
        Icon: FaServer,
    },
    {
        title: "API Development",
        about: "lore...",
        Icon: AiOutlineApi,
    },
    {
        title: "Competitive Coder",
        about: "lore...",
        Icon: MdDeveloperMode,
    },
    {
        title: "Competitive Coder",
        about: "lore...",
        Icon: MdDeveloperMode,
    },
    {
        title: "UI/UX designer",
        about: "lore...",
        Icon: AiOutlineAntDesign,
    },
    {
        title: "Whatever",
        about: "lore...",
        Icon: RiComputerLine,
    },
]

export const languages: ISkill[] = [
    {
        name: "Javascript",
        level: "50%",
        Icon: BsCircleFill,
    },
    {
        name: "Java",
        level: "30%",
        Icon: BsCircleFill,
    },
    {
        name: "C#",
        level: "30%",
        Icon: BsCircleFill,
    },
    {
        name: "React",
        level: "50%",
        Icon: BsCircleFill,
    },
    {
        name: "Next",
        level: "50%",
        Icon: BsCircleFill,
    },
    {
        name: "Ruby",
        level: "10%",
        Icon: BsCircleFill,
    }
]

export const tools: ISkill[] = [
    {
        name: "Git",
        level: "60%",
        Icon: BsCircleFill,
    },
    {
        name: "Figma",
        level: "60%",
        Icon: BsCircleFill,
    },
    {
        name: "Photoshop",
        level: "20%",
        Icon: BsCircleFill,
    },
    {
        name: "illustrator",
        level: "50%",
        Icon: BsCircleFill,
    }
]

export const projects: IProject[] = [
    {
        name: "MyPao",
        description: "Pagina para mi novia",
        image_path: "public\images\MyPao.jpg",
        deployed_url: "https://my-pao-tau.vercel.app/",
        github_url: "https://github.com/OneArc16/MyPao",
        category: ["html"],
        key_techs: ["HTML", "CSS", "Bootstrap"],
    },
    {
        name: "PortfolioDaniel",
        description: "mi portafolio personal",
        image_path: "",
        deployed_url: "",
        github_url: "https://github.com/OneArc16/PortfolioDaniel",
        category: ["react", "next", "typescript"],
        key_techs: ["next", "react", "tailwind", "typescript"],
    },
]