
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    type: "ngo_registration",
    title: "New NGO Registration",
    description: "Shiksha Foundation submitted registration",
    timestamp: "2 hours ago",
    status: "pending",
    avatar: "SF"
  },
  {
    id: 2,
    type: "course_submission",
    title: "Course Content Submitted",
    description: "Digital Literacy Module by Tech4Good",
    timestamp: "4 hours ago",
    status: "review",
    avatar: "TG"
  },
  {
    id: 3,
    type: "student_enrollment",
    title: "Bulk Student Enrollment",
    description: "125 new students enrolled via WhatsApp",
    timestamp: "6 hours ago",
    status: "completed",
    avatar: "SE"
  },
  {
    id: 4,
    type: "course_approval",
    title: "Course Approved",
    description: "Basic Math Course by EduCare approved",
    timestamp: "1 day ago",
    status: "approved",
    avatar: "EC"
  },
  {
    id: 5,
    type: "ngo_approval",
    title: "NGO Partnership Approved",
    description: "Learning Bridge NGO partnership activated",
    timestamp: "2 days ago",
    status: "approved",
    avatar: "LB"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
    case "review": return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case "completed": return "bg-green-100 text-green-800 hover:bg-green-100";
    case "approved": return "bg-green-100 text-green-800 hover:bg-green-100";
    default: return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

export function RecentActivity() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/20 transition-colors">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-foreground">{activity.title}</h4>
                  <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
