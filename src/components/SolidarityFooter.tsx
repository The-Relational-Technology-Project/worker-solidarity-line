
import { MessageSquare, Users, Handshake } from "lucide-react";

const SolidarityFooter = () => {
  return (
    <footer className="bg-solidarity-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 solidarity-gradient rounded-lg flex items-center justify-center">
                <Handshake className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">DSA Solidarity Line</h3>
                <p className="text-sm text-gray-300">By Workers, For Workers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Anonymous peer support for workers facing exploitation, wage theft, 
              retaliation, and workplace organizing challenges. We stand together.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-solidarity-red rounded flex items-center justify-center">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-solidarity-red rounded flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Anonymous Chat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SMS Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Referrals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Worker Rights Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wage Theft Toolkit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Organizing Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strike Fund</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <p>Operated by DSA Worker Solidarity Committee</p>
              <p>Fully encrypted • Zero-knowledge storage • Worker-owned technology</p>
            </div>
            <div className="text-sm text-gray-300">
              <p>Solidarity is care. We stand together.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolidarityFooter;
