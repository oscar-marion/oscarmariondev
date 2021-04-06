import { FC, useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Theme } from "utils/UserTheme";
import { Runtime } from "utils/Runtime";
import { AppContext } from "context/AppContext";

export const ThemeToggle: FC<{ className?: string }> = ({ className = "" }) => {
    const { colorTheme, setTheme } = useContext(AppContext);

    const isDarkMode = colorTheme === Theme.Light;

    const handleThemeToggle = () => {
        setTheme(colorTheme);
    };

    return (
        <div className={`items-center pl-2 w-10 ${className}`} onClick={handleThemeToggle} aria-hidden="true">
            {Runtime.isBrowser() && (
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                    size={28}
                    moonColor="var(--color-orange)"
                    sunColor="var(--color-orange-light)"
                />
            )}
        </div>
    );
};
