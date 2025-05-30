import CardProject from "@/components/card-project";

import {
  himnapp,
  swmonse,
  pieb,
  temperamentos,
  himnappweb,
  algodon,
  sucval,
  losdaners,
  localespalmitas
} from "@/assets/portfolio-projects"
import ButtonSecondary from "@/components/button-secondary"

export default function Portfolio() {

  return (
    <section className="bg-white mx-auto px-3 max-w-7xl md:px-20 lg:px-24 py-36">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-neutral-600 lg:text-4xl">Portfolio</h1>
        {/* <p className="mt-4 text-center text-neutral-600/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p> */}
      </div>

      <div className="grid grid-cols-1 gap-2 mt-8 xl:mt-12 xl:gap-6 md:grid-cols-2 lg:grid-cols-3">

        <CardProject
          urlImage={himnapp.image}
          projectName={himnapp.name}
          projectType={himnapp.type}
          description={himnapp.description}
          tags={himnapp.tags}
          urlLive={himnapp.urlLive}
          urlRepo={himnapp.urlRepo}
        />
        <CardProject
          urlImage={swmonse.image}
          projectName={swmonse.name}
          projectType={swmonse.type}
          description={swmonse.description}
          tags={swmonse.tags}
          urlLive={swmonse.urlLive}
          urlRepo={swmonse.urlRepo}
        />
        {/* <CardProject
          urlImage={pieb.image}
          projectName={pieb.name}
          projectType={pieb.type}
          description={pieb.description}
          tags={pieb.tags}
          urlLive={pieb.urlLive}
          urlRepo={pieb.urlRepo}
        /> */}
        <CardProject
          urlImage={temperamentos.image}
          projectName={temperamentos.name}
          projectType={temperamentos.type}
          description={temperamentos.description}
          tags={temperamentos.tags}
          urlLive={temperamentos.urlLive}
          urlRepo={temperamentos.urlRepo}
        />
        <CardProject
          urlImage={algodon.image}
          projectName={algodon.name}
          projectType={algodon.type}
          description={algodon.description}
          tags={algodon.tags}
          urlLive={algodon.urlLive}
          urlRepo={algodon.urlRepo}
        />
        <CardProject
          urlImage={sucval.image}
          projectName={sucval.name}
          projectType={sucval.type}
          description={sucval.description}
          tags={sucval.tags}
          urlLive={sucval.urlLive}
          urlRepo={sucval.urlRepo}
        />
        <CardProject
          urlImage={losdaners.image}
          projectName={losdaners.name}
          projectType={losdaners.type}
          description={losdaners.description}
          tags={losdaners.tags}
          urlLive={losdaners.urlLive}
          urlRepo={losdaners.urlRepo}
        />
        <CardProject
          urlImage={localespalmitas.image}
          projectName={localespalmitas.name}
          projectType={localespalmitas.type}
          description={localespalmitas.description}
          tags={localespalmitas.tags}
          urlLive={localespalmitas.urlLive}
          urlRepo={localespalmitas.urlRepo}
        />
        {/* <CardProject
          urlImage={himnappweb.image}
          projectName={himnappweb.name}
          projectType={himnappweb.type}
          description={himnappweb.description}
          tags={himnappweb.tags}
          urlLive={himnappweb.urlLive}
          urlRepo={himnappweb.urlRepo}
        /> */}
        
      </div>


      <div className="my-10 border-b border-gray-200"></div>

      <ButtonSecondary link="/">Back Home</ButtonSecondary>


    </section>
  )
}
