
import { Users, MessageSquare, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VolunteerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-solidarity-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-solidarity-black mb-4">
              Join the Solidarity Network
            </h2>
            <p className="text-lg text-solidarity-gray-warm max-w-2xl mx-auto">
              Worker solidarity means we support each other. Train as a peer counselor 
              and help fellow workers navigate workplace exploitation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-solidarity-red/20">
              <div className="w-16 h-16 bg-solidarity-red/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-solidarity-red" />
              </div>
              <h3 className="text-2xl font-bold text-solidarity-black mb-4">
                Become a Peer Counselor
              </h3>
              <p className="text-solidarity-gray-warm mb-6">
                Support fellow workers through our training program that combines trauma-informed 
                care with political education and worker rights knowledge.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Flexible 1-2 hour shifts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Comprehensive training provided</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Ongoing support and supervision</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Political education component</span>
                </div>
              </div>
              <Button className="w-full bg-solidarity-red hover:bg-solidarity-red-dark text-white">
                Apply to Volunteer
              </Button>
            </Card>

            <Card className="p-8 bg-white border-solidarity-red/20">
              <div className="w-16 h-16 bg-solidarity-red/10 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-solidarity-red" />
              </div>
              <h3 className="text-2xl font-bold text-solidarity-black mb-4">
                Training Modules
              </h3>
              <p className="text-solidarity-gray-warm mb-6">
                Our training blends practical peer support skills with worker rights education 
                and labor organizing principles.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Trauma-informed peer support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Worker rights (NLRA, OSHA, wage theft)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Labor history and political education</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-solidarity-red rounded-full mr-3"></div>
                  <span className="text-sm">Anti-oppression practice</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-solidarity-red text-solidarity-red hover:bg-solidarity-red hover:text-white">
                View Training Content
              </Button>
            </Card>
          </div>

          <div className="bg-solidarity-red rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Horizontal Governance</h3>
            <p className="text-lg mb-6 opacity-90">
              This platform is operated by the DSA Worker Solidarity Committee with 
              participatory governance, transparent budgeting, and worker-led decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-solidarity-red hover:bg-solidarity-cream">
                Join Governance Assembly
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-solidarity-red">
                View Transparency Reports
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
