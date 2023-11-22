import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

import { ThemeBtn } from '../index'
import { HashLink as Link } from 'react-router-hash-link';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const controlNavbar = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isOpen) {
        setShow("hide")
      } else {
        setShow("show");
      }
    }
    else {
      setShow("top")
    }
    setLastScrollY(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    };

  });

  return (
    <>
      <header className={`header ${show} py-4  md:py-8 dark:bg-slate-700 dark:text-white z-40`}>
        <nav className={`container px-4 mx-auto items-center`}>
          <div className="flex justify-between items-center text-xl font-semibold text-black">
            <Link smooth to='#home'>
              <li
                className="text-2xl font-bold text-[#051f3d] items-center list-none"
                to="/"
              >
                <h1 className='text-[#26269a] dark:text-violet-100'>dev_kongkon</h1>
              </li>
            </Link>
            {/* For large Devices */}
            <ul className="md:flex md:space-x-6 lg:space-x-14 hidden dark:text-violet-100 font-medium  ">
              <Link smooth to='#home'>
                <li className='cursor-pointer'>Home</li>
              </Link>
              <Link smooth to='#home'>
                <li className='cursor-pointer'>About</li>
              </Link>
              <Link smooth to='#projects'>
                <li className='cursor-pointer'>Projects</li>
              </Link>
              <Link smooth to='#contact'>
                <li className='cursor-pointer'>Contact</li>
              </Link>
              <ThemeBtn />
            </ul>
            {/* Menu btn for only mobile devices */}
            <div className="md:hidden dark:text-white flex items-center justify-center space-x-2">
              <Hamburger
                toggled={isOpen}
                toggle={handleToggle}
                size={25}
              />
               <ThemeBtn />
            </div>
            
          </div>
          {/* menu for mobile devices */}
          <div className={`${isOpen ? "flex" : "hidden"}  absolute right-0 flex-col top-[86px] w-full mx-auto text-center menu-animation bg-[#fdfdfd] dark:bg-slate-600 text-xl -mt-2 `}>
            <ul className="flex list-none flex-col py-6 dark:text-violet-200">
              <Link smooth to='#home' onClick={closeMenu}>
                <li className='cursor-pointer pb-6'>Home</li>
              </Link>
              <Link smooth to='#home' onClick={closeMenu}>
                <li className='cursor-pointer pb-6'>About</li>
              </Link>
              <Link smooth to='#projects' onClick={closeMenu}>
                <li className='cursor-pointer pb-6'>Projects</li>
              </Link>
              <Link smooth to='#contact'  onClick={closeMenu}>
                <li className='cursor-pointer pb-6'>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;