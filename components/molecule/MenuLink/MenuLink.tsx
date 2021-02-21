import { FC } from "react";
import { MenuLinkProperties } from "./MenuLink.properties";
import { Link, Text } from "components";
import { useRouter } from "next/router";

export const MenuLink: FC<MenuLinkProperties> = ({ href, children }) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
        <Link
            className={`text-center font-medium transition-colors px-4 py-2 rounded-tl-xl rounded-br-2xl rounded-tr-2xl rounded-bl-3xl ${
                isActive ? "bg-secondary" : "bg-primaryLight md:bg-primary hover:bg-primaryLight"
            }`}
            href={href}
        >
            <Text className={`${isActive ? "text-primary" : "text-secondary"}`}>{children}</Text>
        </Link>
    );
};
