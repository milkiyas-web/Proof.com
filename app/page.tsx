import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import mesh from "./mesh.svg";
// import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import LogoTicker from "@/components/LogoTicker";
import { Testimonials } from "@/components/Testmonials";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/ui/timeline";
import { TimelineData } from "@/constants/data";
export default function Home() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-10 flex justify-center px-6 py-40 ">
        <div className="absolute inset-0 bg-[url('./grid.svg')] 
        opacity-25"></div>
        <Image
          src={mesh}
          alt="mesh"
          className="opacity-15 absolute bottom-1 h-[600px] z-10"
        />
        {/* <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20 opacity-10"></div> */}
      </div>
      <div className="relative z-30">
        <Navbar />
        <div className="container mx-auto">
          <Hero />
        </div>
        <>
          <LogoTicker />
          <Timeline data={TimelineData} />
          <Pricing />
          <section className="my-12 lg:my-24">
            <Testimonials />
          </section>
          <Footer />
        </>
      </div>

    </>
  );
}
