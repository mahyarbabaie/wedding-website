import React, {useState} from "react";
import Home from "./pages/Home.tsx";
import PasswordLogin from "./pages/PasswordLogin.tsx";
import {
    HOME_PAGE,
    IS_AUTHENTICATED,
    QA_PAGE, REGISTRY_PAGE,
    RSVP_PAGE,
    TRAVEL_PAGE
} from "./constants";
import DesktopBanner from "./components/DesktopBanner.tsx";
import MobileBanner from "./components/MobileBanner.tsx";
import Footer from "./components/Footer.tsx";
import Registry from "./pages/Registry.tsx";
import RSVP from "./pages/RSVP.tsx";
import homePageCoverImg from "../assets/bridge-facing-lake.png";
import registryPageCoverImg from "../assets/frontLakeTogether.png";
import QA from "./pages/QA.tsx";
import Travel from "./pages/Travel.tsx";

const mobilePageMap = new Map<String, String>([
    [HOME_PAGE, "S & M"],
    [QA_PAGE, QA_PAGE],
    [TRAVEL_PAGE, TRAVEL_PAGE],
    [RSVP_PAGE, RSVP_PAGE],
    [REGISTRY_PAGE, REGISTRY_PAGE],
])

const mobileCoverPhotoImgMap = new Map<String,String>([
    [HOME_PAGE, `${homePageCoverImg}`],
    [REGISTRY_PAGE, `${registryPageCoverImg}`],
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
                    <DesktopBanner pageName={currentPage} setCurrentPage={handleSetCurrentPage} />
                    <MobileBanner pageName={mobilePageMap.get(currentPage)} setCurrentPage={handleSetCurrentPage} coverPhoto={mobileCoverPhotoImgMap.get(currentPage)}/>

                    {currentPage == HOME_PAGE && <Home setCurrentPage={handleSetCurrentPage}/>}
                    {currentPage == TRAVEL_PAGE && <Travel />}
                    {currentPage == RSVP_PAGE && <RSVP setCurrentPage={handleSetCurrentPage}/> }
                    {currentPage == REGISTRY_PAGE && <Registry />}
                    {currentPage == QA_PAGE && <QA />}

                    <Footer/>
                </div>
            }
        </>

    );
};

export default WeddingSiteManager;