import Link from "next/link"
const ButtonPrimary = ({ children, link }) => {
  return (
    <Link href={link}
      className="mx-auto mt-8 text-sm font-medium px-6 py-2 relative border-2 border-indigo-400 text-indigo-400 hover:text-neutral-50 cursor-pointer before:content-[''] before:absolute before:h-full before:top-0 before:left-0 before:w-0 before:bg-indigo-400 before:transition-all before:ease-out before:duration-300 hover:before:w-full before:z-0">

      <div className="relative inline-flex items-center tracking-wider">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 pl-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

      </div>

    </Link>
  )
}

export default ButtonPrimary