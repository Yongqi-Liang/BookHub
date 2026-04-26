/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Story } from '../types';

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Neon Echoes',
    author: 'Aiden Thorne',
    description: 'In the heart of Neo-Tokyo, a data thief discovers a secret that could rewrite reality.',
    coverImage: 'https://picsum.photos/seed/cyberpunk/600/800',
    lastReadTime: '2 hours ago',
    currentArticle: 'Chapter 2: The Glitch',
    startSceneId: 's1',
    scenes: [
      {
        id: 's1',
        text: 'The rain sizzles against the neon tubes of the "Electric Dragon" bar. You adjust your neural dampener, waiting for the contact.',
        backgroundImage: 'https://picsum.photos/seed/rainy-neon/1920/1080?blur=2',
        choices: [
          { text: 'Order a synthetic gin', nextSceneId: 's2' },
          { text: 'Scan the room for the contact', nextSceneId: 's3' }
        ]
      },
      {
        id: 's2',
        text: 'The bartender slides a glowing blue liquid toward you. "Careful," he whispers, "this one has a bite." As you sip, a woman in a silver trench coat sits next to you.',
        choices: [
          { text: 'Acknowledge her', nextSceneId: 's3' }
        ]
      },
      {
        id: 's3',
        text: '"You have the drive?" she asks. Her eyes reflect the flickering neon of the street. Before you can answer, the front door bursts open. Soldiers in black tactical gear sweep the room.',
        choices: [
          { text: 'Run for the back exit', nextSceneId: 's4' },
          { text: 'Draw your pulse pistol', nextSceneId: 's5' }
        ]
      },
      {
        id: 's4',
        text: 'You dive through the kitchen, dodging holographic advertisements. The city is a maze of light and shadow.',
        choices: []
      },
      {
          id: 's5',
          text: 'The room erupts into chaos. Your pulse pistol hums as you take cover behind a heavy metal table.',
          choices: []
      }
    ]
  },
  {
    id: '2',
    title: 'Whispers of the Eternal Forest',
    author: 'Elara Vance',
    description: 'A young mage must navigate a forest that remembers every step you take.',
    coverImage: 'https://picsum.photos/seed/forest/600/800',
    lastReadTime: 'Yesterday',
    currentArticle: 'Prologue: The Awakening',
    startSceneId: 'f1',
    scenes: [
      {
        id: 'f1',
        text: 'The trees here don\'t grow; they watch. The air is thick with the scent of pine and ancient magic.',
        backgroundImage: 'https://picsum.photos/seed/magic-forest/1920/1080?blur=1',
        choices: [
          { text: 'Speak a word of light', nextSceneId: 'f2' },
          { text: 'Listen to the whispers', nextSceneId: 'f3' }
        ]
      },
      {
        id: 'f2',
        text: 'Your palm glows with a soft, amber light. The shadows shrink back, revealing a path paved with silver leaves.',
        choices: []
      }
    ]
  },
  {
    id: '3',
    title: 'The Silent Void',
    author: 'Captain Marks',
    description: 'Stranded on a dying starship, you must make choices to survive the infinite dark.',
    coverImage: 'https://picsum.photos/seed/space/600/800',
    lastReadTime: '3 days ago',
    currentArticle: 'Day 12: Oxygen Low',
    startSceneId: 'v1',
    scenes: [
      {
        id: 'v1',
        text: 'Alarms are the only music you hear now. The cockpit is freezing, and the star chart is offline.',
        backgroundImage: 'https://picsum.photos/seed/starship/1920/1080',
        choices: [
          { text: 'Reboot the life support', nextSceneId: 'v2' },
          { text: 'Send a distress signal', nextSceneId: 'v3' }
        ]
      }
    ]
  }
];
