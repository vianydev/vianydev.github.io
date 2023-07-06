import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import LastestProjects from "@/components/lastest-projects"
import CtaContact from "@/components/cta-contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <LastestProjects />
      <CtaContact />
    </div>
  )
}
