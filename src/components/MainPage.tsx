import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface MainPageProps {
  onPoliceDashboardClick: () => void;
}

const MainPage = ({ onPoliceDashboardClick }: MainPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tourist Safety & Security System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Government of India - Ministry of Tourism Dashboard
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Police Dashboards Card */}
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer border border-border hover:border-primary/30"
            onClick={onPoliceDashboardClick}
          >
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Police Dashboards</h3>
              <p className="text-sm text-muted-foreground mb-4">
                State and zonal police control centers for tourist safety monitoring
              </p>
              <Button variant="default" size="sm" className="w-full">
                Access Dashboards
              </Button>
            </div>
          </Card>

          {/* Placeholder cards for other modules */}
          <Card className="p-6 opacity-60">
            <div className="text-center">
              <div className="w-14 h-14 bg-muted rounded flex items-center justify-center mx-auto mb-4">
                <div className="w-7 h-7 bg-muted-foreground/20 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">Ministry Dashboard</h3>
              <p className="text-sm text-muted-foreground/70">Coming Soon</p>
            </div>
          </Card>

          <Card className="p-6 opacity-60">
            <div className="text-center">
              <div className="w-14 h-14 bg-muted rounded flex items-center justify-center mx-auto mb-4">
                <div className="w-7 h-7 bg-muted-foreground/20 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">Immigration Dashboard</h3>
              <p className="text-sm text-muted-foreground/70">Coming Soon</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainPage;