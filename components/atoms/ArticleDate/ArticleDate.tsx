import { Text } from "components/atoms/Text/Text";
import { FC } from "react";

export const ArticleDate: FC<{ date: string; className?: string }> = ({ date, className }) => (
    <Text
        className={`bg-primaryLight px-3 text-secondary cursor-default select-none rounded-br-3xl rounded-tl-2xl rounded-bl-xl rounded-tr-2xl ${className}`}
    >
        {new Date(date).toLocaleString("en-US", {
            month: "long",
            year: "numeric",
            day: "numeric"
        })}
    </Text>
);
