export default function About() {
  return (
    <section className="bg-white px-3 max-w-7xl md:px-20 lg:px-24 py-36">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Work
        </h1>

        <p className="mt-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
      </div>

      
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-slate-100"
          style={{ backgroundImage: "url(/image/himnapp/himapp-app.jpg)" }}>
          <div
            className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
          </div>
        </div>



        <div>
          <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">a great header right here</h2>
          <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short length headline to use as a title.</h1>
          <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
          <div class="mt-4">
            <a href="#" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
          </div>
        </div>

      </div>

      <div className="my-10 border-b border-gray-200"></div>
    </section>
  )
}