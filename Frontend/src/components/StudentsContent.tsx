
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Phone, BookOpen, MessageCircle } from "lucide-react";

interface Student {
  id: string;
  name: string;
  phone: string;
  courseEnrolled: string;
  ngoName: string;
  progress: number;
  feedback: string;
  enrollmentDate: string;
  lastActive: string;
}

const dummyStudents: Student[] = [
  {
    id: "std-001",
    name: "Priya Sharma",
    phone: "+91 9876543210",
    courseEnrolled: "Sustainable Farming Practices",
    ngoName: "Green Earth Foundation",
    progress: 85,
    feedback: "Very helpful course!",
    enrollmentDate: "2024-01-15",
    lastActive: "2024-01-30"
  },
  {
    id: "std-002",
    name: "Rahul Kumar",
    phone: "+91 9876543211",
    courseEnrolled: "Basic Computer Skills",
    ngoName: "Digital Literacy Initiative",
    progress: 60,
    feedback: "Good content, easy to follow",
    enrollmentDate: "2024-01-10",
    lastActive: "2024-01-29"
  },
  {
    id: "std-003",
    name: "Anjali Patel",
    phone: "+91 9876543212",
    courseEnrolled: "Financial Literacy",
    ngoName: "Women Empowerment Society",
    progress: 95,
    feedback: "Excellent explanations",
    enrollmentDate: "2023-12-20",
    lastActive: "2024-01-30"
  },
  {
    id: "std-004",
    name: "Vikash Singh",
    phone: "+91 9876543213",
    courseEnrolled: "Water Conservation Methods",
    ngoName: "Green Earth Foundation",
    progress: 40,
    feedback: "Could use more examples",
    enrollmentDate: "2024-01-20",
    lastActive: "2024-01-28"
  },
  {
    id: "std-005",
    name: "Meera Gupta",
    phone: "+91 9876543214",
    courseEnrolled: "Internet Safety & Digital Citizenship",
    ngoName: "Digital Literacy Initiative",
    progress: 75,
    feedback: "Very relevant for today's world",
    enrollmentDate: "2024-01-05",
    lastActive: "2024-01-30"
  },
  {
    id: "std-006",
    name: "Suresh Yadav",
    phone: "+91 9876543215",
    courseEnrolled: "Small Business Management",
    ngoName: "Women Empowerment Society",
    progress: 30,
    feedback: "Need more practical examples",
    enrollmentDate: "2024-01-25",
    lastActive: "2024-01-29"
  }
];

export function StudentsContent() {
  const totalStudents = dummyStudents.length;
  const activeStudents = dummyStudents.filter(student => {
    const lastActive = new Date(student.lastActive);
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    return lastActive >= threeDaysAgo;
  }).length;
  
  const averageProgress = Math.round(
    dummyStudents.reduce((sum, student) => sum + student.progress, 0) / dummyStudents.length
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Students</h1>
        <p className="text-muted-foreground">Manage and monitor student progress</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeStudents}</div>
            <p className="text-xs text-muted-foreground">Active in last 3 days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageProgress}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Course Enrolled</TableHead>
                <TableHead>NGO</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead>Last Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      {student.phone}
                    </div>
                  </TableCell>
                  <TableCell>{student.courseEnrolled}</TableCell>
                  <TableCell>{student.ngoName}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 max-w-40">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm truncate">{student.feedback}</span>
                    </div>
                  </TableCell>
                  <TableCell>{new Date(student.lastActive).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
