import React, {useState} from 'react';
import InputForm from "../../../components/form/InputForm";
import {FormBtn} from "../signIn/style";
import footer from "../../footer";

type SignUpProps = {
    email: string,
    password: string,
    confirmPassword:string,
}
const SignUp = () => {
    const ENTER_EMAIL = 'Введите почту';
    const WRONG_EMAIL_LANGUAGE = 'Почта должна содержать только латинские буквы';
    const WRONG_EMAIL = 'Почта должна содержать специальный символ @ и домен';
    const ENTER_PASSWORD = 'Введите пароль';
    const WRONG_PASSWORD_LANGUAGE = 'Пароль должен состоять только из цифр и латинских букв';
    const WRONG_PASSWORD_LENGTH ='Пароль должен содержать не менее 8 символов и не более 30 символов';
    const WRONG_CONFIRM_PASSWORD = 'Password confirmation doesn\'t match'
    const NOT_ERROR = '';
    const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
    const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const _passwordLanguageRegExp = /^[A-z\d]+$/;


    let isEmailValid = false;
    let isPasswordValid = false;
    let isFormValid = false;
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState( '')
    const [confPassError, setConfPassError] = useState('')
    const [value, setValue] = useState<SignUpProps>({
        email: '',
        password: '',
        confirmPassword:''
    })
    const handleSubmit = (e:React.SyntheticEvent) => {
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
                   isEmailValid = false;
                   setEmailError(ENTER_EMAIL)  ;
               }
               if (!_emailLanguageRegExp.test(e.target.value)) {
                   isEmailValid = false;
                   setEmailError(WRONG_EMAIL_LANGUAGE) ;
               }
               if (!_emailRegExp.test(e.target.value)) {
                   isEmailValid = false;
                    setEmailError(WRONG_EMAIL )  ;
               } else{
                   isEmailValid = true;
                   setEmailError(NOT_ERROR )  ;
               } break;
           case 'password':
               if (!e.target.value) {
               isPasswordValid = false;
               setPasswordError( ENTER_PASSWORD) ;
                }
               if (!_passwordLanguageRegExp.test(e.target.value)) {
                   isPasswordValid = false;
                  setPasswordError(WRONG_PASSWORD_LANGUAGE) ;
               }
               if (e.target.value.length < 8) {
                   isPasswordValid = false;
                   setPasswordError( WRONG_PASSWORD_LENGTH) ;
               }
               if (e.target.value.length > 30) {
                   isPasswordValid = false;
                   setPasswordError( WRONG_PASSWORD_LENGTH) ;
               } else {
                   isPasswordValid=true;
                   setPasswordError(NOT_ERROR ) ;
               } break;
           case 'confirmPassword':
               if(value.password.length > 8 && value.password === value.confirmPassword){
                   console.log(value.password, value.confirmPassword)
                   isPasswordValid = true;
                   setConfPassError( NOT_ERROR) ;
               } else{
                   isPasswordValid = false;
                   setConfPassError( WRONG_CONFIRM_PASSWORD);
               }break;
            }
       }


    if(isPasswordValid ===false || isEmailValid===false) {
        isFormValid = false
    } else isFormValid=true;

    return (
        <>
<form onSubmit={handleSubmit}>
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
        <div style={{color:'red'}}>{passwordError}</div>
        <InputForm
            type={`password`}
            name={'password'}
            placeholder={"Your password"}
            value={value.password}
            onChange={e => handleChange(e)}
            onBlur={(e) => validateInput(e) }
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
                console.log(isPasswordValid, isEmailValid)
            }}
        />
    </label>
    <FormBtn  type={"submit"} onClick={() => { console.log(value)}} >Sign Up</FormBtn>

</form>
 </>
    );
};

export default SignUp;