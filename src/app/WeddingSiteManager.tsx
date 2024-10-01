import React, {useEffect, useState} from "react";
import Home from "./pages/Home.tsx";
import PasswordLogin from "./pages/PasswordLogin.tsx";
import {
    HOME_PAGE,
    IS_AUTHENTICATED,
    OUR_STORY_PAGE,
    QA_PAGE, REGISTRY_PAGE,
    RSVP_PAGE,
    THINGS_TO_DO_PAGE,
    TRAVEL_PAGE
} from "./constants";
import DesktopBanner from "./components/DesktopBanner.tsx";
import homePageCoverImg from "../assets/GTHomeSample.jpeg";
import MobileBanner from "./components/MobileBanner.tsx";
import Footer from "./components/Footer.tsx";

const coverPhotoMap = new Map<String, String>([
    [HOME_PAGE, `${homePageCoverImg}`],
])

const mobilePageMap = new Map<String, String>([
    [HOME_PAGE, "S & M"],
    [OUR_STORY_PAGE, OUR_STORY_PAGE],
    [QA_PAGE, QA_PAGE],
    [TRAVEL_PAGE, TRAVEL_PAGE],
    [THINGS_TO_DO_PAGE, THINGS_TO_DO_PAGE],
    [RSVP_PAGE, RSVP_PAGE],
    [REGISTRY_PAGE, REGISTRY_PAGE],
])

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

            { isAuthenticated &&
                <div className={"flex flex-col bg-primaryBG"}>
                    <DesktopBanner pageName={currentPage} setCurrentPage={handleSetCurrentPage} coverPhoto={coverPhotoMap.get(currentPage)}/>
                    <MobileBanner pageName={mobilePageMap.get(currentPage)} setCurrentPage={handleSetCurrentPage} coverPhoto={coverPhotoMap.get(currentPage)}/>

                    {currentPage == HOME_PAGE && <Home setCurrentPage={handleSetCurrentPage}/>}

                    <Footer/>
                </div>
            }
        </>

    );
};

export default WeddingSiteManager;