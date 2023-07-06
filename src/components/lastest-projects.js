import CardProject from "./card-project"
import PrimaryButton from "./primary-button"
import {
  himnapp,
  construin,
  temperamentos
} from "@/assets/portfolio-projects"

const LastestProjects = () => {
  return (
    <section className="bg-white mx-auto px-3 max-w-7xl md:px-20 lg:px-24 py-36">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-neutral-600 lg:text-4xl">
          Lastest projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 xl:gap-6 md:grid-cols-3">

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
          urlImage={construin.image}
          projectName={construin.name}
          projectType={construin.type}
          description={construin.description}
          tags={construin.tags}
          urlLive={construin.urlLive}
          urlRepo={construin.urlRepo}
        />
        <CardProject
          urlImage={temperamentos.image}
          projectName={temperamentos.name}
          projectType={temperamentos.type}
          description={temperamentos.description}
          tags={temperamentos.tags}
          urlLive={temperamentos.urlLive}
          urlRepo={temperamentos.urlRepo}
        />
      </div>
      <div className="mt-10 w-full flex">
        <PrimaryButton link="/portfolio">Portfolio</PrimaryButton>
      </div>
    </section>
  )
}

export default LastestProjects