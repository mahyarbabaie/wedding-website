import React, {ReactNode} from "react";
import {ErrorMessage} from "@hookform/error-message";
import {FieldErrors} from "react-hook-form";

interface Props {
    className?: string
    content: ReactNode
    errors: FieldErrors
    errorClassName?: string
    htmlFor: string
    labelName: string
    required?: boolean
    rootClassName?: string
    hasDollarSymbol?: boolean
    hasPercentSymbol?: boolean
}

const InputGroup: React.FC<Props> = (props) => {
    return (
        <>
            <div className={props.rootClassName}>
                <div className={props.className + " rounded-lg border border-gray-200 w-full"}>
                    <label htmlFor={props.htmlFor}>
                        <div className="relative pb-2">
                            <div className="absolute left-3 -top-2 text-xs z-1 bg-white">
                                <span className="text-gray-500 px-1">{props.labelName}</span>
                                {props.required && <small className="text-xs text-red-500 font-medium">&#42;</small>}
                            </div>
                        </div>

                        <div className="px-2 inline-flex w-full">
                            {props.hasDollarSymbol && <p className="my-auto ml-2 text-gray-500 text-sm">$</p>}
                            {props.content}
                            {props.hasPercentSymbol && <p className="ml-auto my-auto mr-2 text-gray-500 text-sm">%</p>}
                        </div>
                    </label>
                </div>
                <ErrorMessage
                    errors={props.errors}
                    name={props.htmlFor}
                    render={({message}) => <p className={props.errorClassName + " mb-4 ml-2 -mt-2 text-xs text-red-500"}>{message}</p>}
                />
            </div>
        </>
    );
}

export default InputGroup;