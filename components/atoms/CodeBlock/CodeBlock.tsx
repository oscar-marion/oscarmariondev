import { FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

export const CodeBlock: FC = ({ children }) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(Prism.highlightAll, 1000);
        }
    }, []);
    return <pre className={`overflow-auto mb-4 p-4 rounded-xl bg-blue border-white border-2`}>{children}</pre>;
};
