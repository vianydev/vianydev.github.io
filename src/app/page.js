import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import LastestProjects from "@/components/lastest-projects"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <LastestProjects />
      <ContactSection />
    </div>
  )
}
