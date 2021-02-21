import { createContext, FC } from "react";
import { useTheme } from "hooks/useTheme";

export const AppContext = createContext<{ colorTheme?: any; setTheme?: any }>({});

export const AppWrapper: FC = ({ children }) => {
    const [colorTheme, setTheme] = useTheme();
    return <AppContext.Provider value={{ colorTheme, setTheme }}>{children}</AppContext.Provider>;
};
