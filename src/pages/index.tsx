import AccountingSection from "@/components/Molecules/AccountingSection";
import CreditRepair from "@/components/Molecules/CreditRepair";
import EllieDescription from "@/components/Molecules/EllieDescription";
import HeroSection from "@/components/Molecules/HeroSectoin";
import ServiceBanner from "@/components/Molecules/ServiceBanner";
import TaxSection from "@/components/Molecules/TaxSection";
import Applayout from "@/layout/AppLayout";

export default function Home() {
  return (
    <Applayout titleTag="Expert financial services for your small business - Ellietax ">
      <HeroSection />
      <ServiceBanner />
      <EllieDescription />
      <AccountingSection />
      <TaxSection />
      <CreditRepair/>
    </Applayout>
  );
}
