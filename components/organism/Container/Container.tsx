import { FC } from "react";
import { ContainerProperties } from "./ContainerProperties";

export const Container: FC<ContainerProperties> = ({ className, children }) => (
    <div className={`mx-auto px-4 max-w-5xl w-full ${className}`}>{children}</div>
);
