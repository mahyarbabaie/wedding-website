import React from "react";
import {RSVP_PAGE} from "../constants";
import homePageCoverImg from "../../assets/bridge-facing-lake.png";

interface Props {
    setCurrentPage: any
}

const Home: React.FC = (props: Props) => {
    return (
        <div className="flex flex-col">
            {/* desktop view */}
            <div className="sm:block hidden">
                <div className={"flex flex-col items-center justify-center mt-2 mr-2"}>
                    <img src={`${homePageCoverImg}`} alt={"shima and mahyar cover photo"}
                                              className={"object-cover object-center my-4 rounded-md h-[500px] w-[1000px]"}/>
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

            <div className={"flex flex-col items-center"}>
                <button
                    onClick={() => props.setCurrentPage(RSVP_PAGE)}
                    className={"bg-primaryBrown w-[100px] h-[50px] text-white rounded-lg text-lg sm:mt-0 my-4"}>RSVP
                </button>
                <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
                <p className={"sm:text-[24px] text-[20px] font-thin font-montserrat mt-6"}>CEREMONY & RECEPTION</p>
                <p className={"sm:text-[20px] text-[16px] font-thin font-montserrat my-2"}>3:00 PM - 10:00 PM</p>
                <p className={"sm:text-[16px] text-[14px] font-thin font-montserrat"}>Grand Tradition Estate & Gardens</p>
                <p className={"sm:text-[16px] text-[14px] font-thin font-montserrat"}>220 Grand Tradition Way, Fallbrook, CA, 92028</p>
                <p className={"sm:text-[16px] text-[14px] font-thin font-montserrat my-2"}>Attire: Semi-Formal</p>
                <p className={"text-[14px] font-thin font-montserrat text-center sm:w-1/3 w-full sm:px-0 px-3 mt-4 mb-6"}>
                    The name of our venue at the location is Arbor Terrace. We recommend coming to the venue by 2:30 PM.
                    You will be greeted by champagne or cider as you enter.
                    There is plenty of parking at the venue as well if you plan on driving.
                </p>
                <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
            </div>
        </div>
    );
};

export default Home;