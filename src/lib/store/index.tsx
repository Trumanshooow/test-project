import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

interface MenuState {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}
const getInitialTheme = (): Theme => {
    const storedData = localStorage.getItem('theme-storage');
    if (storedData) {
        try {
            const parsedData = JSON.parse(storedData);
            return parsedData.state?.theme === 'dark' ? 'dark' : 'light';
        } catch (error) {
            console.error('خطا در پارس کردن داده‌های LocalStorage:', error);
        }
    }
    return 'light';
};
export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: getInitialTheme(),
            toggleTheme: () => set((state) => ({theme: state.theme === 'light' ? 'dark' : 'light'})),
            setTheme: (theme) => set({theme}),
        }),
        {
            name: 'theme-storage',
        }
    )
);

export const useMenuStore = create<MenuState>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));