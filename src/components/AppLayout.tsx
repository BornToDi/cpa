import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TargetAudienceSection from "./TargetAudienceSection";


const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TargetAudienceSection />

    </div>
  );
};

export default AppLayout;