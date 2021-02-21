export class Runtime {
    static isBrowser = (): boolean => {
        return typeof window !== "undefined";
    };
    static isServer = (): boolean => {
        return typeof window === "undefined";
    };
}
