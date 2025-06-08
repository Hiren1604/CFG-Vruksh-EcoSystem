
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users } from "lucide-react";

interface Course {
  id: string;
  title: string;
  enrollments: number;
  status: 'active' | 'pending' | 'completed';
  description: string;
}

interface NGODetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  ngoName: string;
  ngoId: string;
}

const sampleCourses: Course[] = [
  {
    id: "course-001",
    title: "Environmental Science Basics",
    enrollments: 125,
    status: "active",
    description: "Introduction to environmental science and conservation"
  },
  {
    id: "course-002",
    title: "Digital Literacy Program",
    enrollments: 89,
    status: "active",
    description: "Basic computer skills and internet usage"
  },
  {
    id: "course-003",
    title: "Sustainable Agriculture",
    enrollments: 67,
    status: "pending",
    description: "Modern farming techniques and sustainability"
  }
];

export function NGODetailsModal({ isOpen, onClose, ngoName, ngoId }: NGODetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{ngoName} - Course Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleCourses.map((course) => (
              <Card key={course.id} className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      {course.title}
                    </CardTitle>
                    <Badge className={
                      course.status === 'active' ? 'bg-green-100 text-green-800' :
                      course.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }>
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{course.enrollments} students enrolled</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
