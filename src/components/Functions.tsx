
import {useState,useContext} from "react";
import { CatalogContext } from "./CatalogContext";
import { TstateModeTheme } from "./Types";

export async function CheckFormatImgIsLandScape(url: string): Promise<boolean | undefined> {
    return new Promise((resolve, reject) => {
     const img = new Image();
    img.onload = () => {
     const isLandscape = img.width > img.height;
    resolve(isLandscape) };
    img.onerror = reject;
     img.src = url }) }

// export function ThemeBgcontainer() {
//     const {ModeTheme} = useContext(CatalogContext) as TstateModeTheme ;
//     const Theme = ModeTheme.themeIsDark ? 'containerDark':'containerLight'
// return Theme
// }



