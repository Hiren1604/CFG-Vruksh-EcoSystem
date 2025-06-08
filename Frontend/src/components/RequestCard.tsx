
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Building2, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";
import { RequestReviewModal } from "@/components/RequestReviewModal";

interface Request {
  id: string;
  ngoName: string;
  dateOfUpload: string;
  description: string;
  approvedDate?: string;
}

interface RequestCardProps {
  request: Request;
  type: 'pending' | 'approved';
}

export function RequestCard({ request, type }: RequestCardProps) {
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleReview = () => {
    setShowReviewModal(true);
  };

  return (
    <>
      <Card className="border-border/50 hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-foreground">
              {request.ngoName}
            </CardTitle>
            {type === 'approved' && (
              <CheckCircle className="w-5 h-5 text-green-600" />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span>ID: {request.id}</span>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-foreground font-medium">
              {request.description}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Uploaded: {new Date(request.dateOfUpload).toLocaleDateString()}</span>
            </div>
            
            {type === 'approved' && request.approvedDate && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>Approved: {new Date(request.approvedDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          {type === 'pending' && (
            <Button 
              onClick={handleReview}
              className="w-full"
              size="sm"
            >
              Review
            </Button>
          )}
        </CardContent>
      </Card>

      {showReviewModal && (
        <RequestReviewModal
          isOpen={showReviewModal}
          onClose={() => setShowReviewModal(false)}
          request={request}
        />
      )}
    </>
  );
}
