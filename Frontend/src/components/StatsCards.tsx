
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, FileText, BookOpen } from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "12,543",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
    description: "Active learners on platform"
  },
  {
    title: "NGOs Registered",
    value: "87",
    change: "+3",
    changeType: "positive" as const,
    icon: Building2,
    description: "Partner organizations"
  },
  {
    title: "Pending Requests",
    value: "23",
    change: "-5",
    changeType: "positive" as const,
    icon: FileText,
    description: "Awaiting review"
  },
  {
    title: "Total Courses",
    value: "156",
    change: "+8",
    changeType: "positive" as const,
    icon: BookOpen,
    description: "Available content"
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border/50 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-green-600 font-medium">
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.description}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
