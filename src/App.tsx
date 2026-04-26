/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import Reader from './components/Reader';
import { mockStories } from './data/mockStories';
import { Story } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
  };

  return (
    <div className="min-h-screen">
      {!selectedStory && (
        <Navbar 
          onHomeClick={() => setSelectedStory(null)} 
          isDarkMode={false}
          toggleDarkMode={() => {}} 
        />
      )}

      <main className={`${selectedStory ? '' : 'max-w-7xl mx-auto px-10 pt-32 pb-20'}`}>
        <AnimatePresence mode="wait">
          {!selectedStory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <header className="mb-12">
                <h1 className="text-6xl font-normal text-white mb-8">
                  Read Everywhere
                </h1>
              </header>

              {/* Continue Reading Section */}
              <section className="mb-16">
                <div className="flex flex-wrap gap-6">
                  {mockStories.slice(0, 4).map(story => (
                    <BookCard 
                      key={story.id} 
                      story={story} 
                      onClick={handleStoryClick} 
                      variant="large" 
                    />
                  ))}
                </div>
              </section>

              {/* Hot Suggest Section */}
              <section>
                <div className="mb-8">
                  <h2 className="text-6xl font-normal text-white">Hot Suggest</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  <BookCard story={mockStories[0]} onClick={handleStoryClick} variant="large" />
                  <BookCard story={mockStories[1]} onClick={handleStoryClick} variant="large" />
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="reader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Reader 
                story={selectedStory} 
                onExit={() => setSelectedStory(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
