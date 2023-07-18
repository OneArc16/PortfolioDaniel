import {RiComputerLine} from 'react-icons/ri'
import { IService } from './type'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'

export const services:IService[] = [
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