/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Volume2, ArrowLeft, MoreHorizontal } from 'lucide-react';
import { Story, Scene } from '../types';

interface ReaderProps {
  story: Story;
  onExit: () => void;
}

export default function Reader({ story, onExit }: ReaderProps) {
  const [currentSceneId, setCurrentSceneId] = useState(story.startSceneId);
  const [history, setHistory] = useState<string[]>([]);
  const [isReading, setIsReading] = useState(false);

  const currentScene = story.scenes.find(s => s.id === currentSceneId) || story.scenes[0];

  const goToScene = (id: string) => {
    setHistory(prev => [...prev, currentSceneId]);
    setCurrentSceneId(id);
    stopTTS();
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const prevId = newHistory.pop();
      setHistory(newHistory);
      if (prevId) setCurrentSceneId(prevId);
    } else {
      onExit();
    }
  };

  const speakText = () => {
    if (!window.speechSynthesis) return;
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(currentScene.text);
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => setIsReading(false);
    setIsReading(true);
    window.speechSynthesis.speak(utterance);
  };

  const stopTTS = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  useEffect(() => {
    return () => stopTTS();
  }, []);

  return (
    <div className="min-h-screen bg-book-bg flex flex-col items-center">
       {/* Reader Header */}
       <header className="w-full max-w-7xl px-10 h-20 flex items-center justify-between">
          <span onClick={onExit} className="text-2xl font-semibold text-white cursor-pointer">BookHub</span>
          <div className="flex items-center gap-10">
            <div className="w-72 h-10 bg-book-accent/30 rounded-md"></div>
            <span className="font-semibold text-white">Username</span>
          </div>
       </header>

       <main className="w-full max-w-7xl px-10 py-10 flex flex-col flex-1">
          <div className="mb-8">
            <h1 className="text-6xl text-white font-normal">Article 1</h1>
          </div>

          {/* Large Yellow Content Box */}
          <div className="flex-1 bg-book-card rounded-xl p-16 shadow-2xl relative flex flex-col min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSceneId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex justify-end mb-4">
                  <button onClick={speakText} className="p-2 bg-book-accent/10 rounded-full hover:bg-book-accent/20 transition-colors">
                    <Volume2 className={`w-6 h-6 text-book-accent ${isReading ? 'animate-bounce' : ''}`} />
                  </button>
                </div>
                <p className="text-3xl font-serif text-book-text leading-relaxed text-center mt-20">
                  {currentScene.text}
                </p>

                <div className="mt-auto flex flex-wrap justify-center gap-4 pt-10">
                   {currentScene.choices?.map((choice, i) => (
                      <button 
                        key={i} 
                        onClick={() => goToScene(choice.nextSceneId)}
                        className="px-8 py-3 bg-book-accent text-white rounded-md font-bold transition-transform hover:scale-105"
                      >
                        {choice.text}
                      </button>
                   ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center gap-4 py-10">
             <button 
              onClick={goBack}
              className="px-10 py-4 bg-book-accent/80 text-white font-bold rounded-lg hover:bg-book-accent transition-colors"
             >
               Last Page
             </button>
             <button 
              disabled={!currentScene.choices || currentScene.choices.length === 0}
              className="px-10 py-4 bg-book-accent/80 text-white font-bold rounded-lg hover:bg-book-accent transition-colors disabled:opacity-30"
             >
               Next Page
             </button>
          </div>
       </main>
    </div>
  );
}
