import { Text, Default, ArticleHeader, Heading, HeadingSize, HeadingLevel } from "components";
import Head from "next/head";
import { ArticlesLib } from "lib/Article.lib";

export default function Articles({ posts }: any) {
    return (
        <>
            <Head>
                <title>Articles - Oscar Marion</title>
            </Head>

            <Default>
                <Heading size={HeadingSize.Large} level={HeadingLevel.H1}>
                    Articles and <span className="text-accent">thoughts</span>.
                </Heading>
                {posts.map(({ title, summary, publishedOn, tags, slug }: any) => {
                    const tagsArray = tags.split(",");
                    return (
                        <article key={title} className="mb-12">
                            <ArticleHeader slug={slug} title={title} date={publishedOn} tags={tagsArray} />
                            <Text isParagraph> {summary}</Text>
                        </article>
                    );
                })}
            </Default>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: { posts: ArticlesLib.getSlugs() }
    };
}
