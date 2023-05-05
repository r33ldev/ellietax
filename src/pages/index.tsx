import AccountingSection from "@/components/Molecules/AccountingSection";
import Contact from "@/components/Molecules/Contact";
import CreditRepair from "@/components/Molecules/CreditRepair";
import CustomerSupport from "@/components/Molecules/CustomerSupport";
import EllieDescription from "@/components/Molecules/EllieDescription";
import Footer from "@/components/Molecules/Footer";
import HeroSection from "@/components/Molecules/HeroSectoin";
import ServiceBanner from "@/components/Molecules/ServiceBanner";
import TaxSection from "@/components/Molecules/TaxSection";
import Section from "@/components/Section";
import { useScreenResolution } from "@/hooks/useScreenResolution";
import Applayout from "@/layout/AppLayout";

export default function Home() {
  const {isMobile} = useScreenResolution()
  return (
    <Applayout titleTag="Expert financial services for your small business - Ellietax ">
      <Section styles={{ background: "#F9F9F9" }}>
        <HeroSection />
        <ServiceBanner />
        <EllieDescription />
        <p id={"accounting-service"} style={{ paddingTop: '.6rem' }} />
        <AccountingSection />
        <p id={"tax-service"} style={{ paddingTop: isMobile?'2rem': '0' }} />
        <TaxSection />
        <p id={"credit-repair"} />
        <CreditRepair />
        <CustomerSupport />
        <Contact />
        <Footer />
      </Section>
    </Applayout>
  );
}
