import HeroSection from "@/components/Molecules/HeroSectoin";
import ServiceBanner from "@/components/Molecules/ServiceBanner";
import Applayout from "@/layout/AppLayout";

export default function Home() {
  return (
    <Applayout titleTag="Expert financial services for your small business - Ellietax ">
      <HeroSection />
      <ServiceBanner />
    </Applayout>
  );
}
