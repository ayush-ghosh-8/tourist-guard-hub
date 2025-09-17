import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  Plus, 
  FileText, 
  Phone, 
  MapPin,
  Calendar,
  Upload,
  CheckCircle
} from "lucide-react";
import { zonalCases } from "@/data/mockData";

const ZonalCaseManagement = () => {
  const [selectedCase, setSelectedCase] = useState(zonalCases[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddForm, setShowAddForm] = useState(false);

  // Filter cases based on search and status
  const filteredCases = zonalCases.filter(case_ => {
    const matchesSearch = case_.touristName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.caseType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || case_.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddCase = () => {
    // Mock add case functionality
    console.log("Adding new case...");
    setShowAddForm(false);
  };

  const handleUpdateStatus = (caseId: string, newStatus: string) => {
    // Mock status update functionality
    console.log(`Updating case ${caseId} to status: ${newStatus}`);
  };

  const handleUploadEvidence = (caseId: string) => {
    // Mock evidence upload functionality
    console.log(`Uploading evidence for case ${caseId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">District Case Management</h2>
          <p className="text-muted-foreground">Track and manage tourist complaint cases in your district</p>
        </div>
        <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Case
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>

      {/* Filter Controls */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by tourist name or case type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cases</SelectItem>
            <SelectItem value="investigating">Investigating</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="open">Open</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cases List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Cases ({filteredCases.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredCases.map((case_) => (
                  <Card 
                    key={case_.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedCase.id === case_.id ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedCase(case_)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-sm">{case_.touristName}</p>
                            <p className="text-xs text-muted-foreground">{case_.nationality}</p>
                          </div>
                          <Badge 
                            variant={
                              case_.status === 'resolved' ? 'default' :
                              case_.status === 'investigating' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {case_.status}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{case_.caseType}</p>
                          <p className="text-xs text-muted-foreground">{case_.location}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge 
                            variant={case_.priority === 'high' ? 'destructive' : 'secondary'}
                            className="text-xs"
                          >
                            {case_.priority}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{case_.dateReported}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Case Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Case Details - #{selectedCase.id}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tourist Information */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Tourist Information
                </h4>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Name:</span>
                      <p className="font-medium">{selectedCase.touristName}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Nationality:</span>
                      <p className="font-medium">{selectedCase.nationality}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tourist ID:</span>
                      <p className="font-medium">{selectedCase.touristId}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Assigned Officer:</span>
                      <p className="font-medium">{selectedCase.assignedOfficer}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Information */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Case Information
                </h4>
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Case Type:</span>
                    <Badge>{selectedCase.caseType}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={
                          selectedCase.status === 'resolved' ? 'default' :
                          selectedCase.status === 'investigating' ? 'secondary' : 'outline'
                        }
                      >
                        {selectedCase.status}
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleUpdateStatus(selectedCase.id, 'resolved')}
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Update
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Priority:</span>
                    <Badge variant={selectedCase.priority === 'high' ? 'destructive' : 'secondary'}>
                      {selectedCase.priority}
                    </Badge>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <div className="flex items-center gap-1 text-right">
                      <MapPin className="h-3 w-3" />
                      <span className="text-sm">{selectedCase.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reported:</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span className="text-sm">{selectedCase.dateReported}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Description */}
              <div>
                <h4 className="font-semibold mb-3">Description</h4>
                <p className="bg-muted/50 p-3 rounded text-sm">{selectedCase.description}</p>
              </div>

              {/* Evidence */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Evidence ({selectedCase.evidence.length})
                </h4>
                <div className="space-y-2">
                  {selectedCase.evidence.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                      <span className="text-sm">{item}</span>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleUploadEvidence(selectedCase.id)}
                  >
                    <Upload className="h-3 w-3 mr-2" />
                    Upload New Evidence
                  </Button>
                </div>
              </div>

              {/* Merchant Details */}
              {selectedCase.merchantDetails && (
                <div>
                  <h4 className="font-semibold mb-3">Merchant Details</h4>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Name:</span>
                      <span className="text-sm font-medium">{selectedCase.merchantDetails.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">License:</span>
                      <span className="text-sm font-medium">{selectedCase.merchantDetails.license}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Contact:</span>
                      <span className="text-sm font-medium">{selectedCase.merchantDetails.contact}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Resolution */}
              {selectedCase.resolution && (
                <div>
                  <h4 className="font-semibold mb-3">Resolution</h4>
                  <p className="bg-success/10 border border-success/20 p-3 rounded text-sm">
                    {selectedCase.resolution}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add Case Dialog */}
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Case</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="tourist-name">Tourist Name</Label>
            <Input id="tourist-name" placeholder="Enter tourist name" />
          </div>
          <div>
            <Label htmlFor="case-type">Case Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select case type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fraud">Fraud Complaint</SelectItem>
                <SelectItem value="theft">Theft Report</SelectItem>
                <SelectItem value="overcharge">Overcharge Scam</SelectItem>
                <SelectItem value="harassment">Harassment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe the incident..." />
          </div>
          <Button onClick={handleAddCase} className="w-full">
            Create Case
          </Button>
        </div>
      </DialogContent>
    </div>
  );
};

export default ZonalCaseManagement;