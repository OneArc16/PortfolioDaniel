import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi'
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Sidebar = () => {

  const {theme, setTheme} = useTheme();
  const changedTheme = () => {
    setTheme(theme === "ligth" ? "dark" : "ligth")
  }

  return (
    <div>
      {/* <img src='https://lh3.googleusercontent.com/a/AAcHTte1uVpe26T2fbfzbfkWIAOf1t6bIalMl7en3aStV5knNdW9Fw4genhnwyz2NP1uv5l_iYADu1yy9Z4jn2oKDzrGc8Y=s288-c-no' alt='avatar' className='w-32 h-32 mx-auto border rounded-full'/> */}
      <Image src='https://d33wubrfki0l68.cloudfront.net/64becdd785ef220fe6b80296/c981fb9bce7acac16117/IMG_20230716_142011.jpg' width={120}
      height={120} alt='avatar' className='mx-auto border rounded-full' quality={80} />
        <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
            <span className='text-green'>Daniel Andres Castaño Navarro</span>
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>Web Develper</p>
        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500' href='/assets/Curriculum.pdf' download='Curriculum.pdf'><GiTie className='w-6 h-6'/>Download Curriculum</a>
        
        {/* Social Icon */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
          <a href=''>
            <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
          </a>
          <a href='https://github.com/OneArc16'>
            <AiFillGithub className='w-8 h-8 cursor-pointer'/>
          </a>
          <a href='https://www.linkedin.com/in/daniel-casta%C3%B1o-navarro-629106233/'>
            <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
          </a>
        </div>

        {/* Address */}
        <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500' style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
            <div className='flex items-center justify-center'>
              <GoLocation />
              <span>Santa Marta, Colombia</span>
            </div>
            <p className='my-2'>danielcast244@gmail.com</p>
            <p className='my-2'>+573022741098</p>
        </div>
        <button className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none' onClick={() => window.open('mailto:danielcast244@gmail.com')}>
          Email me
        </button>
        <button 
        onClick={changedTheme}
        className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>
    </div>
  )
}

export default Sidebar
