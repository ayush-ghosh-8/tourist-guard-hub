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
  UserCheck,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { districtIncidents, patrolCars, districtStats } from "@/data/mockData";

interface ZonalDashboardProps {
  onBack: () => void;
  onLogout: () => void;
}

const ZonalDashboard = ({ onBack, onLogout }: ZonalDashboardProps) => {
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
                  <MapPin className="h-6 w-6 text-police-gold" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">District Police Control Center</h1>
                  <p className="text-sm opacity-90">Local Operations Division</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="px-3 py-1 bg-success/20 rounded-full border border-success/30">
                <UserCheck className="h-4 w-4 inline mr-1 text-success" />
                <span className="text-sm text-success font-medium">{districtStats.patrolCarsActive} Patrols Active</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Globe className="h-4 w-4 mr-2" />
                EN | हिं
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 relative">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-warning text-warning-foreground rounded-full text-xs flex items-center justify-center">
                  8
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="text-white border-white/20 hover:bg-white/10"
              >
                Logout
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
                {patrolCars.map((patrol) => (
                  <div key={patrol.car} className="flex items-center justify-between text-sm p-2 border rounded">
                    <div>
                      <p className="font-medium">{patrol.car}</p>
                      <p className="text-xs text-muted-foreground">{patrol.officer}</p>
                      <p className="text-xs text-police-blue">{patrol.location}</p>
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
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {patrol.eta}
                      </p>
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
                    <CardDescription>Real-time incident monitoring and patrol coordination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {districtIncidents.map((incident) => (
                        <div key={incident.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/20 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
                              incident.status === 'responding' ? 'bg-destructive animate-pulse' :
                              incident.status === 'investigating' ? 'bg-warning' :
                              incident.status === 'monitoring' ? 'bg-police-blue' : 'bg-success'
                            }`}></div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <p className="font-medium text-sm">{incident.type}</p>
                                <Badge variant="outline" className="text-xs">{incident.location}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{incident.tourist}</p>
                              <div className="flex items-center space-x-2">
                                <p className="text-xs text-police-blue">{incident.patrol}</p>
                                <Badge 
                                  variant={incident.priority === 'urgent' ? 'destructive' : 'secondary'}
                                  className="text-xs"
                                >
                                  {incident.priority}
                                </Badge>
                              </div>
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
                              {incident.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{incident.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="text-center border-l-4 border-l-warning">
                    <CardContent className="pt-4">
                      <AlertTriangle className="h-6 w-6 text-warning mx-auto mb-2" />
                      <div className="text-2xl font-bold text-warning">{districtStats.activeIncidents}</div>
                      <p className="text-sm text-muted-foreground">Active Incidents</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-l-4 border-l-police-blue">
                    <CardContent className="pt-4">
                      <Users className="h-6 w-6 text-police-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-police-blue">{districtStats.touristsTracked}</div>
                      <p className="text-sm text-muted-foreground">Tourists Tracked</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-l-4 border-l-success">
                    <CardContent className="pt-4">
                      <BarChart3 className="h-6 w-6 text-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-success">{districtStats.performanceScore}</div>
                      <p className="text-sm text-muted-foreground">Resolution Rate</p>
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