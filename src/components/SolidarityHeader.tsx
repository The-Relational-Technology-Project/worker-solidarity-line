
import { MessageSquare, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolidarityHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 solidarity-gradient rounded-lg flex items-center justify-center">
              <Handshake className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-solidarity-black">
                DSA Solidarity Line
              </h1>
              <p className="text-sm text-solidarity-gray-warm">
                By Workers, For Workers
              </p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" className="text-solidarity-black hover:bg-solidarity-cream">
              Support Chat
            </Button>
            <Button variant="ghost" className="text-solidarity-black hover:bg-solidarity-cream">
              Volunteer
            </Button>
            <Button variant="ghost" className="text-solidarity-black hover:bg-solidarity-cream">
              Resources
            </Button>
            <Button variant="ghost" className="text-solidarity-black hover:bg-solidarity-cream">
              Training
            </Button>
            <Button variant="ghost" asChild className="text-solidarity-black hover:bg-solidarity-cream">
              <Link to="/admin">Admin</Link>
            </Button>
          </nav>

          <Button className="bg-solidarity-red hover:bg-solidarity-red-dark text-white hidden md:block">
            Get Support Now
          </Button>

          <Button className="md:hidden bg-solidarity-red hover:bg-solidarity-red-dark text-white">
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SolidarityHeader;
