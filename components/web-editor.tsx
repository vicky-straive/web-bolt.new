'use client';

import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import EditorPane from '@/components/editor-pane';
import FeedbackPanel from '@/components/feedback-panel';
import StyleGuide from '@/components/style-guide';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export default function WebEditor() {
  const [sourceText, setSourceText] = useState<string>('Enter source text here...');
  const [translatedText, setTranslatedText] = useState<string>('Translation will appear here...');
  const [feedbackList, setFeedbackList] = useState<any[]>([]);

  const handleFeedbackAdd = (feedback: any) => {
    setFeedbackList([...feedbackList, feedback]);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Translation Editor</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Style Guide
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetTitle>Style Guide</SheetTitle>
            <StyleGuide />
          </SheetContent>
        </Sheet>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[60vh]">
        <ScrollArea className="h-[60vh] border rounded-lg">
          <EditorPane
            title="Source Text"
            text={sourceText}
            onChange={setSourceText}
            readOnly={false}
          />
        </ScrollArea>

        <ScrollArea className="h-[60vh] border rounded-lg">
          <EditorPane
            title="Translation"
            text={translatedText}
            onChange={setTranslatedText}
            onFeedbackAdd={handleFeedbackAdd}
            readOnly={false}
          />
        </ScrollArea>
      </div>

      <Separator className="my-6" />

      <FeedbackPanel feedbackList={feedbackList} />
    </div>
  );
}