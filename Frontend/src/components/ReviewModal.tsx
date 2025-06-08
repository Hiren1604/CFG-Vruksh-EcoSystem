import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Lightbulb, Target, BookOpen, Star, ListChecks } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: {
    courseOverview?: {
      summary: string;
      keyTopics: string[];
      uniqueValue: string;
    };
    contentQuality?: {
      rating: number;
      strengths: string[];
      areasForImprovement: string[];
      comprehensiveness: number;
      clarity: number;
      practicalValue: number;
    };
    learningObjectives?: {
      alignment: number;
      objectives: string[];
      effectiveness: number;
      progression: number;
    };
    targetAudience?: {
      suitability: number;
      difficultyLevel: string;
      prerequisites: string[];
      learnerNeeds: string[];
    };
    recommendations?: {
      content: string[];
      delivery: string[];
      resources: string[];
      priority: string;
    };
  } | null;
  request?: {
    description: string;
    contextualDescription: string;
  };
}

export function ReviewModal({ isOpen, onClose, review, request }: ReviewModalProps) {
  if (!review) return null;

  const sections = [
    {
      number: 1,
      title: "Course Description",
      content: request?.description,
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      number: 2,
      title: "Course Overview",
      content: review.courseOverview?.summary,
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      topics: review.courseOverview?.keyTopics,
      uniqueValue: review.courseOverview?.uniqueValue
    },
    {
      number: 3,
      title: "Content Quality Assessment",
      content: null,
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-50",
      metrics: {
        rating: review.contentQuality?.rating,
        strengths: review.contentQuality?.strengths,
        improvements: review.contentQuality?.areasForImprovement,
        comprehensiveness: review.contentQuality?.comprehensiveness,
        clarity: review.contentQuality?.clarity,
        practicalValue: review.contentQuality?.practicalValue
      }
    },
    {
      number: 4,
      title: "Learning Objectives",
      content: null,
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      metrics: {
        alignment: review.learningObjectives?.alignment,
        objectives: review.learningObjectives?.objectives,
        effectiveness: review.learningObjectives?.effectiveness,
        progression: review.learningObjectives?.progression
      }
    },
    {
      number: 5,
      title: "Target Audience",
      content: null,
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      metrics: {
        suitability: review.targetAudience?.suitability,
        difficultyLevel: review.targetAudience?.difficultyLevel,
        prerequisites: review.targetAudience?.prerequisites,
        learnerNeeds: review.targetAudience?.learnerNeeds
      }
    },
    {
      number: 6,
      title: "Recommendations",
      content: null,
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      metrics: {
        content: review.recommendations?.content,
        delivery: review.recommendations?.delivery,
        resources: review.recommendations?.resources,
        priority: review.recommendations?.priority
      }
    }
  ];

  const renderMetrics = (metrics: any) => {
    if (!metrics) return null;

    return (
      <div className="space-y-4">
        {metrics.rating && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Overall Rating</span>
              <span className="text-sm font-bold text-gray-900">{metrics.rating}%</span>
            </div>
            <Progress value={metrics.rating} className="h-2" />
          </div>
        )}
        
        {metrics.strengths && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {metrics.strengths.map((strength: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                  {strength}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {metrics.improvements && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Areas for Improvement</h4>
            <div className="flex flex-wrap gap-2">
              {metrics.improvements.map((improvement: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800">
                  {improvement}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {metrics.objectives && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Learning Objectives</h4>
            <div className="flex flex-wrap gap-2">
              {metrics.objectives.map((objective: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                  {objective}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {metrics.prerequisites && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Prerequisites</h4>
            <div className="flex flex-wrap gap-2">
              {metrics.prerequisites.map((prerequisite: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                  {prerequisite}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {metrics.content && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Content Recommendations</h4>
            <div className="flex flex-wrap gap-2">
              {metrics.content.map((rec: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-yellow-100 text-yellow-800">
                  {rec}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {metrics.difficultyLevel && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Difficulty Level</h4>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
              {metrics.difficultyLevel}
            </Badge>
          </div>
        )}

        {metrics.priority && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Priority Level</h4>
            <Badge variant="secondary" className={`${
              metrics.priority === 'High' ? 'bg-red-100 text-red-800' :
              metrics.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {metrics.priority}
            </Badge>
          </div>
        )}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0 bg-white">
        <DialogHeader className="px-8 py-6 border-b bg-gray-50">
          <DialogTitle className="text-2xl font-bold text-gray-900">AI Review Report</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(85vh-8rem)]">
          <div className="p-8 space-y-8">
            {sections.map((section) => (
              <Card key={section.number} className={`p-6 border-2 hover:shadow-lg transition-all ${section.bgColor}`}>
                <div className="flex items-start gap-6">
                  <div className={`p-3 rounded-xl ${section.color} bg-white shadow-sm`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-lg font-bold text-gray-700">
                        {section.number}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    <Separator className="my-2" />
                    {section.metrics ? (
                      renderMetrics(section.metrics)
                    ) : (
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {section.content}
                        </p>
                        {section.topics && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Topics</h4>
                            <div className="flex flex-wrap gap-2">
                              {section.topics.map((topic: string, index: number) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {section.uniqueValue && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Unique Value</h4>
                            <p className="text-gray-700">{section.uniqueValue}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 