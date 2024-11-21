import React from "react";

const Schedule: React.FC = () => {
    return (
        <div className={"flex flex-col items-center"}>
            <p className={"font-dancingScript sm:text-[36px] text-[30px] my-4"}>Wedding Schedule</p>
            <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
            <p className={"sm:text-[24px] text-[20px] font-thin font-montserrat mt-6"}>GUEST ARRIVAL</p>
            <p className={"sm:text-[20px] text-[16px] font-thin font-montserrat my-2"}>2:30 PM - 3:00 PM</p>
            <p className={"sm:text-[16px] text-[14px] font-thin font-montserrat"}>Grand Tradition Estate & Gardens</p>
            <p className={"sm:text-[16px] text-[14px] font-thin font-montserrat"}>220 Grand Tradition Way, Fallbrook, CA
                92028</p>
            <p className={"text-[14px] font-thin font-montserrat text-center sm:w-1/3 w-full sm:px-0 px-3 mt-4 mb-6"}>
                The name of our venue at the location is Arbor Terrace. We recommend coming to the venue by 2:30 PM.
                You will be greeted by champagne or cider as you enter.
                There is plenty of parking at the venue as well if you plan on driving.
            </p>
            <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
            {/* divider */}
            <p className={"sm:text-[24px] text-[20px] font-thin font-montserrat mt-6"}>CEREMONY</p>
            <p className={"sm:text-[20px] text-[16px] font-thin font-montserrat my-2"}>3:00 PM - 4:00 PM</p>
            <p className={"text-[14px] font-thin font-montserrat text-center sm:w-1/3 w-full sm:px-0 px-3 mt-4 mb-6"}>
                We are delighted to announce that our wedding will feature a traditional Persian ceremony, complete with a beautiful Sofreh Aghd.
                We are also honored to have Rasheed Irani as our officiant for this special day.
                The ceremony will begin promptly at 3 PM, so we kindly encourage you to arrive early to ensure a seamless experience.
            </p>
            <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
            {/* divider */}
            <p className={"sm:text-[24px] text-[20px] font-thin font-montserrat mt-6"}>COCKTAIL HOUR</p>
            <p className={"sm:text-[20px] text-[16px] font-thin font-montserrat my-2"}>4:00 PM - 5:00 PM</p>
            <p className={"text-[14px] font-thin font-montserrat text-center sm:w-1/3 w-full sm:px-0 px-3 mt-4 mb-6"}>
                Cocktail Hour will take place at the Orchid Bar, offering stunning views of the venue.
                During this time, we will have live music and guests can enjoy a selection of delicious appetizers.
                A variety of beverages will be available, including soft drinks, top-shelf cocktails, water, tea, and more.
            </p>
            <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
            {/* divider */}
            <p className={"sm:text-[24px] text-[20px] font-thin font-montserrat mt-6"}>RECEPTION</p>
            <p className={"sm:text-[20px] text-[16px] font-thin font-montserrat my-2"}>5:00 PM - 10:00 PM</p>
            <p className={"text-[14px] font-thin font-montserrat text-center sm:w-1/3 w-full sm:px-0 px-3 mt-4 mb-6"}>
                Our reception will be filled with exciting activities and memorable moments.
                Guests can look forward to a delicious dinner buffet, desserts, heartfelt toasts, special dances,
                the cutting of the cake, live music, and an energetic Persian DJ to keep the celebration lively and fun!
            </p>
            <div className={"bg-primaryBrown/40 sm:w-2/5 w-full h-[1px] my-4"}></div>
        </div>
    );
};

export default Schedule;