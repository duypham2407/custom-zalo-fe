'use client';

import { create } from 'zustand';

interface Broadcast {
  id: string;
  title: string;
  status: 'pending' | 'running' | 'done' | 'failed';
  progress: number;
}

interface BroadcastStore {
  broadcasts: Broadcast[];
  currentBroadcast: Broadcast | null;
  setBroadcasts: (broadcasts: Broadcast[]) => void;
  setCurrentBroadcast: (broadcast: Broadcast) => void;
  updateProgress: (id: string, progress: number) => void;
}

export const useBroadcastStore = create<BroadcastStore>((set) => ({
  broadcasts: [],
  currentBroadcast: null,
  setBroadcasts: (broadcasts) => set({ broadcasts }),
  setCurrentBroadcast: (broadcast) => set({ currentBroadcast: broadcast }),
  updateProgress: (id, progress) =>
    set((state) => ({
      broadcasts: state.broadcasts.map((b) =>
        b.id === id ? { ...b, progress } : b
      ),
    })),
}));

