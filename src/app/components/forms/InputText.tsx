import React from "react";
import {UseFormRegister} from "react-hook-form";

interface Props {
    className?: string
    noLettersValidation?: boolean
    id?: string
    disabled?: boolean
    errorMessage?: string
    formField: string
    optional?: boolean
    password?: boolean
    placeHolder?: string
    register: UseFormRegister<any>
    onChange?: (data:any) => void
    type: string
}

const InputText: React.FC<Props> = (props) => {
    let required: any;
    let pattern: any;

    if (props.optional) {
        required = { value: false}
    } else {
        required = {
            value: true,
            message: props.errorMessage,
        }
    }

    if (props.noLettersValidation) {
        pattern = {
            value: /^[\d \-()]*$/,
            message: "Phone Number can't have letters",
        };
    }

    if (props.password) {
        pattern = {
            value: value => value != import.meta.env.VITE_PASSWORD,
            message: "Incorrect password",
        };
    }

    return (
        <input
            type={props.type}
            id={props.id ?? props.formField.replace(/\./g,'-')}
            className={props.className + " focus:ring-transparent focus:outline-none py-3 px-2 w-full text-sm"}
            {...props.register(props.formField, {
                required: required,
                pattern: pattern
            })}
            data-testid={props.id ?? props.formField.replace(/\./g,'-')}
            onChange={props.onChange}
            placeholder={props.placeHolder}
        />
    );
}

export default InputText;