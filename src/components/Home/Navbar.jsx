import { useState } from 'react'
import Logo from '../../assets/logo-nav.png'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-center items-center px-6 py-2 md:p-4 text-blue-800 text-lg font-semibold h-24'>

      <div className='absolute left-0 ml-8'>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className='w-full md:w-auto flex flex-col items-center md:flex-row'>
      <nav className={`fixed w-3/4 top-0 left-0 h-full  bg-white z-10 flex flex-col items-center justify-center gap-6 font-sans ${isOpen ? 'block' : 'hidden'} md:relative md:bg-transparent md:flex-row md:justify-around md:gap-6 md:block md:mx-20 `}>
          <button className={`absolute top-10 right-10 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}>
            <FaTimes color='#2C5697' size='30px' />
          </button>
          <ul className={`md:flex justify-around gap-6 font-sans ${isOpen ? 'block' : 'hidden'} md:block`}>
            <li className='md:mb-0 mb-8'><Link to="/">Artículos</Link></li> 
            <li className='md:mb-0 mb-8'><Link to="/">Posgrados</Link></li>
            <li className='md:mb-0 mb-8'><Link to="/">Expo - Javeriana</Link></li>
          </ul>
        </nav>

      </div>


      <button className='md:hidden order-5 ml-12' onClick={() => setIsOpen(!isOpen)}>
        <FaBars color='#2C5697' size='20px' />
      </button>
    </div>
  )
}

export default Navbar