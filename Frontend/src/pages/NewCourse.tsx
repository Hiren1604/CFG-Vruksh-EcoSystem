import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Plus, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DraggableModuleList from '@/components/DraggableModuleList';

interface Module {
  id: string;
  title: string;
  description: string;
  videoFile?: File;
  audioFile?: File;
  pdfFile?: File;
  order: number;
}

const NewCourse = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    language: '',
    thumbnail: null as File | null
  });

  const [modules, setModules] = useState<Module[]>([]);
  const [currentModule, setCurrentModule] = useState({
    title: '',
    description: '',
    videoFile: null as File | null,
    audioFile: null as File | null,
    pdfFile: null as File | null
  });

  const categories = ['Marketing', 'Technology', 'Finance', 'Business', 'Healthcare', 'Education'];
  const languages = ['English', 'Hindi', 'Tamil', 'Bengali', 'Marathi', 'Telugu'];

  const addModule = () => {
    if (!currentModule.title.trim()) return;

    const newModule: Module = {
      id: Date.now().toString(),
      title: currentModule.title,
      description: currentModule.description,
      videoFile: currentModule.videoFile,
      audioFile: currentModule.audioFile,
      pdfFile: currentModule.pdfFile,
      order: modules.length + 1
    };

    setModules([...modules, newModule]);
    setCurrentModule({
      title: '',
      description: '',
      videoFile: null,
      audioFile: null,
      pdfFile: null
    });
  };

  const handleReorderModules = (reorderedModules: Module[]) => {
    setModules(reorderedModules);
  };

  const handleDeleteModule = (moduleId: string) => {
    const updatedModules = modules
      .filter(module => module.id !== moduleId)
      .map((module, index) => ({ ...module, order: index + 1 }));
    setModules(updatedModules);
  };

  const handleEditModule = (moduleId: string) => {
    const moduleToEdit = modules.find(module => module.id === moduleId);
    if (moduleToEdit) {
      setCurrentModule({
        title: moduleToEdit.title,
        description: moduleToEdit.description,
        videoFile: moduleToEdit.videoFile || null,
        audioFile: moduleToEdit.audioFile || null,
        pdfFile: moduleToEdit.pdfFile || null
      });
      handleDeleteModule(moduleId);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course Data:', courseData);
    console.log('Modules:', modules);
    // TODO: Implement course creation
    navigate('/ngo-courses');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Create New Course</h1>
          <p className="text-muted-foreground mt-2">
            Add a new course to your educational content.
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigate('/ngo-courses')}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Courses
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Course Information */}
        <Card>
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter course title"
                  value={courseData.title}
                  onChange={(e) => setCourseData({...courseData, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select onValueChange={(value) => setCourseData({...courseData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe what learners will gain from this course"
                rows={3}
                value={courseData.description}
                onChange={(e) => setCourseData({...courseData, description: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language *</Label>
                <Select onValueChange={(value) => setCourseData({...courseData, language: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(language => (
                      <SelectItem key={language} value={language}>{language}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Course Thumbnail</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer">
                  <Upload size={24} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload thumbnail</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setCourseData({...courseData, thumbnail: file});
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Add Module Section */}
        <Card>
          <CardHeader>
            <CardTitle>Add Course Module</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="moduleTitle">Module Title</Label>
                <Input
                  id="moduleTitle"
                  value={currentModule.title}
                  onChange={(e) => setCurrentModule({...currentModule, title: e.target.value})}
                  placeholder="Enter module title"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="moduleDescription">Module Description</Label>
              <Textarea
                id="moduleDescription"
                value={currentModule.description}
                onChange={(e) => setCurrentModule({...currentModule, description: e.target.value})}
                placeholder="Describe what learners will gain from this module"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="moduleVideo">Video File</Label>
                <Input
                  id="moduleVideo"
                  type="file"
                  accept="video/*"
                  onChange={(e) => setCurrentModule({...currentModule, videoFile: e.target.files?.[0] || null})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="moduleAudio">Audio File</Label>
                <Input
                  id="moduleAudio"
                  type="file"
                  accept="audio/*"
                  onChange={(e) => setCurrentModule({...currentModule, audioFile: e.target.files?.[0] || null})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modulePdf">PDF Resource</Label>
                <Input
                  id="modulePdf"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setCurrentModule({...currentModule, pdfFile: e.target.files?.[0] || null})}
                />
              </div>
            </div>

            <Button
              type="button"
              onClick={addModule}
              disabled={!currentModule.title.trim()}
              className="w-full"
            >
              <Plus size={16} className="mr-2" />
              Add Module
            </Button>
          </CardContent>
        </Card>

        {/* Modules List */}
        <Card>
          <CardHeader>
            <CardTitle>Course Modules ({modules.length})</CardTitle>
            <p className="text-sm text-muted-foreground">
              Drag and drop to reorder modules. The order will determine how learners progress through the course.
            </p>
          </CardHeader>
          <CardContent>
            <DraggableModuleList
              modules={modules}
              onReorderModules={handleReorderModules}
              onDeleteModule={handleDeleteModule}
              onEditModule={handleEditModule}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => navigate('/ngo-courses')}>
            Cancel
          </Button>
          <Button type="submit">
            Create Course
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewCourse;
