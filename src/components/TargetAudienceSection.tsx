import { GraduationCap, Briefcase, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Educators",
      description: "Create engaging courses and educational content",
      color: "text-blue-500"
    },
    {
      icon: Briefcase,
      title: "Businesses",
      description: "Professional video solutions for your company",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Creators",
      description: "Build and grow your creative community",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Designed for Creators, Educators, and Businesses
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're building courses, launching a product, or growing a community, 
            this platform gives you everything you need to deliver stunning video experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <Icon className={`h-16 w-16 mx-auto ${audience.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {audience.title}
                </h3>
                <p className="text-gray-600">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
         <a 
  href="https://redrection.pro/a/rkZ4Bi22y8HzX1r" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
  >
    <Rocket className="mr-2 h-5 w-5" />
    Get Started Today
  </Button>
</a>

        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;