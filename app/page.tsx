import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Team } from "@/components/sections/Team"
import { SocialMedia } from "@/components/sections/SocialMedia"
import { Pricing } from "@/components/sections/Pricing"
import { Contact } from "@/components/sections/Contact"

export default function Page() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Team />
          <SocialMedia />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
  )
}