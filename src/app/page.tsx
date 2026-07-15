import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Process } from "@/components/process";
import { Showcase } from "@/components/showcase";
import { Studio } from "@/components/studio";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="w-full flex-1">
        <Hero />
        <Marquee />
        <Showcase />
        <Capabilities />
        <Studio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
