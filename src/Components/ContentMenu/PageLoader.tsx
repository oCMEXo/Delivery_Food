import {Navigate} from "react-router-dom";
import React, {FC, JSX} from "react";
import Loading from "../Loading/loading";

interface PageLoaderProps {
    children: React.ReactNode;
    isLoading: boolean;
    isLoggedIn: boolean;
    message: string;
}

const PageLoader: FC<PageLoaderProps> = ({children, isLoading, isLoggedIn, message}) => {
    if (isLoading) {
        return <Loading message={message || "Loading..."} />;
    }

    return children as JSX.Element;
}

export default PageLoader;
