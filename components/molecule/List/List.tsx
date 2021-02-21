import { FC } from "react";

export const List: FC<{ children: Array<any> | any; isOrdered: boolean }> = ({ children, isOrdered = false }) => {
    const Tag = isOrdered ? "ol" : "ul";
    return (
        <Tag className={`${isOrdered ? "list-decimal" : "list-disc"} ml-4`}>
            {Array.isArray(children) ? children.map((child) => child) : children}
        </Tag>
    );
};
