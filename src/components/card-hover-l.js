const CardTextL = ({
  urlImage,
  projectType,
  projectName,
  description,
  tags,
  urlRepo,
  urlLive
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 bg-slate-50 rounded-lg">

      <div className="overflow-hidden bg-cover cursor-pointer h-96 group bg-slate-100  border border-slate-100 bg-center rounded-lg md:order-last"
        style={{ backgroundImage: urlImage }}>

        <div className="flex justify-center w-full h-full px-8 py-4 transition-opacity duration-700  backdrop-blur-sm opacity-0 bg-indigo-800/60 group-hover:opacity-100 ">
          <ul className="flex flex-col md:flex-row justify-center items-center">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="py-2 px-4 m-2 flex justify-center rounded-sm text-xs tracking-wider text-indigo-100 bg-indigo-400 uppercase "
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* PROJECT INFO */}
      <div className="flex flex-col justify-between mr-4 ml-6 md:ml-4 my-8">
        <div>
          <h2 className="mt-3 mb-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">{projectType}</h2>
          <h1 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-700 lg:text-3xl">{projectName}</h1>
          <p className="my-6 h-28 max-h-36 text-base leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
        <div className="pt-4">
          <a href={urlLive} target="_blank" className="inline-flex items-center mr-5 pb-4 font-semibold text-indigo-600 lg:mb-0 hover:text-indigo-400 border-b-2 border-transparent hover:border-b-2 hover:border-indigo-400" title="live">
            View site
            <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>

          <a href={urlRepo} target="_blank" className="inline-flex items-center mr-5 pb-4 font-semibold text-indigo-600 lg:mb-0 hover:text-indigo-400 border-b-2 border-transparent hover:border-b-2 hover:border-indigo-400" title="repository">
            Repository
            <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardTextL