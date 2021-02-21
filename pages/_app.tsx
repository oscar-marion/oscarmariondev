import { AppWrapper } from "context/AppContext";
import { AppProps } from "next/app";
import "styles/globals.css";
import "styles/prism.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    );
}

export default MyApp;
