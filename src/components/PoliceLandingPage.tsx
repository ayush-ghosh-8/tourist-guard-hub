import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, MapPin, AlertTriangle, Users, ArrowLeft } from "lucide-react";

interface PoliceLandingPageProps {
  onAccessDashboards: () => void;
  onBack: () => void;
}

const PoliceLandingPage = ({ onAccessDashboards, onBack }: PoliceLandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold">Police Control Center</h1>
            <p className="text-primary-foreground/80">Tourist Safety & Scam Prevention System</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">
            Police Dashboard System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive monitoring and response system for tourist safety, scam prevention, 
            and emergency incident management across state and zonal jurisdictions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">SOS Monitoring</h3>
            <p className="text-sm text-muted-foreground">Real-time tourist distress alerts</p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
            <MapPin className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Hotspot Mapping</h3>
            <p className="text-sm text-muted-foreground">Scam-prone area identification</p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Case Management</h3>
            <p className="text-sm text-muted-foreground">Fraud investigation tools</p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-primary/20 transition-colors">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Tourist Protection</h3>
            <p className="text-sm text-muted-foreground">Verification & tracking systems</p>
          </Card>
        </div>

        {/* Access Button */}
        <div className="text-center">
          <Card className="max-w-lg mx-auto p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Access?</h3>
            <p className="text-muted-foreground mb-6">
              Choose between State Police Dashboard or Zonal/District Dashboard based on your jurisdiction and responsibilities.
            </p>
            <Button 
              onClick={onAccessDashboards}
              size="lg"
              className="w-full text-lg py-6"
            >
              <Shield className="w-5 h-5 mr-2" />
              Access Police Dashboards
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PoliceLandingPage;