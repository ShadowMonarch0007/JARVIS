"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
// import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        window.location.reload();
    };

    if (!mounted) {
        return null;
    }

    return (
        // <BackgroundGradient>
            <Button variant="outline" className="rounded-full" size="icon" onClick={toggleTheme}>
                {theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                )}
            </Button>
        // </BackgroundGradient>
    );
}
