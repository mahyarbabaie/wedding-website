import React from "react";
import homePageCoverImg from "../../assets/GTHomeSample.jpeg"
import MobileBanner from "../components/MobileBanner.tsx"
import DesktopBanner from "../components/DesktopBanner.tsx";
import {HOME_PAGE} from "../constants";


interface Props {
    setCurrentPage: any
}

const Home: React.FC = (props: Props) => {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* desktop view */}
            <div className="sm:block hidden">
                <div className="flex flex-col items-center text-center justify-center">
                    <DesktopBanner pageName={HOME_PAGE} setCurrentPage={props.setCurrentPage}/>
                    <img src={`${homePageCoverImg}`} alt={"shima and mahyar header image"}
                         className={"h-[40rem] w-full px-10 my-4 rounded-md"}/>
                </div>
            </div>

            {/* mobile view */}
            <div className="sm:hidden block">
            <MobileBanner pageName={"S & M"} setCurrentPage={props.setCurrentPage} coverPhoto={homePageCoverImg}/>
            </div>
        </div>
    );
};

export default Home;