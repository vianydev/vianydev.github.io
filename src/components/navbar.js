'use client'
import { useState, useEffect } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import IconButton from "./icon-button";

const Navbar = () => {
  const currentPath = usePathname();

  const [ dropDown, setDropDown ] = useState(true);
  const [ text, setText ] = useState("");

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  }
  
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
      item.classList.remove('active')
      if (currentPath.includes(item.id)) {
        item.classList.add('active')
      } 
    })

  }, [currentPath])

    return (
      <header className="fixed z-50 w-full ">
        <div className="bg-white py-4 md:py-4 px-7 mx-auto w-full max-w-7xl sm:px-6 md:items-center md:flex md:justify-between lg:px-20">
          <nav className="flex justify-center md:justify-between items-center w-full">
            <div>

            <Link href='/' className="inline-flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 className="font-bold text-2xl leading-6 text-gray-800 ">viany.dev</h2>
            </Link>
            </div>
            {/* For medium and plus sized devices */}
            <div className="flex items-center">
              <ul className="hidden md:flex flex-auto space-x-2 justify-end">
                <li id="contact"
                  className="nav-item text-neutral-500 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2 font-normal leading-3 inline-flex items-center mr-5lg:mb-0 hover:text-indigo-400 transition ease-out delay-100 hover:scale-110"
                >
                  <Link className='inline-flex items-center' href='/contact'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="pl-2">
                      {/* vianydev@gmail.com */}
                    </span>
                  </Link>
                </li>
              </ul>
              
            </div>
            
          </nav>


          {/* for smaller devcies */}
          <div className="block md:hidden w-full mt-5 ">
            <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
              <div className="flex space-x-2">
                <p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Home"}</p>
              </div>
              <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className=" relative">
              <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                <li
                  onClick={() => setSelectedText("Home")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link href='/'>Home</Link>
                </li>
                <li
                  onClick={() => setSelectedText("Portfolio")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link href='/portfolio'>Portfolio</Link>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
      </header>

    );
  }

export default Navbar;