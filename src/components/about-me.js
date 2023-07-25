import Image from "next/image"
import ButtonBox from "./button-box"

const AboutMe = () => {
  return (
    <section id="about">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-slate-50">
        <div className="flex flex-wrap items-start mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div className="flex flex-col">
              <div className="relative w-full max-w-lg my-5 mx-auto">
                <div className="relative">
                  <Image
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    src="/image/profile-picture.jpg"
                    placeholder='empty'
                    priority={true}
                    width={500}
                    height={500}
                    alt="About me picture"
                  />

                </div>
              </div>
              {/* Download CV button */}
              <div className="my-5">
                <div className="flex flex-col sm:flex-row justify-start m-0">
                  <ButtonBox
                    className="mx-0"
                    setTarget="_blank"
                    url={"https://drive.google.com/file/d/1nnw5eBDUnle_a6G5SWDe-4MC7GpexEe6/view?usp=drive_link"}>
                    Resume
                  </ButtonBox>
                </div>
              </div>

            </div>
          </div>
          <div className="flex flex-col items-start mt-12 xs:mt-0 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-6 text-xs font-bold tracking-widest text-indigo-700 uppercase">
              About me
            </span>
            <h1 className="mb-4 text-xl font-bold leading-none tracking-tighter text-neutral-600 md:text-2xl lg:text-4xl">
              <span className="text-neutral-600">My name is</span> Vianey,
              <p className="text-xl mt-4 font-normal tracking-normal"> As a web developer, I thrive on transforming concepts into digital experiences through the power of code! </p>
            </h1>

            <p className="mb-6 text-base leading-relaxed text-left text-neutral-700">
              I&#39;m passionate about technology, creating great websites, and helping others in leveraging digital tools to achieve their goals.
            </p>
            <p className="mb-6 text-base leading-relaxed text-left text-neutral-700">
              I&#39;ve been fortunate to work for an international ship with people from more than 60 countries, getting tons of experience in how to collaborate on cross-cultural teams. I also have multimedia creation and problem-solving skills.
            </p>
            <p className="mb-6 text-base leading-relaxed text-left text-neutral-700">
              Currently, my main focus is collaborating with businesses and entrepreneurs, supporting them in incorporating digital solutions that help them grow, finding the most effective ways to communicate their value, and connecting them to the world through the internet.
            </p>

            <div className="w-full">
              <span className="mb-6 text-xs font-bold tracking-widest text-indigo-700 uppercase">
                Tech I&#39;ve been working with
              </span>
              <div className="grid gap-6 md:gap-1 grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 w-full mx-auto text-left">
                <div className="py-4 mt-4">
                  <ul className="marker:text-indigo-400 list-disc list-inside text-neutral-700/70">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>WordPress</li>
                  </ul>
                </div>
                <div className="py-4 mt-4">
                  <ul className="marker:text-indigo-400 list-disc list-inside text-neutral-700/70">
                    <li>Next</li>
                    <li>Gatsby</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>

                <div className="py-4 mt-4">
                  <ul className="marker:text-indigo-400 list-disc list-inside text-neutral-700/70">
                    <li>Node.js</li>
                    <li>Postgresql</li>
                    <li>Sql</li>
                    <li>Git/CLI</li>
                  </ul>
                </div>
                <div className="py-4 mt-4">
                  <ul className="marker:text-indigo-400 list-disc list-inside text-neutral-700/70">
                    Other tools
                    <li>Figma</li>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Ligthroom</li>
                    <li>Premiere</li>
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