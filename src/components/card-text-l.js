import IconButton from "./icon-button"
const CardTextL = ({
  urlImage,
  projectType,
  projectName,
  description,
  tags,
  urlRepo,
  urlLive,
  displayIs
}) => {
  return (
    <div className="grid grid-cols-1 gap-1 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 bg-slate-50 rounded-lg ">

      <div
        className="overflow-hidden bg-cover h-96 bg-slate-100 border bg-center rounded-lg md:order-last"
        style={{ backgroundImage: urlImage }}>
      </div>
      {/* PROJECT INFO */}
      <div className="flex flex-col justify-between mr-4 ml-6 lg:ml-8 my-8">
        <div>
          
          <h2 className="mt-3 mb-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">{projectType}</h2>
          <h1 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-700 lg:text-3xl">{projectName}</h1>
          <ul className="mt-1 flex flex-wrap justify-start">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="py-2 mr-2 flex justify-center rounded-sm text-[10px] tracking-wider text-neutral-400 uppercase "
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-6 h-28 max-h-36 text-base leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
        <div className="pt-4">
          <IconButton href={urlLive} displayIs={displayIs} title={"live"}>
            View site
            <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </IconButton>
          <IconButton href={urlRepo} displayIs={displayIs} title={"Repository"}>
            Repository
            <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </IconButton>
        </div>
      </div>
      
    </div>
  )
}

export default CardTextL