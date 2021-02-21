import { FC, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { Link, Text, ThemeToggle, Container, Header, Navigation, MenuLink } from "components";

export const DefaultHeader: FC = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu((mobileMenu) => !mobileMenu);
    };

    return (
        <Header>
            <Container className={`flex flex-wrap justify-between items-center `}>
                <ThemeToggle className="flex md:hidden" />
                <Navigation className="hidden md:grid md:grid-flow-col">
                    <Link href="https://github.com/oscar-marion" isExternal>
                        <Text>Github</Text>
                    </Link>
                    <Link href="https://www.linkedin.com/in/oscarmarion" isExternal>
                        <Text>Linkedin</Text>
                    </Link>
                </Navigation>
                <div className="md:hidden flex items-center justify-center" aria-label="Open the menu">
                    <Hamburger
                        toggled={mobileMenu}
                        toggle={toggleMenu}
                        direction="left"
                        rounded
                        color="var(--color-secondary)"
                    />
                </div>
                <Navigation
                    className={`${
                        mobileMenu ? "" : "hidden md:grid"
                    } pt-8 md:pt-0 mb-4 md:mb-0 grid-cols-2 md:grid-flow-col w-full md:w-auto`}
                >
                    <MenuLink href="/">Home</MenuLink>
                    <MenuLink href="/about">About</MenuLink>
                    <MenuLink href="/now">Now</MenuLink>
                    <MenuLink href="/articles">Articles</MenuLink>
                    <MenuLink href="/uses">Uses</MenuLink>
                    <ThemeToggle className="hidden md:flex" />
                </Navigation>
            </Container>
        </Header>
    );
};
