import { Text, Default, Heading, HeadingSize, Link, HeadingLevel } from "components";
import Head from "next/head";

export default function Now() {
    return (
        <>
            <Head>
                <title>Now - Oscar Marion</title>
                <meta name="description" content="What I'm doing now." />
            </Head>

            <Default>
                <Heading size={HeadingSize.Large} level={HeadingLevel.H1}>
                    What I'm doing <span className="text-accent">now</span>.
                </Heading>
                <Text isParagraph className="italic">
                    (Last update on 08/04/2020)
                </Text>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            Exploring Belgium as much as I can, while most things remain closed because of the pandemic.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Drafting blog articles for this website as well as for the Capgemini Belgium Customer
                            Experience{" "}
                            <Link href="https://medium.com/capgemini-web-development" isExternal>
                                Medium page
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Working on my homelab, running Proxmox on a custom built server and tinkering with a few
                            Raspberry Pi, following some of{" "}
                            <Link href="https://www.youtube.com/channel/UCOk-gHyjcWZNj3Br4oxwh0A" isExternal>
                                Techno Tim
                            </Link>{" "}
                            videos.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Learning more about networking while setting up a{" "}
                            <Link href="https://www.ui.com/" isExternal>
                                Unifi
                            </Link>{" "}
                            network.
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Web development
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            Building React Native applications using Tailwind, Typescript and{" "}
                            <Link href="https://appcenter.ms/" isExternal>
                                App Center
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Using{" "}
                            <Link href="https://github.com/ingydotnet/git-subrepo" isExternal>
                                git-subrepo
                            </Link>{" "}
                            to share code between projects.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Working on my Python skills with some{" "}
                            <Link href="https://flask.palletsprojects.com/en/1.1.x/" isExternal>
                                Flask
                            </Link>{" "}
                            side projects.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Switching to{" "}
                            <Link href="https://github.com/vitejs/vite" isExternal>
                                Vite
                            </Link>{" "}
                            for my React apps.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Creating VSCode extensions with{" "}
                            <Link href="https://github.com/sveltejs/kit" isExternal>
                                SvelteKit
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Setting up Gitlab pipelines for CI/CD environments, with a self hosted gitlab runner.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Learning about{" "}
                            <Link href="https://react-query.tanstack.com/" isExternal>
                                React Query
                            </Link>
                            .
                        </Text>
                    </li>
                </ul>
            </Default>
        </>
    );
}
