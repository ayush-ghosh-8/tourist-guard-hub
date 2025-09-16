import { useState } from "react";
import { MapPin, TrendingUp, AlertTriangle, Eye, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hotspots } from "@/data/mockData";

const HotspotMapping = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(hotspots[0]);
  const [viewMode, setViewMode] = useState("heatmap");
  const [riskFilter, setRiskFilter] = useState("all");

  const filteredHotspots = hotspots.filter(hotspot => 
    riskFilter === 'all' || hotspot.riskLevel === riskFilter
  );

  const handleUpdateHotspot = (hotspotId: number, newRiskLevel: string) => {
    console.log(`Updating hotspot ${hotspotId} risk level to ${newRiskLevel}`);
    // In real implementation, this would update the backend
  };

  const handleAddHotspot = () => {
    console.log("Adding new hotspot");
    // In real implementation, this would open a form to add new hotspot
  };

  const generatePrediction = () => {
    console.log("Generating AI predictions for hotspots");
    // In real implementation, this would trigger AI analysis
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold">Hotspot Mapping & AI Prediction</h3>
          <p className="text-sm text-muted-foreground">Scam-prone areas with predictive analytics</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={generatePrediction}>
            <TrendingUp className="h-4 w-4 mr-2" />
            AI Predict
          </Button>
          <Button onClick={handleAddHotspot}>
            <Plus className="h-4 w-4 mr-2" />
            Add Hotspot
          </Button>
        </div>
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="View Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="heatmap">Heat Map</SelectItem>
                <SelectItem value="incidents">Incident Map</SelectItem>
                <SelectItem value="predictions">AI Predictions</SelectItem>
                <SelectItem value="patrols">Patrol Coverage</SelectItem>
              </SelectContent>
            </Select>

            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk Levels</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Display */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Interactive Hotspot Map</span>
                <Badge variant="outline">{viewMode.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</Badge>
              </CardTitle>
              <CardDescription>
                {viewMode === 'heatmap' && 'Crime density visualization with color coding'}
                {viewMode === 'incidents' && 'Recent incident locations and patterns'}
                {viewMode === 'predictions' && 'AI-powered risk prediction overlay'}
                {viewMode === 'patrols' && 'Current patrol coverage and gaps'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center relative">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 mx-auto text-muted-foreground" />
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Interactive Map Features:</p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Heat map visualization of scam incidents</p>
                      <p>• AI-powered risk prediction zones</p>
                      <p>• Real-time incident markers</p>
                      <p>• Patrol coverage overlay</p>
                      <p>• Tourist density indicators</p>
                      <p>• Historical trend analysis</p>
                    </div>
                  </div>
                </div>
                
                {/* Simulated hotspot markers */}
                <div className="absolute top-8 left-12 w-4 h-4 bg-destructive rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-20 w-3 h-3 bg-warning rounded-full"></div>
                <div className="absolute bottom-20 left-16 w-2 h-2 bg-success rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-4 h-4 bg-destructive rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-police-blue" />
                <span>AI Insights & Predictions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Risk Trends</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-xs">Chandni Chowk</span>
                      <Badge variant="destructive" className="text-xs">↑ 23% Risk</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-xs">Karol Bagh</span>
                      <Badge variant="secondary" className="text-xs">↓ 12% Risk</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-xs">Connaught Place</span>
                      <Badge variant="outline" className="text-xs">Stable</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Predicted Hotspots</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-destructive/10 border-l-2 border-destructive rounded">
                      <p className="text-xs font-medium">High Risk Alert</p>
                      <p className="text-xs text-muted-foreground">Paharganj area during 2-4 PM</p>
                    </div>
                    <div className="p-2 bg-warning/10 border-l-2 border-warning rounded">
                      <p className="text-xs font-medium">Medium Risk</p>
                      <p className="text-xs text-muted-foreground">Janpath market weekend evenings</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hotspots List */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Hotspots ({filteredHotspots.length})</CardTitle>
              <CardDescription>Click to view details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredHotspots.map((hotspot) => (
                  <div
                    key={hotspot.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedHotspot.id === hotspot.id ? 'bg-muted border-primary' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedHotspot(hotspot)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{hotspot.name}</p>
                        <Badge variant={
                          hotspot.riskLevel === 'high' ? 'destructive' :
                          hotspot.riskLevel === 'medium' ? 'secondary' : 'outline'
                        } className="text-xs">
                          {hotspot.riskLevel}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{hotspot.location}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          {hotspot.incidentCount} incidents
                        </p>
                        <Button size="sm" variant="ghost" className="h-6 px-2">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hotspot Details */}
          <Card>
            <CardHeader>
              <CardTitle>Hotspot Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium">Location:</span>
                  <p className="text-sm text-muted-foreground">{selectedHotspot.name}</p>
                  <p className="text-xs text-muted-foreground">{selectedHotspot.location}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Risk Level:</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant={
                      selectedHotspot.riskLevel === 'high' ? 'destructive' :
                      selectedHotspot.riskLevel === 'medium' ? 'secondary' : 'outline'
                    }>
                      {selectedHotspot.riskLevel}
                    </Badge>
                    <Select onValueChange={(value) => handleUpdateHotspot(selectedHotspot.id, value)}>
                      <SelectTrigger className="w-20 h-6 text-xs">
                        <SelectValue placeholder="Change" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <span className="text-sm font-medium">Incident Count:</span>
                  <p className="text-sm text-muted-foreground">{selectedHotspot.incidentCount} total incidents</p>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Recent Incident Types:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedHotspot.recentIncidents.map((incident, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {incident}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Recommendations:</span>
                  <div className="text-xs text-muted-foreground space-y-1 p-3 bg-muted/30 rounded-lg">
                    <p>• Increase patrol frequency during peak hours</p>
                    <p>• Deploy tourist awareness signage</p>
                    <p>• Coordinate with local merchant associations</p>
                    <p>• Enhanced CCTV monitoring</p>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Send Patrol Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HotspotMapping;