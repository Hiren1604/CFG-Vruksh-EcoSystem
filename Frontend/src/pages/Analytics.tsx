import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Users, BookOpen, Clock, Download } from 'lucide-react';

const Analytics = () => {
  const enrollmentData = [
    { month: 'Jan', enrollments: 120, completions: 85 },
    { month: 'Feb', enrollments: 150, completions: 112 },
    { month: 'Mar', enrollments: 180, completions: 135 },
    { month: 'Apr', enrollments: 220, completions: 165 },
    { month: 'May', enrollments: 195, completions: 148 },
    { month: 'Jun', enrollments: 240, completions: 180 }
  ];

  const coursePerformance = [
    { course: 'Digital Marketing', views: 450, completions: 320, rating: 4.5 },
    { course: 'Computer Literacy', views: 380, completions: 290, rating: 4.2 },
    { course: 'Financial Planning', views: 320, completions: 240, rating: 4.3 },
    { course: 'Entrepreneurship', views: 290, completions: 200, rating: 4.1 },
    { course: 'Healthcare Basics', views: 180, completions: 130, rating: 4.4 }
  ];

  const categoryData = [
    { name: 'Technology', value: 35, color: '#10b981' },
    { name: 'Business', value: 25, color: '#3b82f6' },
    { name: 'Finance', value: 20, color: '#f59e0b' },
    { name: 'Healthcare', value: 12, color: '#ef4444' },
    { name: 'Other', value: 8, color: '#8b5cf6' }
  ];

  const engagementData = [
    { week: 'Week 1', avgTime: 25, sessions: 120 },
    { week: 'Week 2', avgTime: 32, sessions: 145 },
    { week: 'Week 3', avgTime: 28, sessions: 132 },
    { week: 'Week 4', avgTime: 35, sessions: 167 }
  ];

  const handleDownloadPDF = () => {
    console.log('Downloading analytics report as PDF...');
    // TODO: Implement PDF generation
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track your course performance and learner engagement.
          </p>
        </div>
        <Button 
          onClick={handleDownloadPDF}
          className="bg-emerald-500 hover:bg-emerald-600"
        >
          <Download size={16} className="mr-2" />
          Download PDF Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
            <Users className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,485</div>
            <p className="text-xs text-emerald-600">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Views</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,247</div>
            <p className="text-xs text-blue-600">+8% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">74%</div>
            <p className="text-xs text-green-600">+3% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31m</div>
            <p className="text-xs text-orange-600">+5m from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enrollments vs Completions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="enrollments" fill="#10b981" name="Enrollments" />
                <Bar dataKey="completions" fill="#3b82f6" name="Completions" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course Categories Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {categoryData.map((entry, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="avgTime" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Avg Time (minutes)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coursePerformance.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{course.course}</h4>
                    <p className="text-sm text-muted-foreground">
                      {course.views} views • {course.completions} completions
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">★ {course.rating}</div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round((course.completions / course.views) * 100)}% completion
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
