import { FC } from "react";
import { ContainerProperties } from "./ContainerProperties";

export const Container: FC<ContainerProperties> = ({ className, children }) => (
    <div className={`mx-auto px-4 sm:px-6 lg:px-10 max-w-4xl w-full ${className}`}>{children}</div>
);
