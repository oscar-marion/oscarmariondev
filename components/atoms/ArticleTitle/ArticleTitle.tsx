import { Link, Heading, HeadingLevel, HeadingSize } from "components";
import { FC } from "react";
import { ARTICLES_FOLDER } from "utils/Constants";

export const ArticleTitle: FC<{ slug?: string; title: string }> = ({ slug, title }) => {
    return (
        <>
            {slug ? (
                <Link href={`/${ARTICLES_FOLDER}/${slug}`}>
                    <Heading level={HeadingLevel.H2} className="link-effect" size={HeadingSize.Default}>
                        {title}
                    </Heading>
                </Link>
            ) : (
                <Heading level={HeadingLevel.H1} size={HeadingSize.Large}>
                    {title}
                </Heading>
            )}
        </>
    );
};
