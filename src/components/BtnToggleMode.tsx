
import {useState,useContext} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { CatalogContext } from './CatalogContext';
import { TstateModeTheme } from './Types';


function BtnToggleMode() {
    const {ModeTheme,setModeTheme} = useContext(CatalogContext) as TstateModeTheme ;

function ToggleTheme() {
    localStorage.setItem('ActualThemeIsDark',`${!ModeTheme.themeIsDark}`);
    setModeTheme(prevState => ({...prevState, themeIsDark:!ModeTheme.themeIsDark}));  
}

    return (
        <div className=" shadow-slate-200">
            <DarkModeToggle onChange={ToggleTheme} checked={ModeTheme.themeIsDark} size={50} />
        </div>
    )

    
}

export default BtnToggleMode