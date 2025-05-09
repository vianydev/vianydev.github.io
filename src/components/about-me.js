import Image from "next/image"
// import ButtonBox from "./button-box"

const AboutMe = () => {
  return (
    <section id="about">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-neutral-50">
        <div className="flex flex-wrap justify-center items-start mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div className="">
              <div className="relative w-full max-w-lg mb-5 mx-auto">
                <div className="relative">
                  <Image
                    className="object-cover object-center mx-auto rounded-lg filter contrast-75"
                    src="/image/vianey-perfil-1.jpg"
                    placeholder='empty'
                    priority={true}
                    width={500}
                    height={300}
                    alt=" logo picture"
                  />

                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col items-start justify-center mt-12 xs:mt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase">
              About me
            </span>
            <h1 className="mb-4 text-xl font-normal leading-none text-neutral-600 md:text-2xl">
              <span className="font-normal">Hola, I&#39;m</span> Vianey,
              <p className="text-lg mt-4 tracking-normal">
                Tech enthusiast & project developer since 2013. I turn caffeine (and overthinking) into clean, functional tech —no fluff, no noise. If it can be said in 10 words, I&#39;ll use 5.
              </p>
              <p className="text-lg mt-4 tracking-normal">
                My brain runs on music, obsessive simplicity, and turning complex chaos into intuitive solutions.
                When I&#39;m not coding, you&#39;ll find me brewing the perfect espresso or getting lost in a song&#39;s production details. 
              </p>
              
            </h1>

            <div className="w-full">
              <span className="mb-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Tech & skills
              </span>
              <div className="flex flex-wrap w-full mx-auto text-left">
                <div className="py-2 pr-12 mt-2">
                  <ul className="marker:text-neutral-400 list-disc list-inside text-neutral-600/70">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Gatsby</li>
                    <li>Node.js</li>
                    <li>Postgresql</li>
                  </ul>
                </div>
    

                <div className="py-2 mt-2">
                  <ul className="marker:text-neutral-400 list-disc list-inside text-neutral-600/70">
                    <li>Photography</li>
                    <li>Video editing</li>
                    <li>Music production</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
