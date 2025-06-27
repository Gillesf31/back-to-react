import { create } from 'zustand';

type CounterState = {
  count: number;
  max: number;
  increment: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  max: 5,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ max: 10 }),
}));

export default useCounterStore;
