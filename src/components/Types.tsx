
export type Tadm = {
name:string 
email:string ;
password:string ;
nanoId:string
id:string
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
MsgWaitBtn:boolean
setMsgWaitBtn:React.Dispatch<React.SetStateAction<boolean>>; 

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
export type TFormEdit = {
formIsOpen:boolean    
hasProductToUpdt:boolean
}

export type TstateFormEdit = {
product:Tproduct    
FormEdit:TFormEdit;
setFormEdit:React.Dispatch<React.SetStateAction<TFormEdit>>; 
}
export type TstateProductEdit = {
FormEdit:TFormEdit;
setFormEdit:React.Dispatch<React.SetStateAction<TFormEdit>>; 
ProductEdit:Tproduct;
setProductEdit:React.Dispatch<React.SetStateAction<Tproduct>>; 
}
export type TRegistImg = {
    show:string;
    filename:Blob | null
    formatIsLandscape:boolean | undefined
    hasFormatImgToCheck:boolean
    fileIsLoading:boolean
}
export type TstateImgUpload = {
 ImgUpload:TRegistImg;
setImgUpload:React.Dispatch<React.SetStateAction<TRegistImg>>; 
}
