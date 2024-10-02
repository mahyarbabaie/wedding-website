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
                         className={"object-cover px-10 my-4 rounded-md h-[400px] w-[800px]"}/>
                </div>
                <p className={"sm:text-[24px] text-[20px] font-thin font-montserrat mt-6"}>Registry Info</p>
                <p className={"sm:w-1/2 sm:px-0 px-4 sm:text-[18px] text-[15px] font-thin font-montserrat my-4"}>
                    If you're considering a gift, cash will help us build our future together.
                    Whether it's saving for our future home, honeymoon,
                    or simply creating memories along the way, your contribution will
                    help us take these exciting next steps as a married couple.
                    Thank you for helping us make our dreams come true, and for being part of our journey!
                </p>
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