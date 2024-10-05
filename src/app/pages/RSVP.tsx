import React, {ChangeEvent, useMemo, useState} from "react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {REGISTRY_PAGE} from "../constants";

interface RsvpForm {
    email: string
    guestName: string
    attending: string
    additionalGuestNames: string
}

interface Props {
    setCurrentPage: any
}

const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf9DF5-U6Lifyt2VEjgwTZyQgyOb9Ey40XFfHpk2GzGbVgkjA/formResponse?"

const RSVP: React.FC = (props: Props) => {
    const { register, handleSubmit, formState:{errors}} = useForm<RsvpForm>()
    const [isAttending, setIsAttending] = useState("")
    const [rsvpIsSuccessful, setRsvpIsSuccessful] = useState(false)
    const attending = useMemo(() => isAttending == "Yes", [isAttending])

    const handleSetIsAttending = (data: ChangeEvent<HTMLInputElement>) => {
        setIsAttending(data.target.value)
    }

    const navigateToRegistry = () => {
        props.setCurrentPage(REGISTRY_PAGE)
    }

    const onSubmit = async (e: RsvpForm) => {
        try {
            await fetch(baseUrl +
                new URLSearchParams({
                    "entry.790488985": e.email,
                    "entry.1310912153": e.guestName,
                    "entry.575591887": e.attending,
                    "entry.263363259": e.additionalGuestNames ?? ""
                }), {mode: "no-cors"});
        } catch (e) {
        } finally {
            setRsvpIsSuccessful(!rsvpIsSuccessful)
        }
    }

    return (
        <div className="flex flex-col items-center my-7 w-full gap-y-7">
            <p className={"font-dancingScript sm:text-[36px] text-[30px] mt-2"}>Wedding RSVP</p>
            <form onSubmit={handleSubmit(onSubmit)} className={(rsvpIsSuccessful ? "hidden" : "bg-white rounded-lg shadow")}>
                {/* Email */}
                <div className={"my-6 flex flex-col px-10"}>
                    <label htmlFor={"email"}>
                        <span className={"px-1 font-montserrat"}>Email</span>
                        <small className="font-montserrat text-sm text-red-500 font-medium">&#42;</small>
                    </label>
                    <input
                        type={"text"}
                        id={"email"}
                        className={"border rounded-md my-2 focus:ring-transparent focus:outline-none py-3 px-2 sm:w-2/3 w-full"}
                        {...register("email", {required: "Email is required"})}
                        placeholder={"jsmith@gmail.com"}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"email"}
                        render={({message}) => <p
                            className={"font-montserrat mb-4 ml-2 text-xs text-red-500"}>{message}</p>}
                    />
                </div>

                {/* Guest Name */}
                <div className={"my-6 flex flex-col px-10"}>
                    <label htmlFor={"guestName"}>
                        <span className={"px-1 font-montserrat"}>Guest Name</span>
                        <small className="font-montserrat text-sm text-red-500 font-medium">&#42;</small>
                    </label>
                    <input
                        type={"text"}
                        id={"guestName"}
                        className={"border rounded-md my-2 focus:ring-transparent focus:outline-none py-3 px-2 sm:w-2/3 w-full"}
                        {...register("guestName", {required: "Guest Name is required"})}
                        placeholder={"John Smith"}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"guestName"}
                        render={({message}) => <p
                            className={"font-montserrat mb-4 ml-2 text-xs text-red-500"}>{message}</p>}
                    />
                </div>

                {/* Attending Wedding */}
                <div className={"my-6 flex flex-col px-10"}>
                    <p>
                        <span className={"px-1 font-montserrat"}>Will you be attending our wedding?</span>
                        <small className="font-montserrat text-sm text-red-500 font-medium">&#42;</small>
                    </p>

                    <div className={"inline-flex items-center gap-x-2 ml-1 mt-2"}>
                        <input
                            {...register("attending", {required: "Please Select Yes or No"})}
                            type={"radio"}
                            id={"attendingYes"}
                            className={"border rounded-md my-2 focus:ring-transparent focus:outline-none py-3 px-2"}
                            value={"Yes"}
                            onChange={handleSetIsAttending}
                            checked={attending}
                        />
                        <label className={"font-montserrat text-sm"}>Yes</label>
                    </div>
                    <div className={"inline-flex items-center gap-x-2 ml-1"}>
                        <input
                            {...register("attending", {required: "Please Select Yes or No"})}
                            type={"radio"}
                            id={"attendingNo"}
                            className={"border rounded-md my-2 focus:ring-transparent focus:outline-none py-3 px-2"}
                            value={"No"}
                            onChange={handleSetIsAttending}
                            checked={isAttending != "" && !attending}
                        />
                        <label className={"font-montserrat text-sm"}>No</label>
                    </div>
                    <ErrorMessage
                        errors={errors}
                        name={"attending"}
                        render={({message}) => <p
                            className={"font-montserrat mb-4 ml-2 mt-1 text-xs text-red-500"}>{message}</p>}
                    />
                </div>

                {/* Additional Guests */}
                <div className={"my-6 flex flex-col px-10"}>
                    <label htmlFor={"additionalGuestNames"}>
                        <span className={"px-1 font-montserrat"}>Additional Guest Names</span>
                    </label>
                    <p className={"px-1 font-light font-montserrat text-sm my-1"}>If you are adding more than one guest,
                        put a comma in between their names. ex: (Andrew Smith, Nicole Smith)</p>
                    <input
                        type={"text"}
                        id={"additionalGuestNames"}
                        className={"border rounded-md my-2 focus:ring-transparent focus:outline-none py-3 px-2 w-full"}
                        {...register("additionalGuestNames", {required: false})}
                        placeholder={"Andrew Smith, Nicole Smith"}
                    />
                </div>

                <div className={"flex flex-col px-11 pb-4"}>
                    <button type="submit"
                            className="font-montserrat bg-primaryBrown text-white font-bold py-2 px-auto mt-2 rounded-md sm:w-1/5 w-1/3 sm:mb-1 mb-3"
                            disabled={rsvpIsSuccessful}
                    >
                        Submit
                    </button>
                </div>
            </form>
            {rsvpIsSuccessful &&
                    <div
                        className={"flex flex-col items-center bg-white shadow rounded-xl px-5 sm:w-1/4 w-5/6 sm:mb-12"}>
                        <p className={"font-montserrat text-lg text-center my-14"}>You have successfully RSVP'd to
                            our wedding!</p>
                        <button onClick={navigateToRegistry}
                                className={"bg-primaryBrown text-white font-montserrat py-3 rounded-lg mb-8 sm:w-1/2 w-5/6"}>
                            Continue to Registry
                        </button>
                    </div>
            }
            {rsvpIsSuccessful && <div className={"sm:my-36"}></div>}
        </div>
    );
};

export default RSVP;