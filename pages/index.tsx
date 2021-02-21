import Head from "next/head";
import { Default, Heading, HeadingSize, HeadingLevel, Astronaut } from "components";

export default function Home() {
    return (
        <>
            <Head>
                <title>Oscar Marion, Salesforce & Front-End developer in Brussels</title>
                <meta
                    name="description"
                    content="I'm a 25 years old French web developer based in Brussels, currently working on Salesforce and Front-End projects."
                />
            </Head>

            <Default>
                <Heading className="text-secondary text-center" level={HeadingLevel.H1} size={HeadingSize.Huge}>
                    Hi there, I'm <span className="text-accent">Oscar</span>.
                </Heading>
                <Heading
                    className="text-secondary text-center mt-8 max-w-3xl mx-auto"
                    level={HeadingLevel.H2}
                    size={HeadingSize.Medium}
                >
                    I'm a French web developer based in Brussels, currently working on Salesforce and React projects.
                </Heading>
                <Astronaut />
            </Default>
        </>
    );
}
