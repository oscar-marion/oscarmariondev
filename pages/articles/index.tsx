import { Text, Default, ArticleHeader } from "components";
import Head from "next/head";
import { ArticlesLib } from "lib/Article.lib";

export default function Articles({ posts }: any) {
    return (
        <>
            <Head>
                <title>Articles - Oscar Marion</title>
            </Head>

            <Default>
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
