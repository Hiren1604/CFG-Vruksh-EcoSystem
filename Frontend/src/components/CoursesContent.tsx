import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  ngoName: string;
  totalEnrollments: number;
  averageRating: number;
  feedbackCount: number;
  description: string;
  duration: string;
}

const dummyCourses: Course[] = [
  {
    id: "course-001",
    title: "Sustainable Farming Practices",
    ngoName: "Green Earth Foundation",
    totalEnrollments: 89,
    averageRating: 4.5,
    feedbackCount: 67,
    description: "Learn modern sustainable farming techniques",
    duration: "6 weeks"
  },
  {
    id: "course-002",
    title: "Water Conservation Methods",
    ngoName: "Green Earth Foundation",
    totalEnrollments: 156,
    averageRating: 4.8,
    feedbackCount: 134,
    description: "Effective water conservation for communities",
    duration: "4 weeks"
  },
  {
    id: "course-003",
    title: "Basic Computer Skills",
    ngoName: "Digital Literacy Initiative",
    totalEnrollments: 234,
    averageRating: 4.6,
    feedbackCount: 198,
    description: "Introduction to computers and digital literacy",
    duration: "8 weeks"
  },
  {
    id: "course-004",
    title: "Internet Safety & Digital Citizenship",
    ngoName: "Digital Literacy Initiative",
    totalEnrollments: 155,
    averageRating: 4.7,
    feedbackCount: 142,
    description: "Stay safe online and be a responsible digital citizen",
    duration: "3 weeks"
  },
  {
    id: "course-005",
    title: "Small Business Management",
    ngoName: "Women Empowerment Society",
    totalEnrollments: 78,
    averageRating: 4.4,
    feedbackCount: 65,
    description: "Essential skills for running a small business",
    duration: "10 weeks"
  },
  {
    id: "course-006",
    title: "Financial Literacy",
    ngoName: "Women Empowerment Society",
    totalEnrollments: 92,
    averageRating: 4.6,
    feedbackCount: 81,
    description: "Understanding money management and savings",
    duration: "5 weeks"
  }
];

export function CoursesContent() {
  const navigate = useNavigate();
  
  // Group courses by NGO
  const coursesByNGO = dummyCourses.reduce((acc, course) => {
    if (!acc[course.ngoName]) {
      acc[course.ngoName] = [];
    }
    acc[course.ngoName].push(course);
    return acc;
  }, {} as Record<string, Course[]>);

  const handleViewCourse = (courseId: string) => {
    navigate(`/ngo-course-detail/${courseId}`);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Courses by NGO</h1>
        <p className="text-muted-foreground">Browse all courses grouped by NGO</p>
      </div>

      <div className="space-y-8">
        {Object.entries(coursesByNGO).map(([ngoName, courses]) => (
          <div key={ngoName} className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
              {ngoName}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className="border-border/50 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleViewCourse(course.id)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Enrollments:
                        </span>
                        <span className="font-medium">{course.totalEnrollments}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          Rating:
                        </span>
                        <span className="font-medium">{course.averageRating}/5 ({course.feedbackCount} reviews)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
