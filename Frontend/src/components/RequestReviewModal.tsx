
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckCircle, XCircle, FileText, Calendar, Building2 } from "lucide-react";

interface RequestReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: {
    id: string;
    ngoName: string;
    dateOfUpload: string;
    description: string;
  };
}

const courseDetails = {
  title: "Environmental Science Course Module 1",
  duration: "4 weeks",
  modules: [
    "Introduction to Environmental Science",
    "Ecosystem and Biodiversity",
    "Climate Change Awareness",
    "Sustainable Practices"
  ],
  targetAudience: "Students aged 16-25",
  prerequisites: "Basic science knowledge",
  learningObjectives: [
    "Understand environmental concepts",
    "Identify environmental challenges",
    "Develop sustainable thinking"
  ]
};

export function RequestReviewModal({ isOpen, onClose, request }: RequestReviewModalProps) {
  const [feedback, setFeedback] = useState("");
  const [decision, setDecision] = useState<'approve' | 'reject' | null>(null);

  const handleApprove = () => {
    console.log("Approving request:", request.id, "with feedback:", feedback);
    // TODO: Implement approval logic
    onClose();
  };

  const handleReject = () => {
    console.log("Rejecting request:", request.id, "with feedback:", feedback);
    // TODO: Implement rejection logic
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Course Review - {request.id}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Request Info */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Request Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">NGO Name</Label>
                  <p className="text-sm text-muted-foreground">{request.ngoName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Upload Date</Label>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(request.dateOfUpload).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Description</Label>
                <p className="text-sm text-muted-foreground">{request.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Course Details */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Course Title</Label>
                  <p className="text-sm text-muted-foreground">{courseDetails.title}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Duration</Label>
                  <p className="text-sm text-muted-foreground">{courseDetails.duration}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Target Audience</Label>
                  <p className="text-sm text-muted-foreground">{courseDetails.targetAudience}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Prerequisites</Label>
                  <p className="text-sm text-muted-foreground">{courseDetails.prerequisites}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Course Modules</Label>
                <div className="mt-2 space-y-1">
                  {courseDetails.modules.map((module, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-1">
                      {index + 1}. {module}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Learning Objectives</Label>
                <ul className="mt-2 space-y-1">
                  {courseDetails.learningObjectives.map((objective, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Section */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Review Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="feedback">Feedback for NGO</Label>
                <Textarea
                  id="feedback"
                  placeholder="Provide detailed feedback for the NGO about their course submission..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleApprove}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve Course
                </Button>
                <Button
                  onClick={handleReject}
                  variant="destructive"
                  className="flex-1"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject Course
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
