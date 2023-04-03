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
import Applayout from "@/layout/AppLayout";

export default function Home() {
  return (
    <Applayout titleTag="Expert financial services for your small business - Ellietax ">
      <Section styles={{ background: "#F9F9F9" }}>
        <HeroSection />
        <ServiceBanner />
        <EllieDescription />
        <AccountingSection />
        <TaxSection />
        <CreditRepair />
        <CustomerSupport />
        <Contact />
        <Footer />
      </Section>
    </Applayout>
  );
}
