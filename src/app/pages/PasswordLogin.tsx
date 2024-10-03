import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IS_AUTHENTICATED} from "../constants";

interface PasswordLoginForm {
    password: string
}

interface Props {
    handleSetIsAuthenticated: any
}

const PasswordLogin: React.FC = (props: Props) => {
    const { register, handleSubmit,} = useForm<PasswordLoginForm>();
    const [password, setPassword] = useState("")
    const [passwordFailed, setPasswordFailed] = useState(false)
    const lockIcon = faLock
    const expectedPassword = import.meta.env.VITE_PASSWORD

    const onSubmit: SubmitHandler<PasswordLoginForm> = async (passwordLoginForm: PasswordLoginForm) => {
        if (passwordLoginForm.password == expectedPassword) {
            localStorage.setItem(IS_AUTHENTICATED, "true")
            props.handleSetIsAuthenticated(true)
        } else {
            setPasswordFailed(true)
            setPassword("")
            await setTimeout(() => {
                setPasswordFailed(false)
            }, 1000);
        }
    }

    return (
        <div className="bg-gray-50">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center h-screen justify-center">
                    <div className="text-center sm:w-1/5">
                        <FontAwesomeIcon icon={lockIcon}
                                         className={"text-gray-800/40 text-2xl border rounded-full border-gray-800/40 p-4 my-2"}/>
                        <p className={"text-lg my-2"}>Shima & Mahyar's Wedding</p>
                        <input
                            type={"text"}
                            id={"password-login"}
                            className={"border rounded-md my-2 focus:ring-transparent focus:outline-none py-3 px-2 w-full text-sm " + (passwordFailed ? 'animate-shake' : '')}
                            {...register("password", {
                                required: true,
                            })}
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder={"Password"}
                        />

                        <button type="submit"
                                className="bg-primaryBlue hover:bg-primarySkyBlue text-white font-bold py-2 px-4 mt-2 rounded-md w-full">
                            Enter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PasswordLogin;