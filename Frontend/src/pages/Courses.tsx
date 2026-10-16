
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CourseCard from '@/components/CourseCard';
import { Plus, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Mock data - replace with actual data fetching
  const courses = [
    {
      id: '1',
      title: 'Digital Marketing Fundamentals',
      description: 'Learn the basics of digital marketing including social media, email marketing, and SEO strategies.',
      category: 'Marketing',
      language: 'English',
      thumbnail: '',
      moduleCount: 8,
      enrollments: 234
    },
    {
      id: '2',
      title: 'Computer Literacy for Beginners',
      description: 'Basic computer skills including using Windows, internet browsing, and email communication.',
      category: 'Technology',
      language: 'Hindi',
      thumbnail: '',
      moduleCount: 12,
      enrollments: 456
    },
    {
      id: '3',
      title: 'Financial Planning & Budgeting',
      description: 'Learn how to manage personal finances, create budgets, and plan for the future.',
      category: 'Finance',
      language: 'English',
      thumbnail: '',
      moduleCount: 6,
      enrollments: 189
    },
    {
      id: '4',
      title: 'Entrepreneurship Basics',
      description: 'Start your own business with this comprehensive guide to entrepreneurship.',
      category: 'Business',
      language: 'Hindi',
      thumbnail: '',
      moduleCount: 10,
      enrollments: 312
    }
  ];

  const categories = ['all', 'Marketing', 'Technology', 'Finance', 'Business', 'Healthcare', 'Education'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleViewCourse = (courseId: string) => {
    navigate(`/ngo-course-detail/${courseId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground mt-2">
            Manage your educational content and reach more learners.
          </p>
        </div>
        <Button 
          onClick={() => navigate('/ngo-courses/new')}
          className="mt-4 md:mt-0 bg-emerald-500 hover:bg-emerald-600"
        >
          <Plus size={20} className="mr-2" />
          Add New Course
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-48">
            <Filter size={16} className="mr-2" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            {...course}
            onViewCourse={handleViewCourse}
          />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No courses found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filters, or create a new course.
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
