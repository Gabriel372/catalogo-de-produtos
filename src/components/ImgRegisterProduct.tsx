import { TRegistImg,TstateProductForm } from "./Types"
import {useState,useEffect  } from 'react'
import ImgInputProduct from './ImgInputProduct'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export async function CheckFormatImgIsLandScape(url: string): Promise<boolean | undefined> {
    return new Promise((resolve, reject) => {
     const img = new Image();
    img.onload = () => {
     const isLandscape = img.width > img.height;
    resolve(isLandscape) };
    img.onerror = reject;
     img.src = url }) }

function ImgRegisterProduct({Product,setProduct,setInputHasValue,MsgBtnWait,setMsgBtnWait}:TstateProductForm) {

 const [ImgUpload, setImgUpload] = useState<TRegistImg>({show:'',
filename:null,formatIsLandscape:undefined,hasFormatImgToCheck:false,
fileIsLoading:false,hasInputFileToClean:false}); 

useEffect(() => {
    if (MsgBtnWait && ImgUpload.filename !== null) {
        UploadImgMember(ImgUpload.filename,Product.nanoId) ;}  
        else if(MsgBtnWait && ImgUpload.filename === null) { setInputHasValue(true)}

if(ImgUpload.show !== '' && ImgUpload.hasFormatImgToCheck){
CheckFormatImgIsLandScape(ImgUpload.show).then((data)=>{
data ? setProduct(prevState => ({...prevState,formatImg:'landscape'})) :
setProduct(prevState => ({...prevState,formatImg:'portrait'})) ;
setImgUpload(prevState => ({...prevState,formatIsLandscape:data,hasFormatImgToCheck:false}));
 }) }
}, [ImgUpload,MsgBtnWait]) 

async function UploadImgMember(img:any,nanoId:number|string) {
    const storageRef = ref(storage,`CatalogoDeProdutos/(${nanoId})`);
    const snapshot = await uploadBytes(storageRef,img); 
    const url = await getDownloadURL(snapshot.ref);
    setProduct(prevState => ({...prevState,image:`${url}`}));
    setImgUpload(prevState => ({...prevState,hasInputFileToClean:true}));
    setMsgBtnWait(false);
    setInputHasValue(true)   ;
return url; }

return <div>
<ImgInputProduct ImgUpload={ImgUpload} setImgUpload={setImgUpload}/>

</div>
}

export default ImgRegisterProduct
