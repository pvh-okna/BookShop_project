import React, {useState} from "react";
import {CheckBoxWrapper,  IconWrap} from "./style"
import {useDispatch} from "react-redux";
import { DarkIcon, LightIcon } from "./icon";


export const Switcher = () => {

    const [state, setState] = useState(true);
    const dispatch = useDispatch();

    const selectDarkTheme = () => {
        dispatch({type:"DARK_THEME"})
    }

    const selectLightTheme = () => {
        dispatch({type:"LIGHT_THEME"})
    }
    return (
        <CheckBoxWrapper>
            <IconWrap
                onClick={() => {
                    setState(false)
                    state && selectDarkTheme()}}
                strokes={state}><DarkIcon/>
            </IconWrap>
            <IconWrap
                onClick={() => {
                    setState(true)
                    !state && selectLightTheme()}}
                strokes={!state}><LightIcon/>
            </IconWrap>
        </CheckBoxWrapper>
    )
}