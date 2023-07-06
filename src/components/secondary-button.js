import Link from "next/link"
const SecondaryButton = ({ children, link }) => {
  return (
    <Link href={link}
      className="mx-auto mt-8 text-sm font-semibold px-1 py-4 text-indigo-600 cursor-pointer border-transparent border-b-2  hover:border-indigo-400 hover:text-indigo-400" title="let's chat">
      {children}
    </Link>
  )
}

export default SecondaryButton