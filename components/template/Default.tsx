import { FC } from "react";
import { Container, DefaultHeader, DefaultFooter } from "components";

export const Default: FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <DefaultHeader />
            <Container className="wrapper md:mt-6 flex-grow mb-12">
                <main id="wrapper">{children}</main>
            </Container>
            <DefaultFooter />
        </div>
    );
};
