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
                    <p className={"text-4xl font-libreCaslonDisplay text-gray-800"}>MARCH 16,</p>
                    <div className={"h-[50px] w-[1px] mr-[1px] bg-primaryBrown"}></div>
                    <p className={"text-4xl font-libreCaslonDisplay text-gray-800"}>SAN DIEGO</p>
                </div>
                <div className={"flex flex-row items-center justify-center gap-x-32 text-center"}>
                    <p className={"text-4xl font-libreCaslonDisplay text-gray-800"}>2025</p>
                    <div className={"h-[50px] w-[1px] bg-primaryBrown mr-[29px]"}></div>
                    <p className={"text-4xl font-libreCaslonDisplay text-gray-800"}>CA</p>
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
                <button
                    className={"bg-primaryBrown w-[100px] h-[50px] text-white rounded-lg text-lg sm:mt-0 my-4"}>RSVP
                </button>
                <div className={"bg-primaryBrown/40 w-[600px] h-[1px] my-4"}></div>
                <p className={"text-[24px] font-thin font-montserrat mt-6"}>CEREMONY & RECEPTION</p>
                <p className={"text-[16px] font-thin font-montserrat mt-2"}>Grand Tradition Estate & Gardens</p>
                <p className={"text-[16px] font-thin font-montserrat"}>220 Grand Tradition Way, Fallbrook, CA, 92028-4107</p>
                <p className={"text-[16px] font-thin font-montserrat mt-2 mb-6"}>Attire: Semi-Formal</p>
                <div className={"bg-primaryBrown/40 w-[600px] h-[1px] my-4"}></div>
            </div>
        </div>
    );
};

export default Home;