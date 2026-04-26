/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, BookText } from 'lucide-react';
import { Story } from '../types';

interface BookCardProps {
  story: Story;
  onClick: (story: Story) => void;
  variant?: 'large' | 'compact';
  key?: string;
}

export default function BookCard({ story, onClick, variant = 'compact' }: BookCardProps) {
  if (variant === 'large') {
    return (
      <div 
        onClick={() => onClick(story)}
        className="relative overflow-hidden cursor-pointer group rounded-xl h-[400px] flex-1 min-w-[280px] bg-book-card p-6 flex flex-col justify-end transition-all hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="space-y-1">
          <h3 className="text-3xl font-bold leading-tight mb-2">
            {story.title}
          </h3>
          <p className="text-sm font-medium">{story.author}</p>
          <p className="text-xs opacity-70">{story.lastReadTime}</p>
          <p className="text-xs font-semibold">{story.currentArticle}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(story)}
      className="flex flex-col gap-3 cursor-pointer group min-w-[200px]"
    >
      <div className="relative overflow-hidden aspect-[3/4] rounded-xl bg-book-card p-6 flex flex-col justify-end transition-all hover:scale-105 hover:shadow-xl">
        <div className="space-y-0.5">
          <h4 className="text-xl font-bold leading-tight">
            {story.title}
          </h4>
          <p className="text-xs font-medium">{story.author}</p>
          <p className="text-[10px] opacity-70">{story.lastReadTime}</p>
          <p className="text-[10px] font-semibold">{story.currentArticle}</p>
        </div>
      </div>
    </div>
  );
}
