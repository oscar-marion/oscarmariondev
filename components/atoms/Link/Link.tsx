import NextLink from "next/link";
import { FC } from "react";
import { LinkProperties } from "./Link.properties";

export const Link: FC<LinkProperties> = ({ href, className = "", isExternal = false, children }) => (
    <>
        {isExternal ? (
            <a href={href} className={`link-effect ${className}`} target="_blank" rel="noopener, noreferrer">
                {children}
            </a>
        ) : (
            <NextLink href={href}>
                <a className={`${className}`}>{children}</a>
            </NextLink>
        )}
    </>
);
