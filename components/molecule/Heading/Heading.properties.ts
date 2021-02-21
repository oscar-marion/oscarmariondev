import { HeadingLevel } from "./HeadingLevel";
import { HeadingSize } from "./HeadingSize";

export interface HeadingProperties {
    className?: string;
    level?: HeadingLevel;
    size?: HeadingSize;
    isSubhead?: boolean;
}
