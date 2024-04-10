
export type Tadm = {
name:string 
email:string ;
password:string ;
nanoId:string
id:string
}
export type TinfoCompany = {
    titlePage:string
    addresStore:string
    servicePeriod:string
    celphone:string
    nanoId:string
    id:string
    acceptPayCredit:boolean
    acceptPayDebit:boolean
    acceptPayMoney:boolean
    acceptPayPix:boolean
}
export type TformFooter = {
    addresStore:string;
    servicePeriod:string
    celphone:string;
    acceptPayCredit:boolean
    acceptPayDebit:boolean
    acceptPayMoney:boolean
    acceptPayPix:boolean
    }

export type TadmLog = {
    email: string;
    password: string;
    msgBtnWait:boolean
}

export type TstateAdmLog = {
    AdmLog:TadmLog;
    setAdmLog:React.Dispatch<React.SetStateAction<TadmLog>>; 
}


export type TboxAdm = {
    BoxAdm:Array<Tadm>;
    setBoxAdm:React.Dispatch<React.SetStateAction<Array<Tadm>>>; 
}
export type Tstate<T> = {
State:T;
setState:React.Dispatch<React.SetStateAction<T>>; 
}

export type TadmToStorage = {
AdmToStorage:Tadm;
setAdmToStorage:React.Dispatch<React.SetStateAction<Tadm>>; 
Status:TstatusAdmRegist
setStatus:React.Dispatch<React.SetStateAction<TstatusAdmRegist>>; 

}
export type TadmIsLoggedin = {
    AdmIsLoggedin:boolean;
    setAdmIsLoggedin:React.Dispatch<React.SetStateAction<boolean>>; 
}


export type Tproduct = {
name:string 
price:string ;
description:string ;
image:string
formatImg:string  
nanoId:string
id:string
}
export type TstateProduct = {
Product:Tproduct;
setProduct:React.Dispatch<React.SetStateAction<Tproduct>>;
MsgBtnWait:boolean
setMsgBtnWait:React.Dispatch<React.SetStateAction<boolean>>;
}
export type TstateProductForm = {
Product:Tproduct;
setProduct:React.Dispatch<React.SetStateAction<Tproduct>>;
MsgBtnWait:boolean
setMsgBtnWait:React.Dispatch<React.SetStateAction<boolean>>;
InputHasValue:boolean;
setInputHasValue:React.Dispatch<React.SetStateAction<boolean>>; 
}
export type TBoxProduct = {
BoxProduct:Array<Tproduct>;
setBoxProduct:React.Dispatch<React.SetStateAction<Array<Tproduct>>>; 
}
export type TmodDelProduct = {
modalIsOpen:boolean 
deleteTarget:undefined | Tproduct
}

export type TstateModDel = {
ModalDel:TmodDelProduct;
setModalDel:React.Dispatch<React.SetStateAction<TmodDelProduct>>; 
}
export type TstatusEdit = {
hasProductToUpdt:boolean
msgBtnWait:boolean
}

export type TstateProductEdit = {
Status:TstatusEdit;
setStatus:React.Dispatch<React.SetStateAction<TstatusEdit>>; 
Product:Tproduct;
setProduct:React.Dispatch<React.SetStateAction<Tproduct>>; 
}
export type TRegistImg = {
    show:string;
    filename:Blob | null
    formatIsLandscape:boolean | undefined
    hasFormatImgToCheck:boolean
    fileIsLoading:boolean
    hasInputFileToClean:boolean
}
export type TstateImgUpload = {
 ImgUpload:TRegistImg;
setImgUpload:React.Dispatch<React.SetStateAction<TRegistImg>>; 
}
export type TModDel = {
    product:Tproduct
    ModalDel:TmodDelProduct;
    ModalEdit:TmodEditProduct
setModalEdit:React.Dispatch<React.SetStateAction<TmodEditProduct>>; 
    setModalDel:React.Dispatch<React.SetStateAction<TmodDelProduct>>; 
}
export type TproductProp = {
product:Tproduct
}
export type TadmOn = {
AdmOn:Tadm
setAdmOn:React.Dispatch<React.SetStateAction<Tadm>>; 
}
export type TformTitle = {
IsOpen:boolean
inputValue:string
}
export type TstateFormTitle = {
FormIsOpen:boolean
setFormIsOpen:React.Dispatch<React.SetStateAction<boolean>>; 
}
export type TstateModalisOpen = {
ModalIsOpen:boolean
setModalIsOpen:React.Dispatch<React.SetStateAction<boolean>>; 
}
export type TstateInfoCompany = {
InfoCompany:TinfoCompany
setInfoCompany:React.Dispatch<React.SetStateAction<TinfoCompany>>; 
}
export type TstateModalFooter = {
MsgBtnWait:boolean
setMsgBtnWait:React.Dispatch<React.SetStateAction<boolean>>; 
FormValue:TinfoCompany
setFormValue:React.Dispatch<React.SetStateAction<TinfoCompany>>; 
}
export type TmodEditProduct = {
modalIsOpen:boolean
productEdit:Tproduct
hasProductValueToPass:boolean
}
export type TstateModEditProduct = {
ModalEdit:TmodEditProduct
setModalEdit:React.Dispatch<React.SetStateAction<TmodEditProduct>>; 
}
export type TstateEditProduct = {
    Product:Tproduct
    setProduct:React.Dispatch<React.SetStateAction<Tproduct>>; 
    Status:TstatusEdit
    setStatus:React.Dispatch<React.SetStateAction<TstatusEdit>>; 
}
export type TstateBoxProductIsEmpty = {
    BoxProductIsEmpty:boolean
    setBoxProductIsEmpty:React.Dispatch<React.SetStateAction<boolean>>; 
}
export type TmodeTheme = {
themeIsDark:boolean
hasValueThemeToGet:boolean
styleDark:string
styleLight:string
}
export type TstateModeTheme= {
    ModeTheme:TmodeTheme
    setModeTheme:React.Dispatch<React.SetStateAction<TmodeTheme>>; 
}
export type TModDelAdm = {
    ModalDelIsOpen:boolean;
    setModalDelIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
}
export type TstatusAdmRegist = {
msgBtnWait:boolean;
hasAdmToPost:boolean;
}
export type TstateAdmGetOut = {
AdmGetOut:boolean;
setAdmGetOut: React.Dispatch<React.SetStateAction<boolean>>;
}

// export type TGenericState<T>= {
// state: T;
// setState: React.Dispatch<React.SetStateAction<T>>;
// }
  
// export type TstateAdmGetOut = TGenericState<boolean>

// export type TGenericState<T> = {
//     state: T;
//     setState: React.Dispatch<React.SetStateAction<T>>;
//   }
  
//   type TModDelAdm = TGenericState<boolean>;
//   type TstateAdmGetOut = TGenericState<boolean>;



