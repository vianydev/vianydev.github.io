import Image from "next/image"
// import ButtonBox from "./button-box"

const AboutMe = () => {
  return (
    <section id="about">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-neutral-50">
        <div className="flex flex-wrap justify-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div className="flex flex-col">
              <div className="relative w-full max-w-lg my-5 mx-auto">
                <div className="relative">
                  <Image
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl filter contrast-75"
                    src="/image/profile-3.jpg"
                    // src="/image/profile-2.png"
                    // src="/image/profile-picture.jpg"
                    placeholder='empty'
                    priority={true}
                    width={300}
                    height={300}
                    alt="About me picture"
                  />

                </div>
              </div>
              {/* Download CV button */}
              {/* <div className="my-5">
                <div className="flex flex-col sm:flex-row justify-start m-0">
                  <ButtonBox
                    className="mx-0"
                    setTarget="_blank"
                    url={"https://drive.google.com/file/d/1MOdAreMXOMsSV3dVfTpGkPwlO0VKdkBV/"}>
                    Resume
                  </ButtonBox>
                </div>
              </div> */}

            </div>
          </div>
          <div className="flex flex-col items-start justify-center mt-12 xs:mt-0 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase">
              About me
            </span>
            <h1 className="mb-4 text-xl font-medium leading-none tracking-tighter text-neutral-600 md:text-2xl lg:text-4xl">
              <span className="font-normal">Hello there, my name is</span> Vianey,
              <p className="text-xl mt-4 font-normal tracking-normal"> I&#39;ve been creating new digital stuff since 2013. I thrive on transforming concepts into digital experiences through the power of code! </p>
              
            </h1>

            <div className="w-full">
              <span className="mb-2 text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Tech I&#39;ve been working with
              </span>
              <div className="grid gap-3 md:gap-1 grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 w-full mx-auto text-left">
                <div className="py-2 mt-2">
                  <ul className="marker:text-neutral-400 list-disc list-inside text-neutral-600/70">
                    {/* <li>HTML/CSS</li> */}
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next</li>
                    <li>Gatsby</li>
                    <li>WordPress</li>
                  </ul>
                </div>
                <div className="py-2 mt-2">
                  <ul className="marker:text-neutral-400 list-disc list-inside text-neutral-600/70">
                    <li>Node.js</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Postgresql</li>
                    <li>Git/CLI</li>
                  </ul>
                </div>

                <div className="py-2 mt-2">
                  <ul className="marker:text-neutral-400 list-disc list-inside text-neutral-600/70">
                    <span className="text-neutral-500 font-mono text-sm">usefull skills</span>
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
