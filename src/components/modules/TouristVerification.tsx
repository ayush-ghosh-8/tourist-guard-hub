import { useState } from "react";
import { QrCode, Search, User, Shield, Phone, MapPin, Calendar, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tourists } from "@/data/mockData";

const TouristVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTourist, setSelectedTourist] = useState(tourists[0]);
  const [scanMode, setScanMode] = useState(false);

  const filteredTourists = tourists.filter(tourist => 
    tourist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.passportNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQRScan = () => {
    setScanMode(true);
    // Simulate QR scan after 2 seconds
    setTimeout(() => {
      setScanMode(false);
      // In real implementation, this would process the QR code
      console.log("QR Code scanned successfully");
    }, 2000);
  };

  const handleVerifyTourist = (touristId: string) => {
    console.log(`Verifying tourist ${touristId}`);
    // In real implementation, this would update the backend
  };

  const handleFlagTourist = (touristId: string, riskLevel: string) => {
    console.log(`Flagging tourist ${touristId} as ${riskLevel} risk`);
    // In real implementation, this would update the backend
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold">Tourist Verification System</h3>
          <p className="text-sm text-muted-foreground">QR code scanning and tourist database lookup</p>
        </div>
        <Button 
          onClick={handleQRScan} 
          className="flex items-center space-x-2"
          disabled={scanMode}
        >
          <QrCode className="h-4 w-4" />
          <span>{scanMode ? "Scanning..." : "Scan QR Code"}</span>
        </Button>
      </div>

      {/* QR Scanner */}
      {scanMode && (
        <Card className="border-2 border-dashed border-primary">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto border-2 border-primary rounded-lg flex items-center justify-center animate-pulse">
                <QrCode className="h-16 w-16 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Position QR code within the frame</p>
              <p className="text-xs text-muted-foreground">Scanning will automatically process tourist details</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search and Results */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Search Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Tourist Search</span>
            </CardTitle>
            <CardDescription>Search by name, passport, or nationality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Search tourists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Search Results ({filteredTourists.length})</p>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {filteredTourists.map((tourist) => (
                    <div
                      key={tourist.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedTourist.id === tourist.id ? 'bg-muted border-primary' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedTourist(tourist)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-sm">{tourist.name}</p>
                            <Badge variant="outline" className="text-xs">{tourist.nationality}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{tourist.passportNo}</p>
                          <p className="text-xs text-muted-foreground">{tourist.currentLocation}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={tourist.verified ? 'default' : 'destructive'} 
                            className="text-xs mb-1"
                          >
                            {tourist.verified ? 'Verified' : 'Unverified'}
                          </Badge>
                          <br />
                          <Badge 
                            variant={
                              tourist.riskLevel === 'high' ? 'destructive' :
                              tourist.riskLevel === 'medium' ? 'secondary' : 'outline'
                            } 
                            className="text-xs"
                          >
                            {tourist.riskLevel} risk
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tourist Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Tourist Profile</span>
              </div>
              <div className="flex items-center space-x-2">
                {selectedTourist.verified ? (
                  <Badge variant="default" className="flex items-center space-x-1">
                    <Shield className="h-3 w-3" />
                    <span>Verified</span>
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="flex items-center space-x-1">
                    <AlertTriangle className="h-3 w-3" />
                    <span>Unverified</span>
                  </Badge>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Basic Information */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium">Full Name:</span>
                  <p className="text-sm text-muted-foreground">{selectedTourist.name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Nationality:</span>
                  <p className="text-sm text-muted-foreground">{selectedTourist.nationality}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium">Passport No:</span>
                  <p className="text-sm text-muted-foreground font-mono">{selectedTourist.passportNo}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Phone Number:</span>
                  <p className="text-sm text-muted-foreground font-mono">{selectedTourist.phoneNumber}</p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium">Current Location:</span>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {selectedTourist.currentLocation}
                </p>
              </div>
            </div>

            {/* Accommodation Details */}
            <div className="space-y-2 p-3 bg-muted/30 rounded-lg">
              <h4 className="text-sm font-medium">Accommodation Details</h4>
              <div className="space-y-1">
                <p className="text-sm"><span className="font-medium">Hotel:</span> {selectedTourist.hotelName}</p>
                <p className="text-sm flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="font-medium">Check-in:</span> {selectedTourist.checkInDate}
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="space-y-2 p-3 bg-muted/30 rounded-lg">
              <h4 className="text-sm font-medium">Emergency Contact</h4>
              <p className="text-sm flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                {selectedTourist.emergencyContact}
              </p>
            </div>

            {/* Risk Assessment */}
            <div className="space-y-2 p-3 bg-muted/30 rounded-lg">
              <h4 className="text-sm font-medium">Risk Assessment</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm">Current Risk Level:</span>
                <Badge 
                  variant={
                    selectedTourist.riskLevel === 'high' ? 'destructive' :
                    selectedTourist.riskLevel === 'medium' ? 'secondary' : 'outline'
                  }
                >
                  {selectedTourist.riskLevel}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-4 border-t">
              {!selectedTourist.verified && (
                <Button 
                  className="w-full" 
                  onClick={() => handleVerifyTourist(selectedTourist.id)}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Verify Tourist
                </Button>
              )}
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleFlagTourist(selectedTourist.id, 'medium')}
                >
                  Flag as Medium Risk
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => handleFlagTourist(selectedTourist.id, 'high')}
                >
                  Flag as High Risk
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium">Verified Today</p>
                <p className="text-2xl font-bold">234</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-warning" />
              </div>
              <div>
                <p className="text-sm font-medium">Pending Verification</p>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium">High Risk</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-police-blue/10 rounded-lg flex items-center justify-center">
                <QrCode className="h-4 w-4 text-police-blue" />
              </div>
              <div>
                <p className="text-sm font-medium">QR Scans Today</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TouristVerification;