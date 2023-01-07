import React, {useEffect, useState} from 'react';
import {FormBtn, WrapperSignIn } from './style';
import InputForm from "../../../components/form/InputForm";
import {useNavigate} from "react-router-dom";
export type Values = {
    email : string,
    password : string,
}
const SignIn = () => {
    const [value, setValue] = useState<Values>({
        email: '',
        password: '',
    })

    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email must not be empty");
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Password must not be empty");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const navigate = useNavigate()

    const handlerChange = (e:any) => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const handleLogin = (e:React.SyntheticEvent) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user") || '');
        if(
            value.email === loggedUser.email &&
            value.password === loggedUser.password
        ){
            localStorage.setItem("loggedin", JSON.stringify(true))
            navigate("/")
        }else{
            alert('wrong email or password')
        }
    }


       const blurHandler = (e:any) => {

        switch (e.target.name) {
            case 'email' :
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(String(e.target.value).toLowerCase()))
                {
                    setEmailError("Not correct email")
                }else{
                    setEmailError('')
                }
                setEmailDirty(true)
                break
            case'password':
                if(e.target.value.length < 8 ){
                    setPasswordError("Password must be more 8 symbols")
                    if(!e.target.value){
                        setPasswordError("Password must not be empty")
                    }
                } else {
                    setPasswordError('');
                }
                setPasswordDirty(true)
                break
        }
    }

    const DataForm = () => {
        console.log(value)
        navigate('/')
    }

    return (
        <form  onSubmit={handleLogin}>
            <WrapperSignIn>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <label>
                    Email
                    <InputForm
                        //label={'Email'}
                        type={`text`}
                        name={'email'}
                        placeholder={"Your email"}
                        value={value.email}
                        onChange={e => handlerChange(e)}
                        onBlur={e => blurHandler(e)}
                    />
                </label>

                {(passwordError && passwordDirty) && <div style={{color:'red'}}>{passwordError}</div>}

                <label>
                    Password
                    <InputForm
                        //label={"Password"}
                        type={`password`}
                        name={'password'}
                        placeholder={"Your password"}
                        value={value.password}
                        onChange={e => handlerChange(e)}
                        onBlur={e => blurHandler(e)}

                    />
                </label>
                <FormBtn disabled={!formValid} type={"submit"} onClick={ DataForm}>Sign In</FormBtn>
            </WrapperSignIn>
        </form>

    );
};

export default SignIn;