import React, {useState} from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import {BtnSignIn,
    BtnSignUp,  WrapperForm, WrapperRegistration } from './style';
import {useThemeSelector} from "../../redux/rootReducer";

const Registration = () => {
    const [selectForm, setSelectForm] = useState(false)
    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <WrapperRegistration>
            <WrapperForm props={selectTheme}
           formState= {selectForm}>
                <BtnSignIn formState= {selectForm} onClick={() => {
                    setSelectForm(true)
                    console.log(selectForm)
                }}>SIGN IN</BtnSignIn>

                <BtnSignUp formState= {selectForm} onClick={() => {
                    setSelectForm(false)
                    console.log(selectForm)
                }}>SIGN UP</BtnSignUp>
                {  selectForm ? <SignIn/> : <SignUp/>}

            </WrapperForm>
        </WrapperRegistration>
    );
};

export default Registration;