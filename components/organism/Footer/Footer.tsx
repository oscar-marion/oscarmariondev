import { FC } from "react";

export const Footer: FC<{ className?: string }> = ({ className = "", children }) => (
    <footer className={`flex justify-center border-t border-primaryLight pt-6 pb-8 px-4 ${className}`}>
        {children}
    </footer>
);
