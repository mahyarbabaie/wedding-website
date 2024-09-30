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
        <div className="flex flex-col h-screen bg-primaryBG">
            {/* desktop view */}
            <div className="sm:block hidden">
                <div className="flex flex-col items-center text-center justify-center">
                    <DesktopBanner pageName={HOME_PAGE} setCurrentPage={props.setCurrentPage}/>
                    <img src={`${homePageCoverImg}`} alt={"shima and mahyar header image"}
                         className={"object-cover h-[500px] w-[1200px] px-10 my-4 rounded-md"}/>
                </div>
                <div className={"flex flex-col items-center justify-center mt-2 mr-2"}>
                    <div className={"h-[25px] w-[1px] bg-primaryBrown"}></div>
                </div>
                <div className={"flex flex-row items-center justify-center gap-x-20 text-center"}>
                    <p className={"text-4xl font-libreBaskerville text-gray-700"}>March 16,</p>
                    <div className={"h-[60px] w-[1px] bg-primaryBrown"}></div>
                    <p className={"text-4xl font-libreBaskerville text-gray-700"}>San Diego</p>
                </div>
                <div className={"flex flex-row items-center justify-center gap-x-28 text-center"}>
                    <p className={"text-4xl font-libreBaskerville text-gray-700"}>2025</p>
                    <div className={"h-[60px] w-[1px] bg-primaryBrown mr-[42px]"}></div>
                    <p className={"text-4xl font-libreBaskerville text-gray-700"}>CA</p>
                </div>
                <div className={"flex flex-col items-center justify-center mb-5 mr-2"}>
                    <div className={"h-[25px] w-[1px] bg-primaryBrown"}></div>
                </div>
            </div>

            {/* mobile view */}
            <div className="sm:hidden block">
                <MobileBanner pageName={"S & M"} setCurrentPage={props.setCurrentPage} coverPhoto={homePageCoverImg}/>
            </div>

            <div className={"flex flex-col items-center"}>
                <button className={"bg-primaryBrown w-[100px] h-[50px] text-white rounded-lg text-lg"}>RSVP</button>
            </div>
        </div>
    );
};

export default Home;