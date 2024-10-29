import React, { useState } from 'react'
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from './ResponsiveMenu.jsx'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';


export const Navlinks = [
  {
    id: '1',
    name: 'HOME',
    link: '/#',
  },
  {
    id: '2',
    name: 'CARS',
    link: '/#cars',
  },
  {
    id: '3',
    name: 'ABOUT',
    link: '/#about',
  },
  {
    id: '4',
    name: 'BOOKING',
    link: '/#booking'
  }
]

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40'>
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
          </div>
          {/* navbar */}
          <div className='hidden md:block '>

            <ul className='flex items-center gap-8'>
              {Navlinks.map((data) => (
                <li key={data.id}
                  className='py-4 '>
                  <a
                    className='py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium'
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* dark mode icons */}
              <div className='flex items-center gap-4'>
                {
                  theme === 'dark' ? (
                    <BiSolidSun
                      onClick={() => setTheme('light')}
                      className='text-2xl' />
                  ) : (
                    <BiSolidMoon
                      onClick={() => setTheme('dark')}
                      className='text-2xl' />
                  )}
              </div>
            </ul>

          </div>

          {/* mobile hamburger */}
          <div className='md:hidden'>
            {
              showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  size={30}
                  className='cursor-pointer transition-all' />
              ) : <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className='cursor-pointer transition-all' />
            }
          </div>

        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  )
}

export default Navbar