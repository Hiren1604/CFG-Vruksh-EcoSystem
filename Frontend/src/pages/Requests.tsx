import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Clock, CheckCircle, XCircle, User } from 'lucide-react';

const Requests = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const requests = [
    {
      id: '1',
      type: 'Course Request',
      title: 'Advanced Excel Training',
      description: 'We need a comprehensive Excel course covering advanced formulas, pivot tables, and data analysis.',
      requester: 'Mahila Shakti Foundation',
      status: 'pending',
      priority: 'high',
      date: '2024-01-15',
      category: 'Technology'
    },
    {
      id: '2',
      type: 'Content Update',
      title: 'Update Financial Literacy Course',
      description: 'Please update the financial literacy course with current banking procedures and digital payment methods.',
      requester: 'Rural Development NGO',
      status: 'approved',
      priority: 'medium',
      date: '2024-01-12',
      category: 'Finance'
    },
    {
      id: '3',
      type: 'Translation Request',
      title: 'Translate Marketing Course to Tamil',
      description: 'Request to translate the digital marketing fundamentals course to Tamil language.',
      requester: 'South India Women Collective',
      status: 'pending',
      priority: 'medium',
      date: '2024-01-10',
      category: 'Marketing'
    },
    {
      id: '4',
      type: 'Resource Request',
      title: 'Video Subtitles for Hearing Impaired',
      description: 'Add subtitles to all video content to make courses accessible for hearing-impaired learners.',
      requester: 'Inclusive Education Foundation',
      status: 'rejected',
      priority: 'high',
      date: '2024-01-08',
      category: 'Accessibility'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock size={16} />;
      case 'approved': return <CheckCircle size={16} />;
      case 'rejected': return <XCircle size={16} />;
      default: return <MessageSquare size={16} />;
    }
  };

  const filteredRequests = requests.filter(request => 
    statusFilter === 'all' || request.status === statusFilter
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Requests</h1>
        <p className="text-muted-foreground mt-2">
          View incoming requests for courses, updates, and resources.
        </p>
      </div>

      {/* Filter */}
      <div className="flex items-center space-x-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Requests</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map(request => (
          <Card key={request.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {request.type}
                    </Badge>
                    <Badge className={getPriorityColor(request.priority)}>
                      {request.priority} priority
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{request.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(request.status)}>
                    {getStatusIcon(request.status)}
                    <span className="ml-1 capitalize">{request.status}</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{request.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{request.requester}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{new Date(request.date).toLocaleDateString()}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {request.category}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRequests.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No requests found</h3>
          <p className="text-muted-foreground">
            There are no requests matching your current filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default Requests;
