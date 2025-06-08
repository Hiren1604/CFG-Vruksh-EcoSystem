
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const recentActivities = [
  {
    id: 1,
    title: "New NGO Registration",
    description: "Shiksha Foundation submitted registration",
    time: "2h ago",
    type: "pending"
  },
  {
    id: 2,
    title: "Course Submitted",
    description: "Digital Literacy Module by Tech4Good",
    time: "4h ago",
    type: "review"
  },
  {
    id: 3,
    title: "125 Students Enrolled",
    description: "Bulk enrollment via WhatsApp",
    time: "6h ago",
    type: "completed"
  }
];

interface NotificationDropdownProps {
  onClose: () => void;
}

export function NotificationDropdown({ onClose }: NotificationDropdownProps) {
  return (
    <Card className="absolute right-0 top-12 w-80 shadow-lg z-50 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Recent Activities</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 max-h-64 overflow-y-auto">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/20">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {activity.type}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
