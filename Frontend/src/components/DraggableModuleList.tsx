
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GripVertical, FileText, Video, Trash2, Edit, Music } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  videoFile?: File;
  audioFile?: File;
  pdfFile?: File;
  order: number;
}

interface DraggableModuleListProps {
  modules: Module[];
  onReorderModules: (reorderedModules: Module[]) => void;
  onDeleteModule: (moduleId: string) => void;
  onEditModule: (moduleId: string) => void;
}

const DraggableModuleList = ({ 
  modules, 
  onReorderModules, 
  onDeleteModule, 
  onEditModule 
}: DraggableModuleListProps) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(modules);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order numbers
    const reorderedModules = items.map((module, index) => ({
      ...module,
      order: index + 1
    }));

    onReorderModules(reorderedModules);
  };

  if (modules.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No modules added yet. Add your first module above.
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="modules">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            {modules.map((module, index) => (
              <Draggable key={module.id} draggableId={module.id} index={index}>
                {(provided, snapshot) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`transition-shadow ${
                      snapshot.isDragging ? 'shadow-lg' : 'hover:shadow-md'
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            {...provided.dragHandleProps}
                            className="cursor-grab active:cursor-grabbing p-1 hover:bg-muted rounded"
                          >
                            <GripVertical size={16} className="text-muted-foreground" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Module {module.order}
                          </Badge>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEditModule(module.id)}
                          >
                            <Edit size={14} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDeleteModule(module.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{module.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        {module.videoFile && (
                          <div className="flex items-center space-x-1 text-blue-600">
                            <Video size={14} />
                            <span>Video: {module.videoFile.name}</span>
                          </div>
                        )}
                        {module.audioFile && (
                          <div className="flex items-center space-x-1 text-purple-600">
                            <Music size={14} />
                            <span>Audio: {module.audioFile.name}</span>
                          </div>
                        )}
                        {module.pdfFile && (
                          <div className="flex items-center space-x-1 text-green-600">
                            <FileText size={14} />
                            <span>PDF: {module.pdfFile.name}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableModuleList;
