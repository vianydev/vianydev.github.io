import Image from "next/image"
const CardProject = () => {
  return (
    <div className="container flex flex-col transition duration-300 ease-in-out delay-50 transform bg-white shadow-2xl rounded-xl md:hover:-translate-x-2 md:hover:-translate-y-2">
      <Image
        src="/image/himnapp/himnapp-details1.jpg"
        className="object-cover object-center w-full rounded-t-xl lg:h-56 md:h-36"
        width={500}
        height={500}
        alt="blog" />

      <div className="px-6 py-8">
        <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">a great header right here</h2>
        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short length headline to use as a title.</h1>
        <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
        </div>
      </div>
    </div>
  )
}

export default CardProject