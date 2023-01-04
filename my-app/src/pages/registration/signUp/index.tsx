import React, {useState} from 'react';
import InputForm from "../../../components/form/InputForm";
import {FormBtn} from "../signIn/style";

type SignUpProps = {
    email: string,
    password: string,
    confirmPassword:string,
}
const SignUp = () => {

    const [value, setValue] = useState<SignUpProps>({
        email: '',
        password: '',
        confirmPassword:''
    })
   const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) =>{
       setValue((props: SignUpProps) => {
           return (
               {
                   ...props,
                   [e.target.name]: e.target.value,
               })
       })
   }

    return (
        <>
<label>
    Email
        <InputForm
            //label={'Email'}
            type={`text`}
            name={'email'}
            placeholder={"Your email"}
            value={value.email}
            onChange={e => handleChange(e)}
            // onBlur={e => blurHandler(e)}
        />
        </label>

   {/*{(passwordError && passwordDirty) && <div style={{color:'red'}}>{passwordError}</div>}*/}

    <label>
        Password
        <InputForm
            //label={"Password"}
            type={`password`}
            name={'password'}
            placeholder={"Your password"}
            value={value.password}
            onChange={e => handleChange(e)}
            // onBlur={e => blurHandler(e)}

        />
    </label>
            <label>
                Confirm password
                <InputForm

                    type={`password`}
                    name={'confirmPassword'}
                    placeholder={"Confirm password"}
                    value={value.confirmPassword}
                    onChange={e => handleChange(e)}
                    // onBlur={e => blurHandler(e)}

                />
            </label>

    <FormBtn  type={"submit"} onClick={() => {console.log(value)}} >Sign Up</FormBtn>
        </>
    );
};

export default SignUp;