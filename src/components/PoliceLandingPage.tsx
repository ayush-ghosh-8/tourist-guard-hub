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
      <div className="bg-primary text-primary-foreground py-3 border-b">
        <div className="container mx-auto px-4 flex items-center">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-primary-foreground hover:bg-primary-foreground/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-semibold">Police Control Center</h1>
            <p className="text-sm text-primary-foreground/90">Government of India - Ministry of Tourism</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary/10 rounded flex items-center justify-center mx-auto mb-4">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Police Dashboard System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitoring and response system for tourist safety, scam prevention, 
            and incident management across jurisdictions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Card className="p-4 text-center border hover:shadow-sm transition-colors">
            <AlertTriangle className="w-6 h-6 text-warning mx-auto mb-2" />
            <h3 className="text-sm font-medium mb-1">SOS Monitoring</h3>
            <p className="text-xs text-muted-foreground">Real-time distress alerts</p>
          </Card>

          <Card className="p-4 text-center border hover:shadow-sm transition-colors">
            <MapPin className="w-6 h-6 text-destructive mx-auto mb-2" />
            <h3 className="text-sm font-medium mb-1">Hotspot Mapping</h3>
            <p className="text-xs text-muted-foreground">Risk area identification</p>
          </Card>

          <Card className="p-4 text-center border hover:shadow-sm transition-colors">
            <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
            <h3 className="text-sm font-medium mb-1">Case Management</h3>
            <p className="text-xs text-muted-foreground">Investigation tools</p>
          </Card>

          <Card className="p-4 text-center border hover:shadow-sm transition-colors">
            <Shield className="w-6 h-6 text-success mx-auto mb-2" />
            <h3 className="text-sm font-medium mb-1">Tourist Protection</h3>
            <p className="text-xs text-muted-foreground">Verification systems</p>
          </Card>
        </div>

        {/* Access Button */}
        <div className="text-center">
          <Card className="max-w-md mx-auto p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Access Dashboard</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Select State or Zonal dashboard based on your jurisdiction.
            </p>
            <Button 
              onClick={onAccessDashboards}
              className="w-full"
            >
              <Shield className="w-4 h-4 mr-2" />
              Access Police Dashboards
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PoliceLandingPage;