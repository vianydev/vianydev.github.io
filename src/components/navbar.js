'use client'
import { useState, useEffect } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

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
        <div className="bg-white py-5 px-7 mx-auto w-full max-w-7xl sm:px-6 md:items-center md:flex md:justify-between lg:px-20">
          <nav className="flex justify-between w-full">
            <div>

            <Link href='/' className="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 className="font-bold text-2xl leading-6 text-gray-800 ">viany.dev</h2>
            </Link>
            </div>
            {/* For medium and plus sized devices */}
            <div className="flex">
              <ul className="hidden md:flex flex-auto space-x-2 justify-end">
                {/* <li
                  id="work"
                  className={`nav-item text-gray-500 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 pt-2 pb-4 font-normal leading-3 hover:text-indigo-600 hover:border-indigo-600`}
                >
                  <Link href='/work' name="work">Last projects</Link>
                </li> */}
                <li
                  id="portfolio"
                  className={`nav-item text-gray-500 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 pt-2 pb-4 font-normal leading-3 hover:text-indigo-600 hover:border-indigo-600`}
                >
                  <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li
                  id="contact"
                  className={`nav-item text-gray-500 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 pt-2 pb-4 font-normal leading-3 hover:text-indigo-600 hover:border-indigo-600`}
                >
                  <Link href='/contact'>Contacto</Link>
                </li>
              </ul>
              <div className=" flex space-x-5 justify-center items-center pl-2">
                <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                  <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
                </div>
                <svg className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
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
                {/* <li
                  onClick={() => setSelectedText("Last projects")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link href='/work'>Work</Link>
                </li> */}
                <li
                  onClick={() => setSelectedText("Portfolio")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li
                  onClick={() => setSelectedText("Contact")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link href='/contact'>Contact</Link>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
      </header>

    );
  }

export default Navbar;