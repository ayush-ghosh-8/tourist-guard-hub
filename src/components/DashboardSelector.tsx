import { Shield, MapPin, AlertTriangle, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardSelectorProps {
  onSelect: (type: 'state' | 'zonal') => void;
  onBack?: () => void;
}

const DashboardSelector = ({ onSelect, onBack }: DashboardSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-muted/40">
      {/* Header */}
      <div className="gradient-police text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 relative">
            {onBack && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack} 
                className="absolute left-0 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <div className="relative">
              <Shield className="h-16 w-16 text-police-gold animate-pulse-slow" />
              <div className="absolute inset-0 bg-police-gold/20 rounded-full blur animate-pulse"></div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                Tourist Safety & Security Dashboard
              </h1>
              <p className="text-lg text-primary-foreground/90 mt-2">
                Government of India | Ministry of Tourism & Police Coordination
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Selection */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Select Dashboard Type
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your operational level to access the appropriate monitoring and management tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* State Police Dashboard */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-police-blue/30 official-badge cursor-pointer">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-4 bg-gradient-police rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-police-blue">State Police Dashboard</CardTitle>
              <CardDescription className="text-base">
                Central command for state-wide tourist safety operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Live SOS Monitoring & Response</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Users className="h-5 w-5 text-success" />
                  <span>Scam/Fraud Case Management</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-police-blue" />
                  <span>Tourist Verification & Hotspot Mapping</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-police-gold" />
                  <span>Inter-agency Coordination Panel</span>
                </div>
              </div>
              <Button 
                onClick={() => onSelect('state')}
                className="w-full bg-police-blue hover:bg-police-blue-dark text-primary-foreground font-semibold py-3 official-badge"
              >
                Access State Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Zonal/District Dashboard */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-police-gold/30 official-badge cursor-pointer">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-4 bg-gradient-gold rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-12 w-12 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl text-police-gold">Zonal/District Dashboard</CardTitle>
              <CardDescription className="text-base">
                Local operations center for district-level incident management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Local Incident Feed & Response</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5 text-police-blue" />
                  <span>Tourist Tracking & Geo-fencing</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Users className="h-5 w-5 text-success" />
                  <span>Fraud Investigation Tools</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-police-gold" />
                  <span>Community Alerts & Analytics</span>
                </div>
              </div>
              <Button 
                onClick={() => onSelect('zonal')}
                className="w-full bg-police-gold hover:bg-police-gold-light text-accent-foreground font-semibold py-3 official-badge"
              >
                Access Zonal Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            🔒 Secure Access • Real-time Data Sync • Multi-language Support • AI-Powered Insights
          </p>
          <div className="flex justify-center items-center space-x-6 mt-4 text-xs text-muted-foreground">
            <span>24/7 Tourist Helpline: 1800-11-1363</span>
            <span>•</span>
            <span>Emergency Response: 112</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelector;