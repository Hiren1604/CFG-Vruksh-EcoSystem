import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestCard } from "@/components/RequestCard";
import { generateContent } from "@/service/AiModel";
import { AI_PROMPT } from "@/constants/Constants";
import { toast } from "sonner";
import { useState } from "react";
import { ReviewModal } from "@/components/ReviewModal";

interface Request {
  id: string;
  ngoName: string;
  dateOfUpload: string;
  description: string;
  approvedDate?: string;
  contextualDescription: string;
}

// Dummy data for requests
const pendingRequests: Request[] = [
  {
    id: "REQ-001",
    ngoName: "Green Future Foundation",
    dateOfUpload: "2024-06-05",
    description: "Environmental Science Course Module 1",
    contextualDescription: "The Environmental Science Course is a call to action for young learners and community members to reconnect with the natural world. This module covers the basics of ecosystems, climate patterns, biodiversity, and pollution. The course content is simplified for learners from diverse backgrounds, using visuals, infographics, and interactive storytelling to communicate scientific concepts. Students explore local and global environmental issues and learn how they can contribute—no matter how small—to sustainability.\n\nWhether it's understanding carbon footprints or learning about the value of trees in urban areas, the course emphasizes practical, everyday steps to build a greener tomorrow. It's an ideal starting point for NGOs, schools, or communities promoting eco-conscious living."
  },
  {
    id: "REQ-002",
    ngoName: "Tech for All",
    dateOfUpload: "2024-06-04",
    description: "Basic Computer Skills Training",
    contextualDescription: "In an increasingly digital world, basic computer literacy is no longer optional—it's essential. This course from Tech for All focuses on the digital empowerment of individuals with little to no prior computer experience. Learners are guided through the fundamental operations of a computer: using a mouse, typing, managing files, browsing the internet safely, sending emails, and accessing online government portals.\n\nThe curriculum emphasizes real-world application—how to write a résumé in Word, pay bills online, or navigate video calls for telemedicine or education. Through self-paced modules, participants not only gain technical know-how but also the confidence to be self-reliant in the digital economy."
  },
  {
    id: "REQ-003",
    ngoName: "Rural Education Initiative",
    dateOfUpload: "2024-06-03",
    description: "Mathematics Foundation Course",
    contextualDescription: "Designed to bridge the rural-urban education divide, this Mathematics Foundation Course focuses on strengthening basic numeracy skills. From understanding place value to solving word problems, the module is designed to make math accessible and fun. It integrates practical examples like calculating costs in markets, measuring land, or reading train schedules—showing how math applies to daily life.\n\nThis course is ideal for young learners or adults returning to education, especially in under-resourced regions. By gamifying the learning process and providing printable worksheets, it ensures learners can revise concepts even in offline environments."
  },
  {
    id: "REQ-004",
    ngoName: "Women Empowerment Society",
    dateOfUpload: "2024-06-02",
    description: "Financial Literacy Workshop",
    contextualDescription: "Empowering women starts with empowering their finances. This Financial Literacy Workshop aims to break barriers to economic independence. Participants learn budgeting, savings strategies, digital wallet use, and how to read basic bank statements. The workshop demystifies financial jargon and promotes informed decision-making.\n\nSpecial focus is given to case studies involving women from similar socio-economic backgrounds, ensuring relevance and relatability. Whether it's helping someone start a home business or take control of household expenses, this course is a crucial stepping stone toward long-term empowerment."
  }
];

const approvedRequests: Request[] = [
  {
    id: "REQ-005",
    ngoName: "Digital Literacy Hub",
    dateOfUpload: "2024-05-30",
    description: "Introduction to Programming",
    approvedDate: "2024-06-01",
    contextualDescription: "A beginner-friendly introduction to programming concepts and practices."
  },
  {
    id: "REQ-006",
    ngoName: "Health Awareness Network",
    dateOfUpload: "2024-05-28",
    description: "Public Health Basics Course",
    approvedDate: "2024-05-31",
    contextualDescription: "Comprehensive overview of public health fundamentals and practices."
  },
  {
    id: "REQ-007",
    ngoName: "Skill Development Center",
    dateOfUpload: "2024-05-25",
    description: "Entrepreneurship Training Module",
    approvedDate: "2024-05-30",
    contextualDescription: "Comprehensive training module covering essential entrepreneurship skills and business fundamentals."
  }
];

export function RequestsContent() {
  const [review, setReview] = useState<any>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

  const handleReview = async (request: Request) => {
    const toastId = toast.loading("Generating review report...");
    try {
      setSelectedRequest(request);
      
      const prompt = AI_PROMPT
        .replace('{description}', request.description)
        .replace('{contextualDescription}', request.contextualDescription);
      
      const reviewResult = await generateContent(prompt);
      console.log('AI Review Result:', reviewResult);
      setReview(reviewResult);
      setIsReviewModalOpen(true);
      
      toast.success("Review report generated successfully", {
        id: toastId
      });
    } catch (error) {
      console.error('Error generating review:', error);
      toast.error("Failed to generate review report", {
        id: toastId
      });
    }
  };

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
                  onReview={() => handleReview(request)}
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

      <ReviewModal 
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        review={review}
        request={selectedRequest || undefined}
      />
    </div>
  );
}
