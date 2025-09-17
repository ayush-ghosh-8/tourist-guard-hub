import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Search, 
  QrCode, 
  UserCheck, 
  Flag,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Camera,
  CheckCircle,
  Clock
} from "lucide-react";
import { zonalTourists, zonalStats } from "@/data/mockData";

const ZonalTouristVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTourist, setSelectedTourist] = useState(zonalTourists[0]);
  const [scanMode, setScanMode] = useState(false);

  // Filter tourists based on search
  const filteredTourists = zonalTourists.filter(tourist => 
    tourist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.nationality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQRScan = () => {
    // Mock QR scan functionality
    setScanMode(true);
    setTimeout(() => {
      setScanMode(false);
      // Simulate finding a tourist
      setSelectedTourist(zonalTourists[1]);
    }, 2000);
  };

  const handleVerifyTourist = (touristId: string) => {
    // Mock verification functionality
    console.log(`Verifying tourist ${touristId}`);
  };

  const handleFlagTourist = (touristId: string, riskLevel: string) => {
    // Mock flag functionality
    console.log(`Flagging tourist ${touristId} with risk level: ${riskLevel}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">District Tourist Verification</h2>
          <p className="text-muted-foreground">Verify and track tourists in your district jurisdiction</p>
        </div>
        <Button onClick={handleQRScan} className="bg-secondary hover:bg-secondary/90">
          <QrCode className="h-4 w-4 mr-2" />
          QR Scan
        </Button>
      </div>

      {/* QR Scanner UI */}
      {scanMode && (
        <Alert>
          <Camera className="h-4 w-4" />
          <AlertDescription>
            QR Scanner Active - Point camera at tourist's QR code to verify identity...
          </AlertDescription>
        </Alert>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Tourist Search & List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tourist Database</CardTitle>
              <CardDescription>Search and select tourists for verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, ID, or nationality..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Tourist List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredTourists.map((tourist) => (
                  <Card 
                    key={tourist.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTourist.id === tourist.id ? 'border-secondary bg-secondary/5' : ''
                    }`}
                    onClick={() => setSelectedTourist(tourist)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-sm">{tourist.name}</p>
                            <p className="text-xs text-muted-foreground">{tourist.nationality}</p>
                            <p className="text-xs text-muted-foreground">ID: {tourist.id}</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <Badge 
                              variant={
                                tourist.verificationStatus === 'verified' ? 'default' :
                                tourist.verificationStatus === 'pending' ? 'secondary' : 'outline'
                              }
                              className="text-xs"
                            >
                              {tourist.verificationStatus}
                            </Badge>
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
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{tourist.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tourist Profile */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Tourist Profile - {selectedTourist.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="font-semibold mb-3">Personal Information</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Full Name:</span>
                      <p className="font-medium">{selectedTourist.name}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Nationality:</span>
                      <p className="font-medium">{selectedTourist.nationality}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Age:</span>
                      <p className="font-medium">{selectedTourist.age} years</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Gender:</span>
                      <p className="font-medium">{selectedTourist.gender}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Passport Number:</span>
                      <p className="font-medium">{selectedTourist.passportNumber}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tourist ID:</span>
                      <p className="font-medium">{selectedTourist.id}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accommodation & Contact */}
              <div>
                <h4 className="font-semibold mb-3">Accommodation & Contact</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Current Location:</span>
                      <p className="font-medium flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {selectedTourist.location}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Accommodation:</span>
                      <p className="font-medium">{selectedTourist.accommodation}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Entry Date:</span>
                      <p className="font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {selectedTourist.entryDate}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Planned Exit:</span>
                      <p className="font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {selectedTourist.plannedExit}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm text-muted-foreground">Emergency Contact:</span>
                      <p className="font-medium flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {selectedTourist.emergencyContact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Status */}
              <div>
                <h4 className="font-semibold mb-3">Verification & Risk Assessment</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Verification Status:</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={
                            selectedTourist.verificationStatus === 'verified' ? 'default' :
                            selectedTourist.verificationStatus === 'pending' ? 'secondary' : 'outline'
                          }
                        >
                          {selectedTourist.verificationStatus}
                        </Badge>
                        {selectedTourist.verificationStatus === 'verified' && (
                          <CheckCircle className="h-4 w-4 text-success" />
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Risk Level:</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={
                            selectedTourist.riskLevel === 'high' ? 'destructive' :
                            selectedTourist.riskLevel === 'medium' ? 'secondary' : 'outline'
                          }
                        >
                          {selectedTourist.riskLevel} risk
                        </Badge>
                        <Shield className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm text-muted-foreground">Last Scanned:</span>
                      <p className="font-medium">{selectedTourist.lastScanned}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                <h4 className="font-semibold mb-3">Actions</h4>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleVerifyTourist(selectedTourist.id)}
                    className="bg-success hover:bg-success/90"
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    Verify Tourist
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleFlagTourist(selectedTourist.id, 'high')}
                    className="border-warning text-warning hover:bg-warning/10"
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Flag Tourist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="text-center border-l-4 border-l-success">
          <CardContent className="pt-4">
            <UserCheck className="h-6 w-6 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-success">{zonalStats.qrScansToday}</div>
            <p className="text-sm text-muted-foreground">QR Scans Today</p>
          </CardContent>
        </Card>
        <Card className="text-center border-l-4 border-l-warning">
          <CardContent className="pt-4">
            <Clock className="h-6 w-6 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-warning">12</div>
            <p className="text-sm text-muted-foreground">Pending Verification</p>
          </CardContent>
        </Card>
        <Card className="text-center border-l-4 border-l-destructive">
          <CardContent className="pt-4">
            <Flag className="h-6 w-6 text-destructive mx-auto mb-2" />
            <div className="text-2xl font-bold text-destructive">3</div>
            <p className="text-sm text-muted-foreground">High Risk Flagged</p>
          </CardContent>
        </Card>
        <Card className="text-center border-l-4 border-l-secondary">
          <CardContent className="pt-4">
            <Shield className="h-6 w-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-secondary">{zonalStats.touristsTracked}</div>
            <p className="text-sm text-muted-foreground">Total Tracked</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ZonalTouristVerification;