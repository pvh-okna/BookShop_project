import React, {useEffect, useState} from 'react';
import InputForm from "../../../components/form/InputForm";
import {
    ENTER_EMAIL,
    ENTER_PASSWORD,
    NOT_ERROR,
    WRONG_CONFIRM_PASSWORD,
    WRONG_EMAIL,
    WRONG_EMAIL_LANGUAGE,
    WRONG_PASSWORD_LANGUAGE,
    WRONG_PASSWORD_LENGTH
} from '../constants';
import {FormBtn} from "../signIn/style";
import {WrapperSingUp} from "./style";



type SignUpProps = {
    email: string,
    password: string,
    confirmPassword:string,
}
const SignUp = () => {

    const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
    const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const _passwordLanguageRegExp = /^[A-z\d]+$/;



    const [emailError, setEmailError] = useState( ' ');
    const [confPassError, setConfPassError] = useState( ' ');
    const [formValid, setFormValid] = useState(false);
    const [passwordError, setPasswordError] = useState(' ');

    const [value, setValue] = useState<SignUpProps>({
        email: '',
        password: '',
        confirmPassword:''
    })
    useEffect(() => {
        if(emailError || passwordError||confPassError  ){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, confPassError, passwordError])

    const handleSubmit = (e:any) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(value))
    }
   const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) =>{
       setValue((props: SignUpProps) => {
           return (
               {
                   ...props,
                   [e.target.name]: e.target.value,
               })
       })
   }


     const validateInput = (e:any) => {
       switch (e.target.name){
           case 'email':
               if (!e.target.value) {
                   setEmailError(ENTER_EMAIL)  ;
               }
               if (!_emailLanguageRegExp.test(e.target.value)) {

                   setEmailError(WRONG_EMAIL_LANGUAGE) ;
               }
               if (!_emailRegExp.test(e.target.value)) {

                    setEmailError(WRONG_EMAIL )  ;
               } else{

                   setEmailError(NOT_ERROR)  ;

               } break;
           case 'password':
               if (!e.target.value) {
                    setPasswordError(ENTER_PASSWORD);
                }
               if (!_passwordLanguageRegExp.test(e.target.value)) {
                  setPasswordError(WRONG_PASSWORD_LANGUAGE);
               }
               if (e.target.value.length < 8) {
                   setPasswordError(WRONG_PASSWORD_LENGTH);
               }
               if (e.target.value.length > 30) {
                   setPasswordError(WRONG_PASSWORD_LENGTH) ;
               } else {
                   setPasswordError(NOT_ERROR ) ;
               } break;
           case 'confirmPassword':
               if( value.password === value.confirmPassword){
                   setConfPassError(NOT_ERROR) ;
               } else{
                   setConfPassError(WRONG_CONFIRM_PASSWORD);
               }break;
            }
       }


    return (
        <>
            <WrapperSingUp>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        Email
                        {  <div style={{color: 'red'}}>{emailError}</div>}
                        <InputForm
                            type={`text`}
                            name={'email'}
                            placeholder={"Your email"}
                            value={value.email}
                            onChange={e => handleChange(e)}
                            onBlur={(e) => { validateInput(e) }}
                        />
                    </label>

                    <label>
                        Password
                        {<div style={{color: 'red'}}>{passwordError}</div>}
                        <InputForm
                            type={`password`}
                            name={'password'}
                            placeholder={"Your password"}
                            value={value.password}
                            onChange={e => handleChange(e)}
                            onBlur={(e) => {
                                validateInput(e)
                            } }
                        />
                    </label>

                    <label>
                        <div style={{color:'red'}}>{confPassError}</div>
                        Confirm password
                        <InputForm
                            type={'password'}
                            name={'confirmPassword'}
                            placeholder={"Confirm password"}
                            value={value.confirmPassword}
                            onChange={e => handleChange(e)}
                            onBlur={(e) => {
                                validateInput(e)

                            }}
                        />
                    </label>
                    <FormBtn   disabled={!formValid} type={"submit"} >Sign Up</FormBtn>

                </form>
            </WrapperSingUp>

 </>
    );
};

export default SignUp;