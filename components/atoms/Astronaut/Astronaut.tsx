import Lottie from "react-lottie";
import animationData from "./astronaut.json";

export const Astronaut = () => (
    <Lottie
        options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }}
        isClickToPauseDisabled
        style={{ cursor: "default", maxWidth: "24rem" }}
        ariaLabel="Non-clickable astronaut illustration"
    />
);
