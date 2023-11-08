import { create } from 'zustand';

type Theme = 'dark' | 'light' | 'system';

type GlobalStoreState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const currenTheme = (localStorage.getItem('theme') as Theme) || 'system';
localStorage.setItem('theme', currenTheme);

const changeTheme = (thm: Theme) => {
  const root = window.document.documentElement;

  root.classList.remove('light', 'dark');

  if (thm === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    root.classList.add(systemTheme);
    return;
  }

  root.classList.add(thm);

  const themeColorMeta = document.getElementById('theme-color-meta');
  themeColorMeta?.setAttribute('content', thm === 'dark' ? 'black' : 'white');

  localStorage.setItem('theme', thm);
};
changeTheme(currenTheme);

export const useGlobalStore = create<GlobalStoreState>()((set) => ({
  theme: currenTheme,
  setTheme: (thm) => {
    changeTheme(thm);
    set(() => ({ theme: thm }));
  },
}));
