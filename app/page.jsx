import About from "@/components/About/About";
import Appoinment from "@/components/Appoinment/Appoinment";
import ClinicLocation from "@/components/ClinicLocation/ClinicLocation";
import FAQ from "@/components/FAQ/FAQ";
import Gallery from "@/components/Gallery/Gallery";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import JsonLd from "@/components/Seo/JsonLd";
import SectionWave from "@/components/SectionWave/SectionWave";
import SeoLocalSummary from "@/components/Seo/SeoLocalSummary";
import ServicesGrid from "@/components/ServicesGrid/ServicesGrid";
import Testimonial from "@/components/Testimonial/Testimonial";
import { buildServicesItemListJsonLd } from "@/lib/jsonLd";

export default function Home() {
  return (
    <main id="main" className="tr-site">
      <JsonLd data={buildServicesItemListJsonLd()} />
      <HeroBanner />
      <SectionWave from="#fff5fb" to="#ffffff" />
      <About />
      <SectionWave from="#ffffff" to="#fff5fb" />
      <ServicesGrid />
      <SectionWave from="#fff5fb" to="#ffffff" />
      <HowItWorks />
      <SectionWave from="#ffffff" to="#fff5fb" />
      <Gallery />
      <SectionWave from="#fff5fb" to="#ffffff" />
      <Testimonial />
      <SectionWave from="#ffffff" to="#fff5fb" />
      <FAQ />
      <SectionWave from="#fff5fb" to="#ffffff" />
      <ClinicLocation />
      <SectionWave from="#ffffff" to="#fff5fb" />
      <SeoLocalSummary />
      <Appoinment />
    </main>
  );
}
