import React, {useEffect, useState} from "react";
import Home from "./Home.tsx";
import PasswordLogin from "./PasswordLogin.tsx";
import {HOME_PAGE, IS_AUTHENTICATED} from "../constants";


const WeddingSiteManager: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem(IS_AUTHENTICATED) ?? false)
    const [currentPage, setCurrentPage] = useState(HOME_PAGE)

    const handleSetIsAuthenticated = (isSuccessful: boolean) => {
        setIsAuthenticated(isSuccessful)
    }

    const handleSetCurrentPage = (page: string) => {
        setCurrentPage(page)
    }

    return (
        <>
            { !isAuthenticated && <PasswordLogin handleSetIsAuthenticated={handleSetIsAuthenticated}/>}
            { isAuthenticated && currentPage == HOME_PAGE && <Home setCurrentPage={handleSetCurrentPage}/>}
        </>

    );
};

export default WeddingSiteManager;