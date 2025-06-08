
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Eye } from "lucide-react";
import { NGODetailsModal } from "@/components/NGODetailsModal";

interface NGO {
  id: string;
  name: string;
  status: 'active' | 'pending';
  coursesCount: number;
  studentsReached: number;
  joinedDate: string;
  contactEmail: string;
}

const dummyNGOs: NGO[] = [
  {
    id: "ngo-001",
    name: "Green Earth Foundation",
    status: "active",
    coursesCount: 8,
    studentsReached: 245,
    joinedDate: "2023-03-15",
    contactEmail: "info@greenearth.org"
  },
  {
    id: "ngo-002",
    name: "Digital Literacy Initiative",
    status: "active",
    coursesCount: 12,
    studentsReached: 389,
    joinedDate: "2023-01-20",
    contactEmail: "contact@digitalliteracy.org"
  },
  {
    id: "ngo-003",
    name: "Rural Education Trust",
    status: "pending",
    coursesCount: 0,
    studentsReached: 0,
    joinedDate: "2024-01-10",
    contactEmail: "admin@ruraleducation.org"
  },
  {
    id: "ngo-004",
    name: "Women Empowerment Society",
    status: "active",
    coursesCount: 6,
    studentsReached: 156,
    joinedDate: "2023-06-08",
    contactEmail: "hello@womenempowerment.org"
  },
  {
    id: "ngo-005",
    name: "Health Awareness Network",
    status: "pending",
    coursesCount: 0,
    studentsReached: 0,
    joinedDate: "2024-01-25",
    contactEmail: "info@healthawareness.org"
  }
];

export function NGOsContent() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'active' | 'pending'>('all');
  const [selectedNGO, setSelectedNGO] = useState<NGO | null>(null);

  const filteredNGOs = dummyNGOs.filter(ngo => {
    if (selectedFilter === 'all') return true;
    return ngo.status === selectedFilter;
  });

  const handleViewDetails = (ngo: NGO) => {
    setSelectedNGO(ngo);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">NGO Management</h1>
        <p className="text-muted-foreground">Manage and monitor registered NGOs</p>
      </div>

      <Tabs value={selectedFilter} onValueChange={(value) => setSelectedFilter(value as 'all' | 'active' | 'pending')}>
        <TabsList>
          <TabsTrigger value="all">All NGOs</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedFilter} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNGOs.map((ngo) => (
              <Card key={ngo.id} className="border-border/50 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      {ngo.name}
                    </CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ngo.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {ngo.status.charAt(0).toUpperCase() + ngo.status.slice(1)}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Courses:</span>
                      <span className="font-medium">{ngo.coursesCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Students Reached:</span>
                      <span className="font-medium">{ngo.studentsReached}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Joined:</span>
                      <span className="font-medium">{new Date(ngo.joinedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-medium text-xs">{ngo.contactEmail}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleViewDetails(ngo)}
                    className="w-full"
                    size="sm"
                    variant="outline"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedNGO && (
        <NGODetailsModal
          isOpen={!!selectedNGO}
          onClose={() => setSelectedNGO(null)}
          ngoName={selectedNGO.name}
          ngoId={selectedNGO.id}
        />
      )}
    </div>
  );
}
