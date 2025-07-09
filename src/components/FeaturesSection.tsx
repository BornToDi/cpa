import { Shield, Palette, BarChart3, Users, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Professional Video Hosting",
      description: "Upload and manage videos securely with high-speed, ad-free playbook.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Add your logo, player colors, and CTAs to match your brand identity.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Collaboration",
      description: "Track engagement and work with teams or clients securely.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed for creators, educators, and businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;