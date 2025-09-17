import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Car, 
  UserCheck,
  QrCode,
  AlertTriangle
} from "lucide-react";
import { zonalAlerts, zonalTourists, zonalPatrolCars } from "@/data/mockData";

const ZonalSOSMonitoring = () => {
  const [selectedAlert, setSelectedAlert] = useState(zonalAlerts[0]);

  const handleDispatchPatrol = (alertId: number) => {
    // Mock dispatch functionality
    console.log(`Dispatching patrol for alert ${alertId}`);
  };

  const handleContactTourist = (touristId: string) => {
    // Mock contact functionality
    console.log(`Contacting tourist ${touristId}`);
  };

  const getTouristDetails = (touristId: string) => {
    return zonalTourists.find(t => t.id === touristId);
  };

  const getAvailablePatrols = () => {
    return zonalPatrolCars.filter(car => car.status === 'available' || car.status === 'patrolling').slice(0, 3);
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Live SOS Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Live District SOS Alerts
            </CardTitle>
            <CardDescription>
              Real-time emergency alerts and incidents in your district
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {zonalAlerts.map((alert) => (
                <Card 
                  key={alert.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedAlert.id === alert.id ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedAlert(alert)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={
                              alert.severity === 'urgent' ? 'destructive' :
                              alert.severity === 'high' ? 'default' : 'secondary'
                            }
                          >
                            {alert.severity}
                          </Badge>
                          <span className="font-medium text-sm">{alert.type}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{alert.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{alert.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        alert.status === 'active' ? 'bg-warning animate-pulse' : 'bg-success'
                      }`}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alert Details */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Details</CardTitle>
            <CardDescription>
              Detailed information and response options for selected alert
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {selectedAlert && (
              <>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Alert Information</h4>
                    <div className="bg-muted/50 p-3 rounded space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Type:</span>
                        <span className="text-sm font-medium">{selectedAlert.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Location:</span>
                        <span className="text-sm font-medium">{selectedAlert.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Time:</span>
                        <span className="text-sm font-medium">{selectedAlert.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Severity:</span>
                        <Badge variant={
                          selectedAlert.severity === 'urgent' ? 'destructive' :
                          selectedAlert.severity === 'high' ? 'default' : 'secondary'
                        }>
                          {selectedAlert.severity}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {selectedAlert.description && (
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-sm bg-muted/50 p-3 rounded">{selectedAlert.description}</p>
                    </div>
                  )}

                  {selectedAlert.touristId && getTouristDetails(selectedAlert.touristId) && (
                    <div>
                      <h4 className="font-semibold mb-2">Tourist Details</h4>
                      {(() => {
                        const tourist = getTouristDetails(selectedAlert.touristId);
                        return tourist ? (
                          <div className="bg-muted/50 p-3 rounded space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Name:</span>
                              <span className="text-sm font-medium">{tourist.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Nationality:</span>
                              <span className="text-sm font-medium">{tourist.nationality}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Contact:</span>
                              <span className="text-sm font-medium">{tourist.emergencyContact}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Risk Level:</span>
                              <Badge variant={
                                tourist.riskLevel === 'high' ? 'destructive' :
                                tourist.riskLevel === 'medium' ? 'default' : 'secondary'
                              }>
                                {tourist.riskLevel}
                              </Badge>
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Response Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      onClick={() => handleDispatchPatrol(selectedAlert.id)}
                      className="w-full"
                      size="sm"
                    >
                      <Car className="h-4 w-4 mr-2" />
                      Dispatch Patrol
                    </Button>
                    {selectedAlert.touristId && (
                      <Button 
                        variant="outline"
                        onClick={() => handleContactTourist(selectedAlert.touristId!)}
                        className="w-full"
                        size="sm"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Tourist
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Available Patrols Nearby</h4>
                  <div className="space-y-2">
                    {getAvailablePatrols().map((patrol) => (
                      <div key={patrol.car} className="flex items-center justify-between p-2 border rounded text-sm">
                        <div>
                          <p className="font-medium">{patrol.car}</p>
                          <p className="text-xs text-muted-foreground">{patrol.officer}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{patrol.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">ETA: {patrol.eta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Interactive Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Real-time District Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/20 rounded-lg p-8 text-center">
            <MapPin className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Interactive District Map</h3>
            <p className="text-muted-foreground mb-4">
              Real-time visualization of alert locations, patrol car positions, and tourist movements within your district jurisdiction.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <span>Active Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-police-blue rounded-full"></div>
                <span>Patrol Cars</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span>Tourist Locations</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZonalSOSMonitoring;