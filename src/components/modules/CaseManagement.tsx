import { useState } from "react";
import { FileText, Plus, Search, Filter, Eye, Edit, Upload, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { stateCases } from "@/data/mockData";

const CaseManagement = () => {
  const [selectedCase, setSelectedCase] = useState(stateCases[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddCase, setShowAddCase] = useState(false);
  const [newCase, setNewCase] = useState({
    touristName: '',
    nationality: '',
    caseType: '',
    location: '',
    description: '',
    priority: 'normal' as 'urgent' | 'high' | 'normal'
  });

  const filteredCases = stateCases.filter(case_ => {
    const matchesSearch = case_.touristName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         case_.caseType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || case_.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddCase = () => {
    console.log('Adding new case:', newCase);
    // In real implementation, this would submit to backend
    setShowAddCase(false);
    setNewCase({
      touristName: '',
      nationality: '',
      caseType: '',
      location: '',
      description: '',
      priority: 'normal'
    });
  };

  const handleUpdateStatus = (caseId: number, newStatus: string) => {
    console.log(`Updating case ${caseId} status to ${newStatus}`);
    // In real implementation, this would update the backend
  };

  const handleUploadEvidence = (caseId: number) => {
    console.log(`Uploading evidence for case ${caseId}`);
    // In real implementation, this would open file upload dialog
  };

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold">Scam/Fraud Case Management</h3>
          <p className="text-sm text-muted-foreground">Track and manage tourist complaint cases</p>
        </div>
        <Button onClick={() => setShowAddCase(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Case</span>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Search by tourist name or case type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cases</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="investigating">Investigating</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Cases List */}
        <Card>
          <CardHeader>
            <CardTitle>Cases ({filteredCases.length})</CardTitle>
            <CardDescription>Click on a case to view details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredCases.map((case_) => (
                <div
                  key={case_.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedCase.id === case_.id ? 'bg-muted border-primary' : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedCase(case_)}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-sm">#{case_.id} - {case_.touristName}</p>
                        <Badge variant="outline" className="text-xs">{case_.nationality}</Badge>
                      </div>
                      <Badge variant={
                        case_.status === 'resolved' ? 'default' :
                        case_.status === 'investigating' ? 'secondary' : 'destructive'
                      } className="text-xs">
                        {case_.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{case_.caseType}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{case_.location}</p>
                      <Badge variant={
                        case_.priority === 'urgent' ? 'destructive' :
                        case_.priority === 'high' ? 'secondary' : 'outline'
                      } className="text-xs">
                        {case_.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Case Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Case Details</span>
              <div className="space-x-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleUploadEvidence(selectedCase.id)}>
                  <Upload className="h-3 w-3 mr-1" />
                  Evidence
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium">Case ID:</span>
                <p className="text-sm text-muted-foreground">#{selectedCase.id}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Status:</span>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant={
                    selectedCase.status === 'resolved' ? 'default' :
                    selectedCase.status === 'investigating' ? 'secondary' : 'destructive'
                  }>
                    {selectedCase.status}
                  </Badge>
                  <Select onValueChange={(value) => handleUpdateStatus(selectedCase.id, value)}>
                    <SelectTrigger className="w-24 h-6 text-xs">
                      <SelectValue placeholder="Change" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="investigating">Investigating</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium">Tourist Details:</span>
                <div className="bg-muted/30 p-3 rounded-lg mt-1 space-y-1">
                  <p className="text-sm"><span className="font-medium">Name:</span> {selectedCase.touristName}</p>
                  <p className="text-sm"><span className="font-medium">Nationality:</span> {selectedCase.nationality}</p>
                  <p className="text-sm"><span className="font-medium">Location:</span> {selectedCase.location}</p>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium">Case Information:</span>
                <div className="bg-muted/30 p-3 rounded-lg mt-1 space-y-1">
                  <p className="text-sm"><span className="font-medium">Type:</span> {selectedCase.caseType}</p>
                  <p className="text-sm"><span className="font-medium">Priority:</span> {selectedCase.priority}</p>
                  <p className="text-sm"><span className="font-medium">Assigned Officer:</span> {selectedCase.assignedOfficer}</p>
                  <p className="text-sm"><span className="font-medium">Reported:</span> {selectedCase.reportedAt}</p>
                </div>
              </div>

              {selectedCase.description && (
                <div>
                  <span className="text-sm font-medium">Description:</span>
                  <p className="text-sm text-muted-foreground mt-1 p-3 bg-muted/30 rounded-lg">
                    {selectedCase.description}
                  </p>
                </div>
              )}

              {selectedCase.evidence && selectedCase.evidence.length > 0 && (
                <div>
                  <span className="text-sm font-medium">Evidence Files:</span>
                  <div className="mt-1 space-y-1">
                    {selectedCase.evidence.map((evidence, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                        <span className="text-xs">{evidence}</span>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Contact Tourist
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Case Modal */}
      {showAddCase && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Add New Case</CardTitle>
              <CardDescription>Create a new tourist complaint case</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Tourist Name"
                value={newCase.touristName}
                onChange={(e) => setNewCase({...newCase, touristName: e.target.value})}
              />
              <Input
                placeholder="Nationality"
                value={newCase.nationality}
                onChange={(e) => setNewCase({...newCase, nationality: e.target.value})}
              />
              <Input
                placeholder="Case Type (e.g., Credit Card Fraud)"
                value={newCase.caseType}
                onChange={(e) => setNewCase({...newCase, caseType: e.target.value})}
              />
              <Input
                placeholder="Location"
                value={newCase.location}
                onChange={(e) => setNewCase({...newCase, location: e.target.value})}
              />
              <Select value={newCase.priority} onValueChange={(value: any) => setNewCase({...newCase, priority: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Case description..."
                value={newCase.description}
                onChange={(e) => setNewCase({...newCase, description: e.target.value})}
                rows={3}
              />
              <div className="flex space-x-2">
                <Button onClick={handleAddCase} className="flex-1">
                  Create Case
                </Button>
                <Button variant="outline" onClick={() => setShowAddCase(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CaseManagement;