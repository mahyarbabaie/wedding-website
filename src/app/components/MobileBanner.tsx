import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import homePageHeaderImage from "../../assets/GTHomeSample.jpeg";
import weddingLogo from "../../assets/weddinglogo.png";

const headerTitle = "Shima & Mahyar"
const headerDate = "March 16, 2025 • San Diego, CA"
const tabs = [
    "Home",
    "Our Story",
    "Q + A",
    "Travel",
    "Things to Do",
    "RSVP",
    "Registry",
]

interface Props {
    pageName: string
    coverPhoto?: string
}

const MobileBanner: React.FC = (props: Props) => {
    return (
        <div>
            <div className="grid grid-cols-12 mx-4 mt-4 mb-2">
                <button className="my-auto col-span-1">
                    <FontAwesomeIcon className="h-6 w-auto my-auto mr-3" icon={faBars}/>
                </button>
                <p className="text-2xl my-auto col-span-10 text-center">{props.pageName}</p>
            </div>
            {props.coverPhoto && <div>
                <img src={`${homePageHeaderImage}`} alt={"shima and mahyar header image"}
                     className={"px-2 rounded-lg"}/>
            </div>}
            <div className="flex flex-col items-center text-center justify-center">
                <div className="mx-auto my-8">
                    <img src={`${weddingLogo}`} alt={"shima and mahyar logo"} height={150} width={150}/>
                </div>
                <p className="text-4xl font-bold text-gray-800">{headerTitle}</p>
                <p className="text-gray-600 my-5">{headerDate}</p>
            </div>
        </div>
    )
}

export default MobileBanner