import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX,faBars} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import React, {useMemo, useState} from "react";
import homePageHeaderImage from "../../assets/GTHomeSample.jpeg";
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
    isActive: boolean
    onClick: () => void
}

interface Props {
    pageName: string
    setCurrentPage: any
    coverPhoto?: string
}

const MobileBanner: React.FC = (props: Props) => {
    const pageName = useMemo(() => props.pageName, [props.pageName])
    const [navTabs, setNavTabs] = useState<NavTabs[]>([
        {
            name: HOME_PAGE,
            isActive: pageName == "S & M",
            onClick: () => handleSetNavTab(HOME_PAGE)
        },
        {
            name: OUR_STORY_PAGE,
            isActive: pageName == OUR_STORY_PAGE,
            onClick: () => handleSetNavTab(OUR_STORY_PAGE)
        },
        {
            name: QA_PAGE,
            isActive: pageName == QA_PAGE,
            onClick: () => handleSetNavTab(QA_PAGE)
        },
        {
            name: TRAVEL_PAGE,
            isActive: pageName == TRAVEL_PAGE,
            onClick: () => handleSetNavTab(TRAVEL_PAGE)
        },
        {
            name: THINGS_TO_DO_PAGE,
            isActive: pageName == THINGS_TO_DO_PAGE,
            onClick: () => handleSetNavTab(THINGS_TO_DO_PAGE)
        },
        {
            name: RSVP_PAGE,
            isActive: pageName == RSVP_PAGE,
            onClick: () => handleSetNavTab(RSVP_PAGE)
        },
        {
            name: REGISTRY_PAGE,
            isActive: pageName == REGISTRY_PAGE,
            onClick: () => handleSetNavTab(REGISTRY_PAGE)
        },
    ])
    const [mobileTabsToggled, setMobileTabsToggled] = useState(false)

    const handleSetNavTab = (page: string) => {
        props.setCurrentPage(page)
        handleSetMobileTabsToggled()
    }

    const handleSetMobileTabsToggled = () => {
        setMobileTabsToggled(!mobileTabsToggled)
    }

    return (
        <div>
            <div className="grid grid-cols-12 mx-4 mt-4 mb-2">
                <button className="my-auto col-span-1" onClick={handleSetMobileTabsToggled}>
                    <FontAwesomeIcon className="h-6 w-auto my-auto mr-3" icon={faBars}/>
                </button>
                <p className="text-2xl my-auto col-span-10 text-center font-dancingScript">{props.pageName}</p>
                <Modal
                    isOpen={mobileTabsToggled}
                    onRequestClose={handleSetMobileTabsToggled}
                    className="relative h-screen z-10 p-4 bg-primaryBG"
                >
                    <button onClick={handleSetMobileTabsToggled}><FontAwesomeIcon className="h-5 w-auto m-2" icon={faX}/></button>
                    <div className="flex flex-col gap-y-6 my-4">
                        {navTabs.map((navTab, $index) => <button key={navTab.name + $index}
                                                                 className={"font-libreBaskerville hover:underline hover:underline-offset-4 " + (navTab.isActive ? "font-bold underline underline-offset-4" : "text-gray-800")}
                                                                 onClick={navTab.onClick}>{navTab.name}</button>)}
                    </div>
                </Modal>
            </div>
            {props.coverPhoto && <div>
                <img src={`${homePageHeaderImage}`} alt={"shima and mahyar header image"}
                     className={"px-2 rounded-lg"}/>
            </div>}
            <div className="flex flex-col items-center text-center justify-center">
                <div className="mx-auto my-8">
                    <img src={`${weddingLogo}`} alt={"shima and mahyar logo"} className={"h-[150px] w-[150px]"}/>
                </div>
                <p className="text-4xl font-dancingScript text-gray-800">{headerTitle}</p>
                <p className="text-gray-600 font-libreBaskerville my-5">{headerDate}</p>
            </div>
        </div>
    )
}

export default MobileBanner