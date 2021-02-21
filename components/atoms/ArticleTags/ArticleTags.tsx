import { FC } from "react";
import { Text } from "../Text/Text";

export const ArticleTags: FC<{ tags: Array<string>; className: string }> = ({ tags, className }) => (
    <div className={`flex flex-wrap ${className}`}>
        {tags.map((tag: string) => (
            <Text key={tag} className="mr-2 italic text-accent">
                <span className="text-accent">#</span>
                {tag}
            </Text>
        ))}
    </div>
);
