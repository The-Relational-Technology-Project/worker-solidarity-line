
import SolidarityHeader from "@/components/SolidarityHeader";
import HeroSection from "@/components/HeroSection";
import SupportAreas from "@/components/SupportAreas";
import VolunteerSection from "@/components/VolunteerSection";
import SolidarityFooter from "@/components/SolidarityFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SolidarityHeader />
      <HeroSection />
      <SupportAreas />
      <VolunteerSection />
      <SolidarityFooter />
    </div>
  );
};

export default Index;
