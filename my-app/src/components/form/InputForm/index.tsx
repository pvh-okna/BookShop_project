import React from "react";
import { Input, WrapperInput } from "./style";

type InputProps = {
    type: string,
    name:string,
    placeholder: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e:React.FocusEvent<HTMLInputElement>) => void
}
const InputForm = (props: InputProps) => {

return(
    <WrapperInput>
        <Input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        >

        </Input>

    </WrapperInput>



)
}
export default InputForm;