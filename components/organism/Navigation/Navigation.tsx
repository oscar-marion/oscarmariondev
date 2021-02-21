import { FC } from "react";

export const Navigation: FC<{ className?: string; style?: any }> = ({ className = "", style = {}, children }) => (
    <nav className={`grid gap-4 ${className}`} style={style}>
        {children}
    </nav>
);
