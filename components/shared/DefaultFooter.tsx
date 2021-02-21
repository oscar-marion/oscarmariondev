import { FC } from "react";
import { Footer, Link, Text, Navigation } from "components";

export const DefaultFooter: FC = () => (
    <Footer className="md:hidden">
        <Navigation className="grid grid-flow-col">
            <Link href="https://github.com/oscar-marion" isExternal>
                <Text>Github</Text>
            </Link>
            <Link href="https://www.linkedin.com/in/oscarmarion" isExternal>
                <Text>Linkedin</Text>
            </Link>
        </Navigation>
    </Footer>
);
