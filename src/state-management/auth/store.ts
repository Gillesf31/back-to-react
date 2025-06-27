import { create } from 'zustand';

type AuthState = {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user: string) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
