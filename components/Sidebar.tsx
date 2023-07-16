import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img src="public\images\Foto.jpg" alt="user avatar" className='w-32 h-32 mx-auto rounded-s-full'/>
        <h3 className='my-4 text-3xl font-medium tracking-wider'>
            <span>Daniel Andres Castaño Navarro</span>
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Develper</p>
        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' href='' download='name'><GiTie className='w-6 h-6'/>Download Resume</a>
        {/* Social Icon */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
          <a href=''>
            <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
          </a>
          <a href=''>
            <AiFillGithub className='w-8 h-8 cursor-pointer'/>
          </a>
          <a href=''>
            <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
          </a>
        </div>

        {/* Address */}
        <div className='py-4 my-5 bg-gray-200'>
            <div>
              <GoLocation />
              <span>Santa Marta, Colombia</span>
            </div>
            <p>danielcast244@gmail.com</p>
            <p>+573022741098</p>
        </div>
        <button>Email me</button>
        <button>Toggle Theme</button>
    </div>
  )
}

export default Sidebar
