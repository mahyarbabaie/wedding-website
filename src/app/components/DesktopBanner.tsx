import React, {useState} from "react";
import weddingLogo from "../../assets/weddinglogo.png";
import {
    HOME_PAGE,
    OUR_STORY_PAGE,
    QA_PAGE,
    REGISTRY_PAGE,
    RSVP_PAGE,
    THINGS_TO_DO_PAGE,
    TRAVEL_PAGE
} from "../constants";

const headerTitle = "Shima & Mahyar"
const headerDate = "March 16, 2025 • San Diego, CA"

interface NavTabs {
    name: string
    onClick: () => void
}

interface Props {
    pageName: string
    setCurrentPage: any
    coverPhoto?: string
}

const DesktopBanner: React.FC = (props: Props) => {
    const [navTabs, setNavTabs] = useState<NavTabs[]>([
        {
            name: HOME_PAGE,
            onClick: () => handleSetNavTab(HOME_PAGE)
        },
        {
            name: OUR_STORY_PAGE,
            onClick: () => handleSetNavTab(OUR_STORY_PAGE)
        },
        {
            name: QA_PAGE,
            onClick: () => handleSetNavTab(QA_PAGE)
        },
        {
            name: TRAVEL_PAGE,
            onClick: () => handleSetNavTab(TRAVEL_PAGE)
        },
        {
            name: THINGS_TO_DO_PAGE,
            onClick: () => handleSetNavTab(THINGS_TO_DO_PAGE)
        },
        {
            name: RSVP_PAGE,
            onClick: () => handleSetNavTab(RSVP_PAGE)
        },
        {
            name: REGISTRY_PAGE,
            onClick: () => handleSetNavTab(REGISTRY_PAGE)
        },
    ])

    const handleSetNavTab = (page: string) => {
        props.setCurrentPage(page)
    }

    return (
        <div className="sm:flex hidden flex-col items-center text-center justify-center">
            <div className="mx-auto mt-10 mb-6">
                <img src={`${weddingLogo}`} alt={"shima and mahyar logo"}/>
            </div>
            <p className="text-4xl font-dancingScript text-gray-800 my-4">{headerTitle}</p>
            <p className="font-libreBaskerville text-gray-600 mt-2 mb-10">{headerDate}</p>
            <div className="flex flex-row gap-x-10 my-2">
                {navTabs.map((navTab, $index) => <button key={navTab.name + $index}
                                                         className={"font-libreBaskerville text-md hover:underline hover:underline-offset-4 " + (props.pageName == navTab.name ? "font-bold underline underline-offset-4" : "text-gray-800")}
                                                         onClick={navTab.onClick}>{navTab.name}</button>)}
            </div>
            {props.coverPhoto && <img src={props.coverPhoto} alt={"shima and mahyar cover photo"}
                  className={"object-cover h-[500px] w-[1200px] px-10 my-4 rounded-md"}/>}
        </div>
    )
}

export default DesktopBanner