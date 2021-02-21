import { FC } from "react";
import {
    Default,
    Link,
    ArticleHeader,
    Heading,
    HeadingLevel,
    HeadingSize,
    Text,
    CodeBlock,
    Divider,
    List
} from "components";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import { ArticlesLib } from "lib/Article.lib";

const components = {
    h2: ({ children }: any) => (
        <Heading level={HeadingLevel.H2} size={HeadingSize.Medium} className="text-accent">
            {children}
        </Heading>
    ),
    h3: ({ children }: any) => <Heading level={HeadingLevel.H3}>{children}</Heading>,
    p: ({ children }: any) => <Text isParagraph>{children}</Text>,
    a: ({ children, href }: any) => (
        <Link href={href} isExternal>
            {children}
        </Link>
    ),
    pre: CodeBlock,
    hr: Divider,
    ul: List,
    ol: ({ children }: any) => <List isOrdered>{children}</List>
};

const Article: FC<{ source: MdxRemote.Source; frontMatter: PostFrontMatter }> = ({ source, frontMatter }) => {
    const content = hydrate(source, { components });
    const { title, publishedOn, tags, summary } = frontMatter;
    const tagsArray = tags.split(",");
    return (
        <>
            <Head>
                <title>{frontMatter.title} - Oscar Marion</title>
                <meta name="description" content={summary} />
            </Head>

            <Default>
                <article className="table table-fixed w-full">
                    <ArticleHeader title={title} date={publishedOn} tags={tagsArray} />
                    {content}
                </article>
            </Default>
        </>
    );
};

export function getStaticPaths() {
    const slugs = ArticlesLib.getSlugs();

    return {
        paths: slugs.map(({ slug }) => ({ params: { slug } })),
        fallback: "blocking"
    };
}

export async function getStaticProps({ params }: any) {
    const { content, data } = ArticlesLib.getOne(params);
    const mdxSource = await renderToString(content, { scope: data, components });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    };
}

export default Article;
