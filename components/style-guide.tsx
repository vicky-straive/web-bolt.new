'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export default function StyleGuide() {
  return (
    <ScrollArea className="h-[80vh] pr-4">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Style Guide</h2>
        <Separator />
        
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">General Guidelines</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain consistent terminology throughout the translation</li>
            <li>Use active voice when possible</li>
            <li>Keep sentences concise and clear</li>
            <li>Maintain original formatting and punctuation</li>
          </ul>
        </section>

        <Separator />

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Terminology</h3>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Use the approved terminology list for consistency across all translations.
            </p>
            <div className="border rounded-lg p-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-medium">Source Term</th>
                    <th className="text-left font-medium">Approved Translation</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2">user interface</td>
                    <td className="py-2">interfaz de usuario</td>
                  </tr>
                  <tr>
                    <td className="py-2">settings</td>
                    <td className="py-2">configuración</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Formatting Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain original capitalization unless language rules differ</li>
            <li>Preserve original punctuation marks</li>
            <li>Keep HTML tags and placeholders intact</li>
            <li>Maintain consistent spacing</li>
          </ul>
        </section>
      </div>
    </ScrollArea>
  );
}