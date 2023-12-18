import { UserDto } from '@/common/types/user/user.dto.ts';
import { create } from 'zustand';

type AuthStoreState = {
  currentUser: UserDto | null;
  setUser: (user: UserDto | null) => void;
};

const user = JSON.parse(localStorage.getItem('user')!);
export const useAuthStore = create<AuthStoreState>()((set) => ({
  currentUser: user,
  setUser: (user: UserDto | null) => {
    set(() => ({ currentUser: user }));
    localStorage.setItem('user', JSON.stringify(user));
  },
}));
