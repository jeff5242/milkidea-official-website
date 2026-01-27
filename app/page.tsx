import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

import { GolfriendFeature } from "@/components/golfriend-feature"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Portfolio />
      <GolfriendFeature />
      <Contact />
      <Footer />
    </main>
  )
}
