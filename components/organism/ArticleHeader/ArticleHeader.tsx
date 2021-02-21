import { ArticleDate, ArticleTags, ArticleTitle } from "components";
import { FC } from "react";

export const ArticleHeader: FC<{ slug?: string; title: string; tags: Array<string>; date: string }> = ({
    slug,
    title,
    tags,
    date
}: any) => {
    return (
        <header className="flex flex-wrap items-start flex-col md:flex-row md:items-center md:justify-between">
            <ArticleTitle slug={slug} title={title} />
            <div className="flex flex-wrap w-full mb-4 justify-between">
                <ArticleTags tags={tags} className="mb-2 sm:mb-0" />
                <ArticleDate date={date} className="mb-2 sm:mb-0" />
            </div>
        </header>
    );
};
