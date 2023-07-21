import IconButton from "./icon-button"
const CardProject = ({
  urlImage,
  projectType,
  projectName,
  description,
  tags,
  urlRepo,
  urlLive,
}) => {
  return (
    <div className="group overflow-hidden flex flex-col bg-cover rounded-lg bg-slate-50 transition ease-in-out duration-300 transform hover:scale-[1.03]" >

      <div className="overflow-hidden bg-cover h-80 group bg-slate-100 filter-none sm:filter saturate-50 group-hover:filter-none"
        style={{ backgroundImage: urlImage, backgroundPosition: 'center', backgroundSize: "cover" }}>
      </div>

      <div className="flex flex-col justify-between w-full px-4 py-4 max-h-96 backdrop-blur-sm">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="my-3 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              {projectType}
            </h2>
            <div>
              <IconButton url={urlRepo} title={"Repository"}>
                {/* Repository */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </IconButton>
              <IconButton url={urlLive} title={"live"}>
                {/* View site */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </IconButton>
            </div>
          </div>
          <h1 className="font-semibold text-lg leading-none tracking-tighter text-neutral-700 lg:text-2xl capitalize">
            {projectName}
          </h1>
          <p className="mt-3 mb-2 h-20 text-sm antialiased leading-relaxed text-gray-500">
            {description}
          </p>
          <ul className="flex flex-wrap items-center gap-1">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="m-1 flex justify-center text-[10px] text-neutral-400 uppercase "
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default CardProject