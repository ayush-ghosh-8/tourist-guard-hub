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
  ArrowLeft,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stateAlerts, stateCases, stateStats } from "@/data/mockData";
import SOSMonitoring from "@/components/modules/SOSMonitoring";
import CaseManagement from "@/components/modules/CaseManagement";
import TouristVerification from "@/components/modules/TouristVerification";
import HotspotMapping from "@/components/modules/HotspotMapping";

interface StateDashboardProps {
  onBack: () => void;
  onLogout: () => void;
}

const StateDashboard = ({ onBack, onLogout }: StateDashboardProps) => {
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
                  <Badge variant="destructive">{stateStats.activeCases}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SOS Alerts</span>
                  <Badge className="bg-warning text-warning-foreground">{stateStats.sosAlerts}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Officers On Duty</span>
                  <Badge className="bg-success text-success-foreground">{stateStats.officersOnDuty}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <Badge className="bg-police-blue text-white">{stateStats.responseTime}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Resolution Rate</span>
                  <Badge className="bg-success text-success-foreground">{stateStats.resolutionRate}</Badge>
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

                {/* Recent Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent State Alerts</CardTitle>
                    <CardDescription>Latest alerts and emergencies across the state</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stateAlerts.slice(0, 4).map((alert) => (
                        <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Active Cases */}
                <Card>
                  <CardHeader>
                    <CardTitle>Active Tourist Cases</CardTitle>
                    <CardDescription>Currently under investigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stateCases.filter(c => c.status !== 'resolved').map((case_) => (
                        <div key={case_.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <p className="font-medium text-sm">{case_.touristName}</p>
                              <Badge variant="outline" className="text-xs">{case_.nationality}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{case_.caseType} • {case_.location}</p>
                            <p className="text-xs text-police-blue">Officer: {case_.assignedOfficer}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={case_.status === 'investigating' ? 'default' : 'secondary'} className="text-xs">
                              {case_.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Module-specific content */}
            {activeModule === 'sos' && <SOSMonitoring />}
            {activeModule === 'cases' && <CaseManagement />}
            {activeModule === 'verification' && <TouristVerification />}
            {activeModule === 'hotspots' && <HotspotMapping />}
            {activeModule === 'coordination' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-success" />
                    <span>Coordination Panel</span>
                  </CardTitle>
                  <CardDescription>Inter-agency handover and officer assignment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="h-16 w-16 mx-auto text-success opacity-50 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Coordination Module</h3>
                    <p className="max-w-md mx-auto mb-6">
                      Real-time coordination with district police, tourism ministry, and other agencies for seamless case handovers.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2">Case Handover</Badge>
                      <Badge variant="outline" className="mr-2">Officer Assignment</Badge>
                      <Badge variant="outline" className="mr-2">Inter-agency Chat</Badge>
                      <Badge variant="outline">Resource Allocation</Badge>
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