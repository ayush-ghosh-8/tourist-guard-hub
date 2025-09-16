import { useState } from "react";
import { AlertTriangle, MapPin, Phone, Clock, User, Navigation } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stateAlerts, tourists, patrolCars } from "@/data/mockData";

const SOSMonitoring = () => {
  const [selectedAlert, setSelectedAlert] = useState(stateAlerts[0]);

  const handleDispatchPatrol = (alertId: number) => {
    console.log(`Dispatching patrol for alert ${alertId}`);
    // In real implementation, this would update the backend
  };

  const handleContactTourist = (touristId: string) => {
    console.log(`Contacting tourist ${touristId}`);
    // In real implementation, this would initiate a call
  };

  const getTouristDetails = (touristId: string) => {
    return tourists.find(t => t.id === touristId);
  };

  const getAvailablePatrols = () => {
    return patrolCars.filter(car => car.status === 'available' || car.status === 'patrolling');
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Live Alerts List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Live SOS Alerts</span>
            </CardTitle>
            <CardDescription>Real-time emergency alerts from tourists</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stateAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedAlert.id === alert.id ? 'bg-muted border-primary' : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedAlert(alert)}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          alert.severity === 'high' ? 'bg-destructive animate-pulse' :
                          alert.severity === 'medium' ? 'bg-warning' : 'bg-success'
                        }`}></div>
                        <p className="font-medium text-sm">{alert.type}</p>
                        <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {alert.location}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alert Details */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Details</CardTitle>
            <CardDescription>Detailed information and response options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Alert Type:</span>
                <Badge variant={selectedAlert.severity === 'high' ? 'destructive' : 'secondary'}>
                  {selectedAlert.type}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Location:</span>
                <span className="text-sm text-muted-foreground">{selectedAlert.location}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Time:</span>
                <span className="text-sm text-muted-foreground">{selectedAlert.time}</span>
              </div>

              {selectedAlert.description && (
                <div className="space-y-1">
                  <span className="text-sm font-medium">Description:</span>
                  <p className="text-sm text-muted-foreground">{selectedAlert.description}</p>
                </div>
              )}

              {selectedAlert.touristId && (
                <div className="space-y-2">
                  <span className="text-sm font-medium">Tourist Details:</span>
                  {(() => {
                    const tourist = getTouristDetails(selectedAlert.touristId);
                    if (tourist) {
                      return (
                        <div className="bg-muted/30 p-3 rounded-lg space-y-1">
                          <p className="text-sm"><span className="font-medium">Name:</span> {tourist.name}</p>
                          <p className="text-sm"><span className="font-medium">Nationality:</span> {tourist.nationality}</p>
                          <p className="text-sm"><span className="font-medium">Phone:</span> {tourist.phoneNumber}</p>
                          <p className="text-sm"><span className="font-medium">Hotel:</span> {tourist.hotelName}</p>
                        </div>
                      );
                    }
                    return <p className="text-sm text-muted-foreground">Tourist details not available</p>;
                  })()}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Response Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  size="sm" 
                  className="flex items-center space-x-1"
                  onClick={() => handleDispatchPatrol(selectedAlert.id)}
                >
                  <Navigation className="h-3 w-3" />
                  <span>Dispatch Patrol</span>
                </Button>
                
                {selectedAlert.touristId && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex items-center space-x-1"
                    onClick={() => handleContactTourist(selectedAlert.touristId!)}
                  >
                    <Phone className="h-3 w-3" />
                    <span>Call Tourist</span>
                  </Button>
                )}
              </div>
            </div>

            {/* Available Patrols */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Available Patrols Nearby</h4>
              <div className="space-y-2">
                {getAvailablePatrols().slice(0, 3).map((patrol) => (
                  <div key={patrol.car} className="flex items-center justify-between p-2 bg-muted/30 rounded-lg">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{patrol.car}</p>
                      <p className="text-xs text-muted-foreground">{patrol.officer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{patrol.location}</p>
                      <Badge variant="outline" className="text-xs">{patrol.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Real-time Location Map</CardTitle>
          <CardDescription>Live tracking of alerts and patrol units</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Interactive map will show:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Real-time SOS alert locations</p>
                <p>• Patrol car positions and routes</p>
                <p>• Tourist tracking (with consent)</p>
                <p>• Hotspot overlays</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SOSMonitoring;