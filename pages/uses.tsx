import { Text, Default, Heading, HeadingSize, Link } from "components";
import Head from "next/head";

export default function Uses() {
    return (
        <>
            <Head>
                <title>Use - Oscar Marion</title>
                <meta
                    name="description"
                    content="An up-to-date list of things I use in my daily life. Inspired by Wes Bos uses.tech."
                />
            </Head>

            <Default>
                <Heading size={HeadingSize.Large}>
                    Uses<span className="text-accent">.</span>
                </Heading>
                <Text isParagraph>
                    An up-to-date list of things I use in my daily life. Inspired by Wes Bos'{" "}
                    <Link href="https://uses.tech/" isExternal>
                        uses.tech
                    </Link>
                    .
                </Text>

                <Heading size={HeadingSize.Medium} className="text-accent">
                    Editor / Terminal
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            <Link href="https://kubernetes.io/" isExternal>
                                Visual Studio Code
                            </Link>{" "}
                            with these{" "}
                            <Link
                                href="https://gist.github.com/oscar-marion/92a2ee72f875d0510776fc614963f94c"
                                isExternal
                            >
                                settings
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://marketplace.visualstudio.com/items?itemName=cev.overnight" isExternal>
                                Overnight Italics
                            </Link>{" "}
                            theme by{" "}
                            <Link href="https://github.com/cevr" isExternal>
                                cevr
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://github.com/tonsky/FiraCode" isExternal>
                                Fira Code
                            </Link>{" "}
                            font by{" "}
                            <Link href="https://github.com/tonsky" isExternal>
                                tonsky
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            I use{" "}
                            <Link href="https://iterm2.com/" isExternal>
                                iTerm2
                            </Link>{" "}
                            or{" "}
                            <Link href="https://github.com/microsoft/terminal" isExternal>
                                Windows Terminal
                            </Link>{" "}
                            depending on which OS I'm working with.
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    CLI
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            Zsh with{" "}
                            <Link href="https://ohmyz.sh/" isExternal>
                                oh-my-zsh
                            </Link>{" "}
                            and the sleek{" "}
                            <Link href="https://github.com/romkatv/powerlevel10k" isExternal>
                                Powerlevel10k
                            </Link>{" "}
                            theme.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://github.com/dandavison/delta" isExternal>
                                Delta
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://brew.sh/" isExternal>
                                Homebrew
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://pygments.org/docs/cmdline/" isExternal>
                                Pygmentize
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://github.com/sharkdp/bat" isExternal>
                                Bat
                            </Link>
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Desktop apps
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            <Link href="https://www.alfredapp.com/" isExternal>
                                Alfred
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://1password.com/" isExternal>
                                1Password
                            </Link>{" "}
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://sparkmailapp.com/en" isExternal>
                                Spark
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://justgetflux.com/" isExternal>
                                Flux
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://magnet.crowdcafe.com/" isExternal>
                                Magnet
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://github.com/dwarvesf/hidden" isExternal>
                                Hidden Bar
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://1password.com/" isExternal>
                                1Password
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://bear.app/" isExternal>
                                Bear
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://runjs.app/" isExternal>
                                RunJS
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://www.balena.io/etcher/" isExternal>
                                balenaEtcher
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://macpaw.com/cleanmymac" isExternal>
                                CleanMyMac X
                            </Link>
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Computer setup
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>2019 15" Macbook Pro 2.3GHz 8-Core i9 with 32GB of RAM.</Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://www.caldigit.com/fr/ts3-plus-fr/" isExternal>
                                CalDigit TS3 Plus
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Custom-built PC rocking an Intel 10700K, an RTX 3080 and 64GB of RAM inside the{" "}
                            <Link href="https://www.phanteks.com/Enthoo-Pro2-TemperedGlass.html" isExternal>
                                Enthoo Pro 2
                            </Link>{" "}
                            case.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            4K 34" 120Hz{" "}
                            <Link
                                href="https://rog.asus.com/monitors/32-to-34-inches/rog-swift-pg349q-model/"
                                isExternal
                            >
                                Asus ROG PG349Q
                            </Link>{" "}
                            with an Amazon Basics{" "}
                            <Link
                                href="https://www.amazon.com/AmazonBasics-Premium-Dual-Monitor-Stand/dp/B00MIBN71I"
                                isExternal
                            >
                                monitor stand
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://drop.com/buy/drop-ctrl-mechanical-keyboard" isExternal>
                                Drop CTRL keyboard
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link
                                href="https://www.logitech.com/en-us/products/mice/mx-master-3.910-005620.html"
                                isExternal
                            >
                                MX Master 3
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="https://www.logitechg.com/en-us/products/gaming-mice/pro-wireless-mouse.910-005270.html"
                                isExternal
                            >
                                G PRO Wireless
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://jdslabs.com/product/objective2-odac-rev-b/" isExternal>
                                Objective2+ODAC Combo Rev B
                            </Link>{" "}
                            (discontinued)
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://www.bluemic.com/en-us/products/yeti/" isExternal>
                                Blue Yeti
                            </Link>
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Hosting
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            Docker on{" "}
                            <Link href="https://kubernetes.io/" isExternal>
                                K8S
                            </Link>{" "}
                            with{" "}
                            <Link href="https://rancher.com/" isExternal>
                                Rancher
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link href="https://www.heroku.com/" isExternal>
                                Heroku
                            </Link>
                            ,{" "}
                            <Link href="https://vercel.com/" isExternal>
                                Vercel
                            </Link>{" "}
                            and{" "}
                            <Link href="https://www.netlify.com/" isExternal>
                                Netlify
                            </Link>
                            .
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            I still manage a few{" "}
                            <Link href="https://www.ovh.com/" isExternal>
                                OVH
                            </Link>{" "}
                            servers and hosting plans for some old Wordpress websites.
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Network and homelab
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            <Link
                                href="https://eu.store.ui.com/collections/unifi-network-routing-switching/products/udm-pro"
                                isExternal
                            >
                                UniFi Dream Machine Pro
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            <Link
                                href="https://eu.store.ui.com/collections/unifi-network-access-points/products/unifi-nanohd"
                                isExternal
                            >
                                UniFi nanoHD Access Point
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Server running an AMD Ryzen 5 2600X, 16GB RAM in an{" "}
                            <Link href="https://www.fractal-design.com/products/cases/node/node-304/black/" isExternal>
                                Node 304
                            </Link>{" "}
                            case.
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            Several{" "}
                            <Link href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/" isExternal>
                                Raspberry Pi 4
                            </Link>
                            s.
                        </Text>
                    </li>
                </ul>
                <Heading size={HeadingSize.Medium} className="text-accent">
                    Backup strategy
                </Heading>
                <ul className="list-disc pl-5 mb-4">
                    <li>
                        <Text isParagraph>
                            <Link href="https://www.backblaze.com/" isExternal>
                                Backblaze
                            </Link>
                        </Text>
                    </li>
                    <li>
                        <Text isParagraph>
                            TimeMachine on a{" "}
                            <Link href="https://www.backblaze.com/" isExternal>
                                Synology DS718+
                            </Link>
                        </Text>
                    </li>
                </ul>
            </Default>
        </>
    );
}
