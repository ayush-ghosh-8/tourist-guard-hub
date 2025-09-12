import { useState } from "react";
import { 
  MapPin, 
  AlertTriangle, 
  Users, 
  Search, 
  BarChart3, 
  Activity,
  Bell,
  Globe,
  ArrowLeft,
  Car,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ZonalDashboardProps {
  onBack: () => void;
}

const ZonalDashboard = ({ onBack }: ZonalDashboardProps) => {
  const [activeModule, setActiveModule] = useState<string>('overview');

  const modules = [
    {
      id: 'incidents',
      name: 'Local Incident Feed',
      icon: AlertTriangle,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      count: '8 Active',
      description: 'District SOS alerts and patrol car assignment'
    },
    {
      id: 'tracking',
      name: 'Tourist Tracking',
      icon: MapPin,
      color: 'text-police-blue',
      bgColor: 'bg-police-blue/10',
      count: '156 Tracked',
      description: 'Geo-fencing and flagged tourist monitoring'
    },
    {
      id: 'investigation',
      name: 'Fraud Investigation',
      icon: Search,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      count: '23 Cases',
      description: 'Tourist lookup and merchant license verification'
    },
    {
      id: 'alerts',
      name: 'Community Alerts',
      icon: Bell,
      color: 'text-police-gold',
      bgColor: 'bg-police-gold/10',
      count: '12 Sent',
      description: 'Push scam awareness notifications to tourists'
    },
    {
      id: 'analytics',
      name: 'Performance Analytics',
      icon: BarChart3,
      color: 'text-success',
      bgColor: 'bg-success/10',
      count: '95.2%',
      description: 'Resolution times and scam reduction metrics'
    }
  ];

  const localIncidents = [
    { id: 1, type: 'SOS Alert', location: 'Sector 18 Market', tourist: 'John Smith (UK)', patrol: 'Car-07', status: 'responding', time: '3 min ago' },
    { id: 2, type: 'Scam Report', location: 'Railway Station', tourist: 'Maria Garcia (Spain)', patrol: 'Car-12', status: 'investigating', time: '18 min ago' },
    { id: 3, type: 'Geo-fence Alert', location: 'Old City Area', tourist: 'David Chen (China)', patrol: 'Car-03', status: 'monitoring', time: '45 min ago' },
    { id: 4, type: 'Merchant Alert', location: 'Shopping Complex', tourist: 'Sarah Johnson (USA)', patrol: 'Car-15', status: 'resolved', time: '2 hours ago' }
  ];

  const patrolStatus = [
    { car: 'Car-07', status: 'responding', location: 'Sector 18', officer: 'SI Sharma', eta: '3 min' },
    { car: 'Car-12', status: 'investigating', location: 'Railway Station', officer: 'HC Patel', eta: 'On site' },
    { car: 'Car-03', status: 'patrolling', location: 'Tourist Area', officer: 'Const. Kumar', eta: 'Available' },
    { car: 'Car-15', status: 'available', location: 'Police Station', officer: 'SI Singh', eta: 'Ready' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <div className="gradient-police text-primary-foreground py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="text-primary-foreground hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-police-gold" />
                <div>
                  <h1 className="text-xl font-bold">Zonal/District Dashboard</h1>
                  <p className="text-sm text-primary-foreground/80">District Operations Center</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-success text-success-foreground">
                <UserCheck className="h-3 w-3 mr-1" />
                4 Patrols Active
              </Badge>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                <Globe className="h-4 w-4 mr-2" />
                EN | हिं
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10 relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-warning text-warning-foreground text-xs">
                  8
                </Badge>
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
                <CardTitle className="text-lg">District Modules</CardTitle>
                <CardDescription>Local operations control</CardDescription>
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

            {/* Patrol Status */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Car className="h-5 w-5 mr-2 text-police-blue" />
                  Patrol Cars
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {patrolStatus.map((patrol) => (
                  <div key={patrol.car} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">{patrol.car}</p>
                      <p className="text-xs text-muted-foreground">{patrol.officer}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={
                          patrol.status === 'responding' ? 'destructive' :
                          patrol.status === 'investigating' ? 'default' :
                          patrol.status === 'patrolling' ? 'secondary' : 'outline'
                        }
                        className="text-xs mb-1"
                      >
                        {patrol.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{patrol.eta}</p>
                    </div>
                  </div>
                ))}
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

                {/* Live Incident Feed */}
                <Card>
                  <CardHeader>
                    <CardTitle>Live District Incidents</CardTitle>
                    <CardDescription>Real-time incident monitoring and patrol assignment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {localIncidents.map((incident) => (
                        <div key={incident.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              incident.status === 'responding' ? 'bg-destructive animate-pulse' :
                              incident.status === 'investigating' ? 'bg-warning' :
                              incident.status === 'monitoring' ? 'bg-police-blue' : 'bg-success'
                            }`}></div>
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <p className="font-medium text-sm">{incident.type}</p>
                                <Badge variant="outline" className="text-xs">{incident.location}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">Tourist: {incident.tourist}</p>
                              <p className="text-xs text-police-blue">Assigned: {incident.patrol}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={
                                incident.status === 'responding' ? 'destructive' :
                                incident.status === 'investigating' ? 'default' :
                                incident.status === 'monitoring' ? 'secondary' : 'outline'
                              }
                              className="text-xs mb-1"
                            >
                              {incident.status.toUpperCase()}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{incident.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Emergency Response</h3>
                      <p className="text-sm text-muted-foreground mb-4">Avg. response time: 4.2 min</p>
                      <Badge className="bg-success text-success-foreground">Excellent</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Users className="h-8 w-8 text-police-blue mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Tourist Safety</h3>
                      <p className="text-sm text-muted-foreground mb-4">156 tourists monitored</p>
                      <Badge variant="secondary">24/7 Active</Badge>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Case Resolution</h3>
                      <p className="text-sm text-muted-foreground mb-4">95.2% resolution rate</p>
                      <Badge className="bg-success text-success-foreground">Target Met</Badge>
                    </CardContent>
                  </Card>
                </div>
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
                    <h3 className="text-lg font-semibold mb-2">District Module Interface</h3>
                    <p className="max-w-md mx-auto">
                      This is a preview model. The full {modules.find(m => m.id === activeModule)?.name.toLowerCase()} 
                      interface with interactive maps, real-time geo-tracking, patrol car coordination, 
                      and detailed investigation tools will be implemented in the complete version.
                    </p>
                    <div className="mt-6 space-y-2">
                      <Badge variant="outline" className="mr-2">GPS Tracking</Badge>
                      <Badge variant="outline" className="mr-2">Live Updates</Badge>
                      <Badge variant="outline" className="mr-2">Patrol Coordination</Badge>
                      <Badge variant="outline">Analytics Dashboard</Badge>
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

export default ZonalDashboard;