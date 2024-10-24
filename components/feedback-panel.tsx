'use client';

import { AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FeedbackPanelProps {
  feedbackList: Array<{
    text: string;
    type: string;
    severity: string;
    timestamp: string;
  }>;
}

export default function FeedbackPanel({ feedbackList }: FeedbackPanelProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case 'major':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'minor':
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'grammatical':
        return 'bg-red-100 text-red-800';
      case 'context':
        return 'bg-yellow-100 text-yellow-800';
      case 'terminology':
        return 'bg-blue-100 text-blue-800';
      case 'style':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Feedback Log</h2>
      <ScrollArea className="h-[300px] rounded-md border">
        <div className="p-4 space-y-4">
          {feedbackList.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No feedback entries yet
            </p>
          ) : (
            feedbackList.map((feedback, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {getSeverityIcon(feedback.severity)}
                      <Badge
                        variant="secondary"
                        className={cn(
                          'text-xs font-medium',
                          getTypeColor(feedback.type)
                        )}
                      >
                        {feedback.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(feedback.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm font-medium mt-2">
                      Selected text: &quot;{feedback.text}&quot;
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}