import React from "react";
import mahyarVenmoImg from "../../assets/mahyarvenmo.jpg"
import shimaVenmoImg from "../../assets/shimavenmo.jpg"
import registryPageCoverImg from "../../assets/registrycoverphoto.png"

const Registry: React.FC = () => {
    return (
        <div className="flex flex-col mb-10">
            <div className={"flex flex-col items-center"}>
                <div className={"sm:block hidden"}>
                    <img src={`${registryPageCoverImg}`} alt={"shima and mahyar cover photo"}
                         className={"object-cover my-4 rounded-md h-[400px] w-[800px]"}/>
                </div>
                <p className={"sm:text-[36px] text-[30px] font-thin font-dancingScript mt-6"}>Registry Info</p>
                <p className={"sm:w-1/2 sm:px-0 px-4 sm:text-[18px] text-[15px] font-thin font-montserrat my-4"}>
                    We are so grateful to have you celebrate our special day with us.
                    If you’d like to honor us with a gift, we kindly request monetary contributions to help us build our future together.
                    Whether it’s for a home, a honeymoon, or future endeavors, your generosity means the world to us.
                </p>
                <p className={"sm:w-1/2 sm:px-0 px-4 sm:text-[18px] text-[15px] font-thin font-montserrat my-2 w-full"}>
                    You can contribute through:
                </p>
                <ul className={"sm:w-1/2 sm:px-0 px-4 sm:text-[18px] text-[15px] font-thin font-montserrat list-disc w-full"}>
                    <li className={"my-1 ml-5"}>Cash or Check at the wedding</li>
                    <li className={"my-1 ml-5"}>Venmo: @Mahyar-Babaie or @Shima-dn</li>
                </ul>
                <div className={"grid sm:grid-cols-2 gap-x-10"}>
                    <div className={"flex flex-col items-center"}>
                        <p className={"text-[18px] font-montserrat mt-6 mb-1"}>Venmo: @Mahyar-Babaie</p>
                        <img src={`${mahyarVenmoImg}`} alt={"mahyar venmo qr code"}
                             className={"object-cover h-[400px] w-[300px] rounded-lg"}/>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <p className={"text-[18px] font-montserrat mt-6 mb-1"}>Venmo: @Shima-dn</p>
                        <img src={`${shimaVenmoImg}`} alt={"mahyar venmo qr code"}
                             className={"object-cover h-[400px] w-[300px] rounded-lg"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registry;