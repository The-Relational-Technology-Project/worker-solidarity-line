
import { MessageSquare, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-solidarity-cream via-white to-solidarity-cream py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 solidarity-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-solidarity-black mb-6 leading-tight">
              You Don't Have to Face Your 
              <span className="solidarity-text-gradient block">Boss Alone</span>
            </h1>
            <p className="text-xl md:text-2xl text-solidarity-gray-warm mb-8 max-w-3xl mx-auto">
              Anonymous peer support from fellow workers who understand exploitation, wage theft, 
              and workplace retaliation. We stand together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-solidarity-red hover:bg-solidarity-red-dark text-white px-8 py-4 text-lg font-semibold"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Anonymous Chat
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-solidarity-red text-solidarity-red hover:bg-solidarity-red hover:text-white px-8 py-4 text-lg font-semibold"
            >
              <Users className="mr-2 h-5 w-5" />
              Volunteer to Help
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 border-solidarity-red/20 hover:border-solidarity-red/40 transition-colors">
              <div className="w-12 h-12 bg-solidarity-red/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-solidarity-red" />
              </div>
              <h3 className="font-semibold text-solidarity-black mb-2">Anonymous Support</h3>
              <p className="text-sm text-solidarity-gray-warm">
                Fully encrypted chat with no employer access. Your identity stays protected.
              </p>
            </Card>

            <Card className="p-6 border-solidarity-red/20 hover:border-solidarity-red/40 transition-colors">
              <div className="w-12 h-12 bg-solidarity-red/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-solidarity-red" />
              </div>
              <h3 className="font-semibold text-solidarity-black mb-2">Worker-to-Worker</h3>
              <p className="text-sm text-solidarity-gray-warm">
                Peer support from fellow workers who've faced similar struggles and won.
              </p>
            </Card>

            <Card className="p-6 border-solidarity-red/20 hover:border-solidarity-red/40 transition-colors">
              <div className="w-12 h-12 bg-solidarity-red/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Handshake className="h-6 w-6 text-solidarity-red" />
              </div>
              <h3 className="font-semibold text-solidarity-black mb-2">Solidarity Is Care</h3>
              <p className="text-sm text-solidarity-gray-warm">
                We honor your anger, validate your struggle, and connect you with resources.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
