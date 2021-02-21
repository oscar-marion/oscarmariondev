import { FC } from "react";
import { HeadingProperties } from "./Heading.properties";
import { HeadingLevel } from "./HeadingLevel";
import { HeadingSize } from "./HeadingSize";

export const Heading: FC<HeadingProperties> = ({
    size = HeadingSize.Default,
    level: Level = HeadingLevel.H2,
    className = "",
    isSubhead = false,
    children
}) => <Level className={`${isSubhead ? "mt-4" : ""} ${size} ${className}`}>{children}</Level>;
