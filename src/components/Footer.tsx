import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Video Platform Pro
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Professional video hosting and management platform designed for creators, educators, and businesses.
            </p>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-sm text-gray-400 space-y-4">
            <p className="leading-relaxed">
              This page is independently created by a marketing partner to promote a video hosting platform. 
              We do not represent the original brand and do not use brand trademarks directly. 
              This site does not contain incentives or misused terms.
            </p>
            <p className="text-xs">
              © 2024 Video Platform Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;