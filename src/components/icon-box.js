const IconBox = ({ children, url, title }) => {
  return (
    <a href={url}
      className="text-gray-400 hover:text-indigo-600 transition-all ease-out delay-100 hover:scale-125"
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      <span className="sr-only">{title}</span>
     {children}
    </a>   
  )
}

export default IconBox