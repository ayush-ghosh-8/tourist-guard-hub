import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface MainPageProps {
  onPoliceDashboardClick: () => void;
}

const MainPage = ({ onPoliceDashboardClick }: MainPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Tourist Safety & Security
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dashboard system for tourist protection and scam prevention
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Police Dashboards Card */}
          <Card 
            className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5"
            onClick={onPoliceDashboardClick}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Police Dashboards</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Access state and zonal police control centers for tourist safety monitoring and incident management
              </p>
              <Button variant="default" className="w-full">
                Access Dashboards
              </Button>
            </div>
          </Card>

          {/* Placeholder cards for other modules */}
          <Card className="p-8 opacity-50 bg-gradient-to-br from-card to-secondary/5">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-secondary/20 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-3">Ministry Dashboard</h3>
              <p className="text-muted-foreground/70 text-sm">Coming Soon</p>
            </div>
          </Card>

          <Card className="p-8 opacity-50 bg-gradient-to-br from-card to-accent/5">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent/20 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-3">Immigration Dashboard</h3>
              <p className="text-muted-foreground/70 text-sm">Coming Soon</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainPage;