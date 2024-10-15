import React from "react";
import travelPageCoverImg from "../../assets/travelcoverphoto.jpeg"
import palamesaImg from "../../assets/palamesaphoto.png"
import hyattImg from "../../assets/hyattphoto.png"

const Travel: React.FC = () => {
    return (
        <div className="flex flex-col mb-10">
            <div className={"flex flex-col items-center"}>
                <div className={"sm:block hidden"}>
                    <img src={`${travelPageCoverImg}`} alt={"shima and mahyar cover photo"}
                         className={"object-cover my-4 rounded-md h-[400px] w-[800px]"}/>
                </div>
                <p className={"sm:text-[36px] text-[30px] font-thin font-dancingScript mt-3 "}>Flights</p>
                <div className={"grid sm:grid-cols-2 sm:my-10 my-3"}>
                    <div className={"flex flex-col items-center sm:mx-64 sm:px-0 px-4 text-center"}>
                        <p className={"text-[30px] font-light text-primaryDarkGreen font-montserrat sm:mt-6 mt-3"}>
                            Fly into SNA or SAN if possible, that should give you the shortest commute to the venue
                        </p>
                        <p className={"text-[16px] font-light text-primaryDarkGreen font-montserrat mt-6 mb-4"}>
                            If you're coming in from LAX, I would avoid landing between 2pm - 6pm. This should help
                            minimize time in traffic.
                        </p>
                    </div>
                    <div className={"grid sm:grid-cols-2 gap-x-5 gap-y-5 sm:-ml-40 sm:mx-52 mx-6"}>
                        <div className={"flex flex-col items-center bg-white py-4 shadow"}>
                            <p className={"text-medium font-montserrat my-auto py-3 text-primaryDarkGreen"}>LAX</p>
                            <p className={"text-2xl font-montserrat my-auto"}>2h 30 Minutes</p>
                            <p className={"text-medium font-thin font-montserrat my-auto py-3 text-gray-700"}>Los Angeles
                                International Airport</p>
                        </div>
                        <div className={"flex flex-col items-center bg-white py-4 shadow"}>
                            <p className={"text-medium font-montserrat my-auto py-3 text-primaryDarkGreen"}>SNA</p>
                            <p className={"text-2xl font-montserrat my-auto"}>1h 30 Minutes</p>
                            <p className={"text-medium font-thin font-montserrat my-auto py-3 text-gray-700"}>John Wayne
                                Airport</p>
                        </div>
                        <div className={"flex flex-col items-center bg-white py-4 shadow"}>
                            <p className={"text-medium font-montserrat my-auto py-3 text-primaryDarkGreen"}>SAN</p>
                            <p className={"text-2xl font-montserrat my-auto"}>1h 30 Minutes</p>
                            <p className={"text-medium font-thin font-montserrat my-auto py-3 text-gray-700"}>San Diego
                                International Airport</p>
                        </div>
                    </div>
                </div>
                <p className={"sm:text-[36px] text-[30px] font-thin font-dancingScript mt-3 mb-5"}>Hotels</p>
                <div className={"grid sm:grid-cols-2 sm:w-2/3 gap-x-10 gap-y-5 sm:mx-0 mx-2"}>
                    <div className={"flex flex-col rounded-md bg-white shadow h-auto"}>
                        <img src={`${palamesaImg}`} alt={"pala mesa photo"}
                             className={"object-cover rounded-md h-[360px]"}/>
                        <p className={"text-md font-montserrat mt-4 mb-2 text-primaryDarkGreen px-4"}>14 Minutes</p>
                        <p className={"text-xl font-montserrat my-1 px-4"}>Pala Mesa Resort</p>
                        <p className={"text-md font-montserrat text-primaryDarkGreen px-4"}>2001 Old Hwy 395, Fallbrook, CA 92028</p>
                        <p className={"text-[17px] font-thin font-montserrat my-4 text-gray-700 px-4"}>
                            This is the main hotel where the wedding party will be staying.
                            We recommend booking this hotel, as it is the closest to the wedding venue.
                            This hotel is also pet friendly.</p>
                        <p className={"text-xl font-montserrat my-2 px-4 pb-4"}>$202 - $252 <span className="text-[18px] text-gray-700 font-light font-montserrat">/night</span></p>
                    </div>
                    <div className={"flex flex-col rounded-md bg-white shadow"}>
                        <img src={`${hyattImg}`} alt={"hyatt photo"}
                             className={"object-cover rounded-md h-[360px]"}/>
                        <p className={"text-md font-montserrat mt-4 mb-2 text-primaryDarkGreen px-4"}>23 Minutes</p>
                        <p className={"text-xl font-montserrat my-1 px-4"}>Hyatt Vacation Club at The Welk</p>
                        <p className={"text-md font-montserrat text-primaryDarkGreen px-4"}>8860 Lawrence Welk Dr, Escondido, CA 92026</p>
                        <p className={"text-[17px] font-thin font-montserrat my-4 text-gray-700 px-4"}>
                            This hotel is a great choice if you are looking 1 - 3 bedroom suites to pick from.
                            It will be further away from the venue compared to Pala Mesa Resort.
                        </p>
                        <p className={"text-xl font-montserrat mb-2 mt-auto px-4 pb-4"}>$189 - $550 <span
                            className="text-[18px] text-gray-700 font-light font-montserrat">/night</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;