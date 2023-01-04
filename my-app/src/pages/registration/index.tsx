import React, {useState} from 'react';
import SignIn from './signIn';
import SignUp from './signUp';
import {ButtonsChangeFormBlock, ButtonSignIn, ButtonSignUp, FormTitle,  WrapperForm, WrapperRegistration } from './style';

const Registration = () => {
    const [selectForm, setSelectForm] = useState(false)
    //const theme = useThemeSelector(state => state.themeReducer)
    return (
        <WrapperRegistration>
            <WrapperForm>
                {/*условие истино-сигн ин если ложно -сигн ап*/}
                <button onClick={() => {
                    setSelectForm(true)
                    console.log(selectForm)
                }}>sign in</button>
                <p/>
                <button onClick={() => {
                    setSelectForm(false)
                    console.log(selectForm)
                }}>sign up</button>
                {  selectForm ? <SignIn/> : <SignUp/>}

            </WrapperForm>
        </WrapperRegistration>
    );
};

export default Registration;