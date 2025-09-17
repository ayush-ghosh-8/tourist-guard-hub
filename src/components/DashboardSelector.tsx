import { Shield, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardSelectorProps {
  onBack: () => void;
  onSelectDashboard: (type: 'state' | 'zonal') => void;
}

const DashboardSelector = ({ onBack, onSelectDashboard }: DashboardSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Landing
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Select Dashboard Type
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the appropriate dashboard based on your operational jurisdiction and access level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* State Dashboard */}
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 official-badge"
              onClick={() => onSelectDashboard('state')}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  State Police Dashboard
                </CardTitle>
                <CardDescription className="text-base">
                  Comprehensive state-wide operations center for senior officials
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• State-wide SOS monitoring and coordination</li>
                    <li>• Tourist case management and tracking</li>
                    <li>• Advanced hotspot mapping and analytics</li>
                    <li>• QR-based tourist verification system</li>
                    <li>• Multi-district performance oversight</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" size="lg">
                    Access State Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Zonal Dashboard */}
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 official-badge"
              onClick={() => onSelectDashboard('zonal')}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary">
                  District/Zonal Dashboard
                </CardTitle>
                <CardDescription className="text-base">
                  Local operations center for district-level officers
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• District-specific incident management</li>
                    <li>• Real-time patrol car coordination</li>
                    <li>• Local tourist tracking and alerts</li>
                    <li>• QR verification and fraud investigation</li>
                    <li>• Community safety notifications</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90" 
                    size="lg"
                  >
                    Access District Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-warning/10 text-warning-foreground px-4 py-2 rounded-lg border border-warning/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                Secure authentication required for dashboard access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelector;