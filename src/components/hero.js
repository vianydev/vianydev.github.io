const Hero = () => {
  return (
    <section className="px-3 max-w-7xl md:px-20 lg:px-24 lg:py-30">
      <div className="h-screen flex flex-col justify-center w-full text-center">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50">
          <p className="text-3xl">👋</p>
        </div>
        <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
          Long headline to turn <br className="hidden lg:block" /> your visitors into users
        </h1>

        <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
          {'I\'m a Freelancer Front-end Developer, over 6 years of professional experience.'}
        </p>

        <a className="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more">
          Read more about the offer » </a>
      </div>
    </section>
  )
}

export default Hero