import { Runtime } from "./Runtime";

export enum Theme {
    Light = "light",
    Dark = "dark"
}

export class UserTheme {
    static get(): "light" | "dark" {
        if (
            (Runtime.isBrowser() && localStorage.theme === "light") ||
            (Runtime.isBrowser() &&
                !("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: light)").matches)
        ) {
            return "light";
        } else {
            return "dark";
        }
    }
    static set(theme: Theme): void {
        if (Runtime.isBrowser()) {
            localStorage.theme = theme;
        }
    }
}
