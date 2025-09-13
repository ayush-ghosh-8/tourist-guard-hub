import { useState } from "react";
import { 
  Shield, 
  AlertTriangle, 
  Users, 
  MapPin, 
  FileText, 
  QrCode,
  Activity,
  Bell,
  Globe,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StateDashboardProps {
  onBack: () => void;
}

const StateDashboard = ({ onBack }: StateDashboardProps) => {
  const [activeModule, setActiveModule] = useState<string>('overview');

  const modules = [
    {
      id: 'sos',
      name: 'Live SOS Monitoring',
      icon: AlertTriangle,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      count: '12 Active',
      description: 'Real-time tourist distress alerts and route tracking'
    },
    {
      id: 'cases',
      name: 'Scam/Fraud Cases',
      icon: FileText,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      count: '47 Open',
      description: 'Log complaints, upload evidence, track investigations'
    },
    {
      id: 'verification',
      name: 'Tourist Verification',
      icon: QrCode,
      color: 'text-police-blue',
      bgColor: 'bg-police-blue/10',
      count: '234 Today',
      description: 'QR scan verification and tourist detail lookup'
    },
    {
      id: 'hotspots',
      name: 'Hotspot Mapping',
      icon: MapPin,
      color: 'text-police-gold',
      bgColor: 'bg-police-gold/10',
      count: '8 Areas',
      description: 'Scam-prone areas with AI predictive heatmap'
    },
    {
      id: 'coordination',
      name: 'Coordination Panel',
      icon: Users,
      color: 'text-success',
      bgColor: 'bg-success/10',
      count: '23 Active',
      description: 'Inter-agency handover and officer assignment'
    }
  ];

  const recentAlerts = [
    { id: 1, type: 'SOS', location: 'Red Fort, Delhi', time: '2 min ago', severity: 'high' },
    { id: 2, type: 'Scam Report', location: 'Connaught Place', time: '15 min ago', severity: 'medium' },
    { id: 3, type: 'Tourist Verification', location: 'India Gate', time: '32 min ago', severity: 'low' },
    { id: 4, type: 'Hotspot Alert', location: 'Chandni Chowk', time: '1 hour ago', severity: 'medium' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar - Official Government Style */}
      <div className="gradient-police text-white py-4 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="text-white hover:bg-white/10 border border-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Selector
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-police-gold" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">State Police Control Center</h1>
                  <p className="text-sm opacity-90">Tourist Safety & Security Division</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Globe className="h-4 w-4 mr-2" />
                EN | हिं
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-warning text-warning-foreground rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Control Modules</CardTitle>
                <CardDescription>Select a module to manage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeModule === 'overview' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveModule('overview')}
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Overview
                </Button>
                {modules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <Button
                      key={module.id}
                      variant={activeModule === module.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveModule(module.id)}
                    >
                      <Icon className={`h-4 w-4 mr-2 ${module.color}`} />
                      {module.name}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Cases</span>
                  <Badge variant="destructive">47</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SOS Alerts</span>
                  <Badge className="bg-warning text-warning-foreground">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Officers On Duty</span>
                  <Badge className="bg-success text-success-foreground">156</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tourist Verifications</span>
                  <Badge variant="secondary">234</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeModule === 'overview' && (
              <div className="space-y-6">
                {/* Module Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modules.map((module) => {
                    const Icon = module.icon;
                    return (
                      <Card 
                        key={module.id} 
                        className="cursor-pointer hover:shadow-lg transition-all duration-200 official-badge"
                        onClick={() => setActiveModule(module.id)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className={`p-2 rounded-lg ${module.bgColor}`}>
                              <Icon className={`h-6 w-6 ${module.color}`} />
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {module.count}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{module.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {module.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest alerts and activities across the state</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentAlerts.map((alert) => (
                        <div key={alert.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              alert.severity === 'high' ? 'bg-destructive animate-pulse' :
                              alert.severity === 'medium' ? 'bg-warning' : 'bg-success'
                            }`}></div>
                            <div>
                              <p className="font-medium text-sm">{alert.type}</p>
                              <p className="text-xs text-muted-foreground">{alert.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">{alert.time}</p>
                            <Badge 
                              variant={alert.severity === 'high' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {alert.severity.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Module-specific content would go here */}
            {activeModule !== 'overview' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {(() => {
                      const module = modules.find(m => m.id === activeModule);
                      if (module) {
                        const Icon = module.icon;
                        return (
                          <>
                            <Icon className={`h-6 w-6 ${module.color}`} />
                            <span>{module.name}</span>
                          </>
                        );
                      }
                      return null;
                    })()}
                  </CardTitle>
                  <CardDescription>
                    {modules.find(m => m.id === activeModule)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="mb-4">
                      {(() => {
                        const module = modules.find(m => m.id === activeModule);
                        if (module) {
                          const Icon = module.icon;
                          return <Icon className={`h-16 w-16 mx-auto ${module.color} opacity-50`} />;
                        }
                        return null;
                      })()}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Module Interface</h3>
                    <p className="max-w-md mx-auto">
                      This is a preview model. The full {modules.find(m => m.id === activeModule)?.name.toLowerCase()} 
                      interface with real-time data, interactive maps, and detailed forms will be implemented 
                      in the complete version.
                    </p>
                    <div className="mt-6 space-y-2">
                      <Badge variant="outline" className="mr-2">Real-time Updates</Badge>
                      <Badge variant="outline" className="mr-2">Interactive Maps</Badge>
                      <Badge variant="outline" className="mr-2">Data Export</Badge>
                      <Badge variant="outline">Multi-language</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDashboard;