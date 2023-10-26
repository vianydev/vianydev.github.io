import Link from 'next/link'
import ButtonSecondary from './button-secondary';

const Navbar = () => {
  return (
    <header className="fixed z-50 w-full ">
      <div className="bg-white py-4 md:py-4 px-7 mx-auto w-full max-w-7xl sm:px-6 md:items-center md:flex md:justify-between lg:px-20">
        <nav className="flex justify-between items-center w-full">
          <div>
            <Link href='/' className="inline-flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 className="text-xl font-mono tracking-widest leading-6 text-neutral-800 hover:text-indigo-600">Vianey</h2>
            </Link>
          </div>

          <div className="flex items-center tracking-widest">
            <ButtonSecondary link='/portfolio' className="margin-nav">Portfolio</ButtonSecondary>
          </div>

        </nav>

      </div>
    </header>

  );
}

export default Navbar;