const IconButton = ({ children, url, title }) => {
  return (
    <a href={url}
      className={`${url === '' ? 'hideIcon' : 'showIcon'} inline-flex cursor-pointer items-center mx-1 text-sm font-medium text-indigo-400 lg:mb-0 hover:text-indigo-600 border-b-2 border-transparent hover:border-b-2 hover:border-indigo-600 transition ease-out delay-100 hover:scale-110`}
      title={title}
      target="_blank"
    >
      {children}
    </a>
  )
}

export default IconButton