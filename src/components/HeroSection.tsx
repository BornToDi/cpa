import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import backgroundImage from "@/components/img/Background.png";
import backgroundImageMobile from "@/components/img/mobile.jpg";

const HeroSection = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background image for desktop & tablet */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Background image for mobile */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageMobile})` }}
      />

      {/* Black shadow overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Next-Level Video Tools
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
            for Creators & Teams
          </h2>
          <p className="text-base sm:text-lg md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Host, manage, and share your videos with a platform designed for professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="https://redrection.pro/a/rkZ4Bi22y8HzX1r" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Try for Free
              </Button>
            </a>

            <a href="https://redrection.pro/a/rkZ4Bi22y8HzX1r" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white/30 text-black hover:text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                Watch Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;