import Image from "next/image"
// import ButtonBox from "./button-box"

const AboutMe = () => {
  return (
    <section id="about">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-neutral-50">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div className="">
              <div className="relative w-full max-w-lg my-5 mx-auto">
                <div className="relative">
                  <Image
                    className="object-cover object-center mx-auto rounded-lg filter contrast-75"
                    // src="/image/profile-3.jpg"
                    src="/image/vianey-icon1.png"
                    placeholder='empty'
                    priority={true}
                    width={300}
                    height={300}
                    alt="cup logo picture"
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
              <span className="font-normal">Hello there!, I&#39;m</span> Vianey,
              <p className="text-lg mt-4 tracking-normal"> I&#39;ve been into tech and project development since 2013. Fueled by my passion for innovation, I enjoy transforming ideas into digital experiences through the power of code!</p>
              
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
                    <li>WordPress</li>
                    <li>Figma</li>
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
