import React from "react";


const Footer: React.FC = () => {
    return (
        <div className={"flex flex-col items-center my-4"}>
            <p className={"font-dancingScript sm:text-[48px] text-[36px]"}>S & M</p>
            <div className={"bg-black w-[140px] h-[1px] my-3"}></div>
            <p className={"font-light font-dancingScript text-[20px]"}>3.16.2025</p>
            <p className={"font-montserrat text-[14px] my-6"}>Created by Mahyar Babaie</p>
        </div>
    )
}

export default Footer