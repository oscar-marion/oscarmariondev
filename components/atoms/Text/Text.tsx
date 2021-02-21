import { FC } from "react";
import { TextProperties } from "./TextProperties";

export const Text: FC<TextProperties> = ({ isParagraph, className = "", children }) => {
    const Tag = isParagraph ? "p" : "span";
    return (
        <Tag className={`font-medium text-lg text-justify ${className} ${isParagraph ? "pb-2" : ""}`}>{children}</Tag>
    );
};
