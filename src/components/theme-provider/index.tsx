'use client';

import {type ReactNode, useEffect} from 'react';
import {useThemeStore} from "@/lib/store";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const { theme } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return <>{children}</>;
}