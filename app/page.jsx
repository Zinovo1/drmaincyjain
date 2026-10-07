import About from "@/components/About/About";
import Appoinment from "@/components/Appoinment/Appoinment";
import ClinicLocation from "@/components/ClinicLocation/ClinicLocation";
import FAQ from "@/components/FAQ/FAQ";
import Gallery from "@/components/Gallery/Gallery";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import SectionWave from "@/components/SectionWave/SectionWave";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main id="main" className="tr-site">
      <HeroBanner />
      <SectionWave from="#faf7f4" to="#ffffff" />
      <About />
      <SectionWave from="#ffffff" to="#faf7f4" />
      <ServicesGrid />
      <SectionWave from="#faf7f4" to="#ffffff" />
      <HowItWorks />
      <SectionWave from="#ffffff" to="#faf7f4" />
      <Gallery />
      <SectionWave from="#faf7f4" to="#ffffff" />
      <Testimonial />
      <SectionWave from="#ffffff" to="#faf7f4" />
      <FAQ />
      <SectionWave from="#faf7f4" to="#ffffff" />
      <ClinicLocation />
      <SectionWave from="#ffffff" to="#faf7f4" />
      <Appoinment />
    </main>
  );
}
