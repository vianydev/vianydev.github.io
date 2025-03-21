import CardProject from "./card-project"
import ButtonPrimary from "./button-primary"
import {
  himnapp,
  algodon,
  temperamentos,
  losdaners,
} from "@/assets/portfolio-projects"

const LastestProjects = () => {
  return (
    <section className="bg-white mx-auto px-3 max-w-7xl md:px-20 lg:px-24 py-36">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-neutral-600 lg:text-4xl">
          Lastest projects
        </h1>
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
          urlImage={algodon.image}
          projectName={algodon.name}
          projectType={algodon.type}
          description={algodon.description}
          tags={algodon.tags}
          urlLive={algodon.urlLive}
          urlRepo={algodon.urlRepo}
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
      </div>
      <div className="mt-10 w-full flex">
        <ButtonPrimary link="/portfolio">show more</ButtonPrimary>
      </div>
    </section>
  )
}

export default LastestProjects