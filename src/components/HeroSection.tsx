import { Button } from "@/components/ui/button";
import { Play, Shield, Palette, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Next-Level Video Tools
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
            for Creators & Teams
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Host, manage, and share your videos with a platform designed for professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Try for Free
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-black hover:text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;