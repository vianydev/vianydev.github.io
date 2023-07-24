import Link from 'next/link'
import ButtonSecondary from './button-secondary';

const Navbar = () => {
  return (
    <header className="fixed z-50 w-full ">
      <div className="bg-white py-4 md:py-4 px-7 mx-auto w-full max-w-7xl sm:px-6 md:items-center md:flex md:justify-between lg:px-20">
        <nav className="flex justify-between items-center w-full">
          <div>

            <Link href='/' className="inline-flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 className="font-bold text-2xl leading-6 text-neutral-800 ">viany.dev</h2>
            </Link>
          </div>

          <div className="flex items-center">
            <ul className="flex flex-auto space-x-2 justify-end">
              <li id="contact"
                className="nav-item text-neutral-500 border-b-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-0 py-2 font-normal leading-3 inline-flex items-center hover:text-indigo-400 transition ease-out delay-100 hover:scale-105"
              >
                {/* <a className='inline-flex items-center' href='mailto:vianydev@gmail.com' target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="pl-2 hidden sm:block">
                    vianydev@gmail.com
                  </span>
                </a> */}
              </li>
            </ul>
            <ButtonSecondary link='/portfolio' className="margin-nav">Portfolio</ButtonSecondary>

          </div>

        </nav>

      </div>
    </header>

  );
}

export default Navbar;