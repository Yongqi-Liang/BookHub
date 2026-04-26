/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Character {
  id: string;
  name: string;
  avatar?: string;
}

export interface Scene {
  id: string;
  text: string;
  backgroundImage?: string;
  characterId?: string;
  choices?: Choice[];
  music?: string;
}

export interface Choice {
  text: string;
  nextSceneId: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  lastReadTime?: string;
  currentArticle?: string;
  scenes: Scene[];
  startSceneId: string;
}
