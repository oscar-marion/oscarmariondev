import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UserTheme, Theme } from "utils/UserTheme";

export const useTheme = (): [string, Dispatch<SetStateAction<"light" | "dark">>] => {
    const [theme, setTheme] = useState(UserTheme.get());
    const colorTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;

    useEffect(() => {
        const root = window.document.documentElement;
        root.removeAttribute("data-theme");
        root.setAttribute("data-theme", colorTheme);
        UserTheme.set(theme as Theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
};
