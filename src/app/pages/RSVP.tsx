import React from "react";
import mahyarVenmoImg from "../../assets/mahyarvenmo.jpg"
import shimaVenmoImg from "../../assets/shimavenmo.jpg"


const Registry: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className={"flex flex-grow items-center mt-3"}>
                <iframe
                    loading={"eager"}
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf9DF5-U6Lifyt2VEjgwTZyQgyOb9Ey40XFfHpk2GzGbVgkjA/viewform?embedded=true"
                    className={"w-full h-[1300px]"}>
                </iframe>
            </div>
        </div>
    );
};

export default Registry;