
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Play, FileText, BookOpen, Users, Clock } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState(0);

  // Mock course data with actual playable content
  const courses = {
    '1': {
      id: '1',
      title: 'Digital Marketing Fundamentals',
      description: 'Learn the basics of digital marketing including social media, email marketing, and SEO strategies.',
      category: 'Marketing',
      language: 'English',
      moduleCount: 3,
      enrollments: 234,
      modules: [
        {
          id: 'mod1',
          title: 'Introduction to Digital Marketing',
          description: 'Overview of digital marketing landscape and key concepts',
          videoUrl: 'https://www.youtube.com/embed/bixR-KIJKYM',
          duration: '15 mins',
          materials: [
            { type: 'pdf', name: 'Digital Marketing Basics.pdf', url: '#' },
            { type: 'slides', name: 'Introduction Slides.pptx', url: '#' }
          ]
        },
        {
          id: 'mod2',
          title: 'Social Media Marketing',
          description: 'Building effective social media strategies and campaigns',
          videoUrl: 'https://www.youtube.com/embed/R1ZVZh_pvP8',
          duration: '22 mins',
          materials: [
            { type: 'pdf', name: 'Social Media Guide.pdf', url: '#' },
            { type: 'template', name: 'Content Calendar Template.xlsx', url: '#' }
          ]
        },
        {
          id: 'mod3',
          title: 'Email Marketing Essentials',
          description: 'Creating and managing effective email marketing campaigns',
          videoUrl: 'https://www.youtube.com/embed/KT7CGl6XaXs',
          duration: '18 mins',
          materials: [
            { type: 'pdf', name: 'Email Best Practices.pdf', url: '#' },
            { type: 'checklist', name: 'Email Campaign Checklist.pdf', url: '#' }
          ]
        }
      ]
    },
    '2': {
      id: '2',
      title: 'Computer Literacy for Beginners',
      description: 'Basic computer skills including using Windows, internet browsing, and email communication.',
      category: 'Technology',
      language: 'Hindi',
      moduleCount: 4,
      enrollments: 456,
      modules: [
        {
          id: 'mod1',
          title: 'Computer Basics',
          description: 'Understanding computer hardware and software fundamentals',
          videoUrl: 'https://www.youtube.com/embed/y2kg3MOk1sY',
          duration: '20 mins',
          materials: [
            { type: 'pdf', name: 'Computer Basics Guide.pdf', url: '#' },
            { type: 'quiz', name: 'Hardware Quiz', url: '#' }
          ]
        },
        {
          id: 'mod2',
          title: 'Windows Operating System',
          description: 'Navigate and use Windows effectively',
          videoUrl: 'https://www.youtube.com/embed/0LfxKdCpTl4',
          duration: '25 mins',
          materials: [
            { type: 'pdf', name: 'Windows Guide.pdf', url: '#' },
            { type: 'practice', name: 'Windows Exercises.docx', url: '#' }
          ]
        },
        {
          id: 'mod3',
          title: 'Internet Browsing',
          description: 'Safe and effective internet browsing techniques',
          videoUrl: 'https://www.youtube.com/embed/1YBX4OCGmw4',
          duration: '15 mins',
          materials: [
            { type: 'pdf', name: 'Internet Safety Guide.pdf', url: '#' },
            { type: 'tips', name: 'Browsing Tips.pdf', url: '#' }
          ]
        },
        {
          id: 'mod4',
          title: 'Email Communication',
          description: 'Creating and managing email accounts and communication',
          videoUrl: 'https://www.youtube.com/embed/QMKX8znPYLg',
          duration: '18 mins',
          materials: [
            { type: 'pdf', name: 'Email Etiquette Guide.pdf', url: '#' },
            { type: 'template', name: 'Email Templates.docx', url: '#' }
          ]
        }
      ]
    }
  };

  const course = courses[id as keyof typeof courses];

  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="text-muted-foreground mb-4">The course you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/courses')}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Courses
        </Button>
      </div>
    );
  }

  const currentModuleData = course.modules[currentModule];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={() => navigate('/courses')}
          className="mb-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Courses
        </Button>
      </div>

      {/* Course Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-black rounded-t-lg overflow-hidden">
                <iframe
                  src={currentModuleData.videoUrl}
                  title={currentModuleData.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{currentModuleData.title}</h2>
                  <Badge variant="secondary">
                    <Clock size={14} className="mr-1" />
                    {currentModuleData.duration}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{currentModuleData.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Module Materials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText size={20} className="mr-2" />
                Course Materials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentModuleData.materials.map((material, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <FileText size={16} className="text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">{material.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{material.type}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Overview */}
          <Card>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <BookOpen size={14} />
                  <span>{course.moduleCount} modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={14} />
                  <span>{course.enrollments} enrolled</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.language}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Module List */}
          <Card>
            <CardHeader>
              <CardTitle>Course Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {course.modules.map((module, index) => (
                  <div
                    key={module.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      currentModule === index 
                        ? 'bg-primary/10 border-primary' 
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setCurrentModule(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentModule === index 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {currentModule === index ? <Play size={12} /> : index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{module.title}</p>
                          <p className="text-xs text-muted-foreground">{module.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
