import CardTextR from "@/components/card-text-r"
import CardTextL from "@/components/card-text-l"

import {
  himnapp,
  swmonse,
  pieb,
  temperamentos
} from "@/assets/portfolio-projects"

export default function Portfolio() {

  return (
    <section className="bg-white mx-auto px-3 max-w-7xl md:px-20 lg:px-24 py-36">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-neutral-600 lg:text-6xl">Portfolio</h1>
        {/* <p className="mt-4 text-center text-neutral-600/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p> */}
      </div>

      <CardTextR
        urlImage={himnapp.image}
        projectName={himnapp.name}
        projectType={himnapp.type}
        description={himnapp.description}
        tags={himnapp.tags}
        urlLive={himnapp.urlLive}
        urlRepo={himnapp.urlRepo}
      />
      <CardTextL
        urlImage={swmonse.image}
        projectName={swmonse.name}
        projectType={swmonse.type}
        description={swmonse.description}
        tags={swmonse.tags}
        urlLive={swmonse.urlLive}
        urlRepo={swmonse.urlRepo}
      />

      <CardTextR
        urlImage={pieb.image}
        projectName={pieb.name}
        projectType={pieb.type}
        description={pieb.description}
        tags={pieb.tags}
        urlLive={pieb.urlLive}
        urlRepo={pieb.urlRepo}
      />
      <CardTextL
        urlImage={temperamentos.image}
        projectName={temperamentos.name}
        projectType={temperamentos.type}
        description={temperamentos.description}
        tags={temperamentos.tags}
        urlLive={temperamentos.urlLive}
        urlRepo={temperamentos.urlRepo}
      />

      <div className="my-10 border-b border-gray-200"></div>


    </section>
  )
}
