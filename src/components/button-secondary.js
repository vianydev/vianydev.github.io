import Link from "next/link"
const ButtonSecondary = ({ children, link }) => {
  return (
    <Link href={link}
      className="mx-auto text-sm font-mono text-neutral-400 tracking-wide px-1 py-4 cursor-pointer border-transparent border-b-2  hover:border-indigo-600 hover:text-indigo-600" title="let's chat">
      {children}
    </Link>
  )
}

export default ButtonSecondary