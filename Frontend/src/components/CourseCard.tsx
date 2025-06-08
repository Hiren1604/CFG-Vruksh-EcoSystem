import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  thumbnail: string;
  moduleCount: number;
  enrollments: number;
  onViewCourse: (id: string) => void;
}

const CourseCard = ({
  id,
  title,
  description,
  category,
  language,
  thumbnail,
  moduleCount,
  enrollments,
  onViewCourse
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-emerald-50 to-blue-50 rounded-t-lg overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen size={48} className="text-emerald-500" />
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {title}
          </CardTitle>
          <Badge variant="secondary" className="ml-2 shrink-0">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <BookOpen size={14} />
              <span>{moduleCount} modules</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span>{enrollments} enrolled</span>
            </div>
          </div>
          <Badge variant="outline">{language}</Badge>
        </div>
        
        <Button 
          onClick={() => onViewCourse(id)}
          className="w-full bg-emerald-500 hover:bg-emerald-600"
        >
          View Course
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
