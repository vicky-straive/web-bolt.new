'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface EditorPaneProps {
  title: string;
  text: string;
  onChange: (value: string) => void;
  onFeedbackAdd?: (feedback: any) => void;
  readOnly?: boolean;
}

export default function EditorPane({
  title,
  text,
  onChange,
  onFeedbackAdd,
  readOnly = false,
}: EditorPaneProps) {
  const [selectedText, setSelectedText] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const [severity, setSeverity] = useState('');

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      setSelectedText(selection.toString());
    }
  };

  const handleFeedbackAdd = () => {
    if (onFeedbackAdd && selectedText && feedbackType && severity) {
      onFeedbackAdd({
        text: selectedText,
        type: feedbackType,
        severity,
        timestamp: new Date().toISOString(),
      });
      setSelectedText('');
      setFeedbackType('');
      setSeverity('');
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        {!readOnly && onFeedbackAdd && (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'ml-2',
                  selectedText ? 'border-primary' : 'border-muted'
                )}
                disabled={!selectedText}
              >
                Add Feedback
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Selected Text</h4>
                  <p className="text-sm text-muted-foreground">{selectedText}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Feedback Type</label>
                  <Select onValueChange={setFeedbackType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grammatical">Grammatical Error</SelectItem>
                      <SelectItem value="context">Context Issue</SelectItem>
                      <SelectItem value="terminology">Terminology Issue</SelectItem>
                      <SelectItem value="style">Style Guide Violation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Severity</label>
                  <Select onValueChange={setSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="major">Major</SelectItem>
                      <SelectItem value="minor">Minor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  className="w-full"
                  onClick={handleFeedbackAdd}
                  disabled={!feedbackType || !severity}
                >
                  Submit Feedback
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <Textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onMouseUp={handleTextSelection}
        className="min-h-[200px] resize-none"
        readOnly={readOnly}
      />
    </div>
  );
}