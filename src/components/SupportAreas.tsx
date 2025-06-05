
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupportAreas = () => {
  const supportAreas = [
    {
      title: "Wage Theft & Pay Issues",
      description: "Unpaid overtime, stolen tips, illegal deductions, misclassified as contractor",
      examples: ["Boss keeping tips", "No overtime pay", "Paycheck deductions", "Late paychecks"]
    },
    {
      title: "Workplace Retaliation", 
      description: "Punishment for speaking up about rights, safety, or organizing",
      examples: ["Cut hours after complaint", "Sudden schedule changes", "Hostile work environment", "Threats of firing"]
    },
    {
      title: "Safety & Health Violations",
      description: "Unsafe working conditions, lack of protective equipment, health hazards",
      examples: ["No safety equipment", "Dangerous machinery", "Chemical exposure", "COVID-19 concerns"]
    },
    {
      title: "Discrimination & Harassment",
      description: "Unfair treatment based on identity, sexual harassment, hostile environment",
      examples: ["Racial discrimination", "Gender pay gaps", "Sexual harassment", "Disability discrimination"]
    },
    {
      title: "Union Busting & Organizing",
      description: "Illegal anti-union tactics, organizing support, know your rights",
      examples: ["Threats about unionizing", "Captive audience meetings", "Surveillance", "Firing organizers"]
    },
    {
      title: "Gig Work & Misclassification",
      description: "App-based work issues, contractor vs employee rights, platform deactivation",
      examples: ["Deactivated without cause", "Rate cuts", "No benefits", "Equipment costs"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-solidarity-black mb-4">
              We Stand With Workers Facing
            </h2>
            <p className="text-lg text-solidarity-gray-warm max-w-2xl mx-auto">
              Our trained peer counselors understand these struggles because we've lived them. 
              You deserve support, dignity, and justice at work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {supportAreas.map((area, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-solidarity-red hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-solidarity-black mb-3 text-lg">
                  {area.title}
                </h3>
                <p className="text-solidarity-gray-warm mb-4 text-sm">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.examples.map((example, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-solidarity-red rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-solidarity-gray-warm">{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-solidarity-cream rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-solidarity-black mb-4">
                "Comrade — you've reached the DSA Solidarity Line. We're fellow workers here to listen, support, and stand with you. What's going on at work today?"
              </h3>
              <p className="text-solidarity-gray-warm mb-6">
                This is how every conversation starts. No judgment. No HR speak. Just worker-to-worker solidarity.
              </p>
              <Button className="bg-solidarity-red hover:bg-solidarity-red-dark text-white px-8 py-3">
                Start Your Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAreas;
