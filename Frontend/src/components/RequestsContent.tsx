
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestCard } from "@/components/RequestCard";

// Dummy data for requests
const pendingRequests = [
  {
    id: "REQ-001",
    ngoName: "Green Future Foundation",
    dateOfUpload: "2024-06-05",
    description: "Environmental Science Course Module 1"
  },
  {
    id: "REQ-002",
    ngoName: "Tech for All",
    dateOfUpload: "2024-06-04",
    description: "Basic Computer Skills Training"
  },
  {
    id: "REQ-003",
    ngoName: "Rural Education Initiative",
    dateOfUpload: "2024-06-03",
    description: "Mathematics Foundation Course"
  },
  {
    id: "REQ-004",
    ngoName: "Women Empowerment Society",
    dateOfUpload: "2024-06-02",
    description: "Financial Literacy Workshop"
  }
];

const approvedRequests = [
  {
    id: "REQ-005",
    ngoName: "Digital Literacy Hub",
    dateOfUpload: "2024-05-30",
    description: "Introduction to Programming",
    approvedDate: "2024-06-01"
  },
  {
    id: "REQ-006",
    ngoName: "Health Awareness Network",
    dateOfUpload: "2024-05-28",
    description: "Public Health Basics Course",
    approvedDate: "2024-05-31"
  },
  {
    id: "REQ-007",
    ngoName: "Skill Development Center",
    dateOfUpload: "2024-05-25",
    description: "Entrepreneurship Training Module",
    approvedDate: "2024-05-30"
  }
];

export function RequestsContent() {
  return (
    <div className="flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center gap-4 px-6">
          <SidebarTrigger className="hover:bg-accent/50" />
          
          <div className="flex-1 flex items-center gap-4">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search requests..." 
                className="pl-10 bg-accent/20 border-border/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-accent/50">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Requests Management</h1>
          <p className="text-muted-foreground">
            Review and manage NGO course content submissions.
          </p>
        </div>

        {/* Requests Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="pending">Pending Requests</TabsTrigger>
            <TabsTrigger value="approved">Approved Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Pending Requests ({pendingRequests.length})</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingRequests.map((request) => (
                <RequestCard 
                  key={request.id} 
                  request={request} 
                  type="pending"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Approved Requests ({approvedRequests.length})</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {approvedRequests.map((request) => (
                <RequestCard 
                  key={request.id} 
                  request={request} 
                  type="approved"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
