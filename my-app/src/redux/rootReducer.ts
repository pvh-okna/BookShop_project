import {applyMiddleware, combineReducers, createStore} from 'redux';
import {themeReducer} from "./themeReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ThemeReducerType} from "./type";



export const useThemeSelector: TypedUseSelectorHook<ThemeReducerType> = useSelector;
export const rootReducer = combineReducers({
    themeReducer,

})

export const store = createStore(rootReducer);