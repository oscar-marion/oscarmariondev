import { FC } from "react";
import { Container, DefaultHeader, DefaultFooter } from "components";

export const Default: FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-full">
            <DefaultHeader />
            <Container className="wrapper md:mt-6 flex-auto mb-12">
                <main id="wrapper">{children}</main>
            </Container>
            <DefaultFooter />
        </div>
    );
};
