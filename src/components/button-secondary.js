import Link from "next/link"
const ButtonSecondary = ({ children, link }) => {
  return (
    <Link href={link}
      className="mx-auto text-sm font-base text-slate-500 px-1 py-4 cursor-pointer border-transparent border-b-2  hover:border-indigo-400 hover:text-indigo-400" title="let's chat">
      {children}
    </Link>
  )
}

export default ButtonSecondary