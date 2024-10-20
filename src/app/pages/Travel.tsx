import React from "react";
import travelPageCoverImg from "../../assets/travelcoverphoto.jpeg"
import palamesaImg from "../../assets/palamesaphoto.png"
import missionPacificImg from "../../assets/mission-pacific-img.png"
import seabirdImg from "../../assets/seabird-img.png"

interface Hotel {
    image: string
    time: string
    name: string
    address: string
    description: string
    price: string
}

const HOTELS: Hotel[] = [
    {
        image: `${missionPacificImg}`,
        time: "30 Minutes",
        name: "MISSION PACIFIC BEACH RESORT",
        address: "201 N MYERS STREET, Oceanside, CA, 92054",
        description: "This is the hotel where the wedding party will be staying. " +
            "It offers luxurious oceanfront rooms and suites, providing breathtaking views of the coastline. " +
            "Guests can enjoy fine dining at Valle, a Michelin-starred restaurant led by renowned Chef Roberto Alcocer. " +
            "The hotel also features a stylish rooftop bar, perfect for relaxing with panoramic ocean views, and" +
            " is pet-friendly for those traveling with their furry companions." +
            " Additionally, it is home to the historic Top Gun House, where scenes from the iconic movie starring Tom Cruise were filmed.",
        price: "$337 - $1651 "
    },
    {
        image: `${seabirdImg}`,
        time: "30 Minutes",
        name: "The Seabird Ocean Resort & Spa",
        address: "101 Mission Ave, Oceanside, CA, 92054",
        description: "This hotel is conveniently located near the Mission Pacific Beach Resort, where the wedding party will be staying. " +
            "It offers a relaxing spa experience and boasts excellent dining options. " +
            "The hotel is also pet-friendly, ensuring a comfortable stay for guests traveling with pets.",
        price: "$286 - $797 "
    },
    {
        image: `${palamesaImg}`,
        time: "14 Minutes",
        name: "Pala Mesa Resort",
        address: "2001 Old Hwy 395, Fallbrook, CA 92028",
        description: "This hotel is the closest option to the venue, offering budget-friendly accommodations. " +
            "If you prefer a short drive to the event, this is an ideal choice." +
            " Additionally, the hotel is pet-friendly, making it a convenient option for those traveling with pets.",
        price: "$202 - $252 "
    }
]

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
                <div className={"grid sm:grid-cols-3 w-full sm:gap-x-5 sm:gap-y-5 sm:mx-0 mx-2 sm:px-4"}>
                    {
                        HOTELS.map((hotel, index: number) =>
                            <div className={"flex flex-col rounded-md bg-white shadow"}>
                                {index == 0 &&
                                    <div className="overflow-hidden relative">
                                        <img src={hotel.image} alt={`hotel ${index} photo`}
                                             className={"object-cover rounded-md h-[360px]"}/>
                                        <div className="absolute top-0 left-0 h-16 w-16">
                                            <p className="absolute transform -rotate-45 z-30 -left-[40px] top-[40px] w-[200px] px-2 py-1 my-auto text-md text-center font-bold bg-primaryGrassyGreen text-white">
                                                Wedding Party
                                            </p>
                                        </div>
                                    </div>
                                }
                                {index > 0 &&
                                    <img src={hotel.image} alt={`hotel ${index} photo`}
                                         className={"object-cover rounded-md h-[360px]"}/>
                                }

                                <p className={"text-md font-montserrat mt-4 mb-2 text-primaryDarkGreen px-4"}>{hotel.time}</p>
                                <p className={"text-xl font-montserrat my-1 px-4"}>{hotel.name}</p>
                                <p className={"text-md font-montserrat text-primaryDarkGreen px-4"}>{hotel.address}</p>
                                <p className={"text-[15px] font-thin font-montserrat my-4 text-gray-700 px-4"}>
                                    {hotel.description}
                                </p>
                                <p className={"text-xl font-montserrat mb-2 mt-auto px-4 pb-4"}>{hotel.price}<span
                                    className="text-[18px] text-gray-700 font-light font-montserrat">/night</span></p>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Travel;