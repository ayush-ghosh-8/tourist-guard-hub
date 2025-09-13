import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, MapPin, AlertTriangle, Users, ArrowLeft } from "lucide-react";

interface PoliceLandingPageProps {
  onAccessDashboards: () => void;
  onBack: () => void;
}

const PoliceLandingPage = ({ onAccessDashboards, onBack }: PoliceLandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-police text-primary-foreground py-4 border-b shadow-sm">
        <div className="container mx-auto px-4 flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-primary-foreground hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold">Police Control Center</h1>
            <p className="text-sm text-primary-foreground/90">Government of India - Ministry of Tourism</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-police-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6 border border-police-blue/20">
            <Shield className="w-12 h-12 text-police-blue" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Police Dashboard System
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Centralized monitoring and response system for tourist safety, scam prevention, 
            and incident management across state and district jurisdictions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-2 hover:border-police-blue/30 transition-all duration-200">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="w-7 h-7 text-warning" />
            </div>
            <h3 className="font-semibold mb-2">SOS Monitoring</h3>
            <p className="text-sm text-muted-foreground">Real-time tourist distress alerts and emergency response</p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-police-blue/30 transition-all duration-200">
            <div className="w-12 h-12 bg-police-red/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-7 h-7 text-police-red" />
            </div>
            <h3 className="font-semibold mb-2">Hotspot Mapping</h3>
            <p className="text-sm text-muted-foreground">AI-powered risk area identification and analysis</p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-police-blue/30 transition-all duration-200">
            <div className="w-12 h-12 bg-police-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="w-7 h-7 text-police-blue" />
            </div>
            <h3 className="font-semibold mb-2">Case Management</h3>
            <p className="text-sm text-muted-foreground">Comprehensive investigation and case tracking tools</p>
          </Card>

          <Card className="p-6 text-center border-2 hover:border-police-blue/30 transition-all duration-200">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Shield className="w-7 h-7 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Tourist Protection</h3>
            <p className="text-sm text-muted-foreground">Verification systems and safety protocols</p>
          </Card>
        </div>

        {/* Access Button */}
        <div className="text-center">
          <Card className="max-w-lg mx-auto p-8 border-2 border-police-blue/20 shadow-lg">
            <div className="w-16 h-16 gradient-police rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Dashboard Access</h3>
            <p className="text-muted-foreground mb-6">
              Secure access to State Police and Zonal/District Police dashboards for authorized personnel only.
            </p>
            <Button 
              onClick={onAccessDashboards}
              size="lg"
              className="w-full font-semibold"
            >
              Access Police Dashboards
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PoliceLandingPage;