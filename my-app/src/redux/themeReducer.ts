

import { COLORS } from "../assets/styles";
import {ActionThemeType, StateType } from "../type";

const defaultState: StateType = {
    background: `${COLORS.whiteContext}`,
    color: `${COLORS.blackBg}`
}

export const themeReducer = (state = defaultState, action :ActionThemeType) => {

    switch (action.type) {
        case "LIGHT_THEME":
            return {...state, background: `${COLORS.whiteContext}`, color: `${COLORS.secondary}`}
        case "DARK_THEME":
            return {...state, background: `${COLORS.blackBg}`, color: `${COLORS.whiteContext}`}
        default:
            return {...state}
    }
};