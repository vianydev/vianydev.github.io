const Hero = () => {
  return (
    <section className="my-0 mx-auto px-3 max-w-7xl md:px-20 lg:px-24 lg:py-30">
      <div className="h-screen flex flex-col justify-center w-full text-center">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-indigo-500 rounded-full bg-gray-50">
          <p className="text-3xl">👋</p>
        </div>
        <h2 className="mt-3 mb-3 text-xs font-semibold tracking-widest text-indigo-500 uppercase">
          {/* Hello there */}
        </h2>
        <h1 className="max-w-5xl text-3xl font-bold leading-none capitalize tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
          Web developer &
          <br className="hidden lg:block" />
          <span className="text-neutral-600/70"> Digital Media Consultant</span>
        </h1>

        <p className="max-w-xl mx-auto mt-8 text-xl md:text-2xl leading-relaxed text-center text-neutral-600/70">
          Building websites and training others about technology and digital media.
        </p>

        <div className="mt-8 mx-auto text-center text-indigo-400">
          <a href="#about">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero