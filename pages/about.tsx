import { Text, Default, Heading, HeadingSize, Link, HeadingLevel } from "components";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About - Oscar Marion</title>
                <meta name="description" content="The homepage was rather short, right? Let's make up for that" />
            </Head>

            <Default>
                <Heading size={HeadingSize.Large} level={HeadingLevel.H1}>
                    The homepage was rather short, right? <span className="text-accent">Let's make up for that</span>.
                </Heading>
                <Text isParagraph>
                    I’m a 26-year-old web developer based in Brussels, Belgium. I am passionate about Front-End
                    architecture, DevOps and mostly everything which is tech-related.
                </Text>
                <Text isParagraph>
                    I am eager to discover and learn new languages and tools. As a self-taught developer, I do this by
                    myself all the time and there is nothing that drives me more.
                </Text>
                <Text isParagraph>
                    From September 2018 to February 2020, I worked as a full-time{" "}
                    <strong>Salesforce Commerce Cloud developer</strong> for{" "}
                    <Link href="https://etam-groupe.com/en/" isExternal>
                        Groupe Etam.
                    </Link>{" "}
                    High traffic retail websites are truly amazing to work on!
                </Text>
                <Text isParagraph>
                    Since April 2020, I’m a senior Saleforce / Front-End consultant at{" "}
                    <strong>Capgemini Belgium</strong>.
                </Text>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    About this website
                </Heading>
                <Text isParagraph>
                    This website was created using{" "}
                    <Link href="https://nextjs.org" isExternal>
                        NextJS
                    </Link>
                    , Typescript and Tailwind CSS. Hosting is provided by{" "}
                    <Link href="https://www.vercel.com" isExternal>
                        Vercel
                    </Link>{" "}
                    and code is{" "}
                    <Link href="https://github.com/oscar-marion/oscarmariondev" isExternal>
                        hosted
                    </Link>{" "}
                    on Github.
                </Text>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Get in touch
                </Heading>
                <Text isParagraph>
                    Feel free to contact me via{" "}
                    <Link href="https://www.linkedin.com/in/oscarmarion" isExternal>
                        Linkedin.
                    </Link>
                </Text>
            </Default>
        </>
    );
}
