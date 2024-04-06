import {useRef,useEffect,useState,useContext  } from 'react'
import { BsFilePersonFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { TRegistImg, TstateEditProduct,TstateModeTheme } from './Types';
import heic2any from 'heic2any';
import { CheckFormatImgIsLandScape } from './ImgRegisterProduct';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { CatalogContext } from './CatalogContext';

function RegistredimgInput({Product,setProduct,Status,setStatus}:TstateEditProduct) {
const inputFileRef = useRef<HTMLInputElement>(null);
const ImgValuesEmpty = {show:'',filename:null,formatIsLandscape:undefined,hasFormatImgToCheck:false,fileIsLoading:false,hasInputFileToClean:false}
const [ImgEdit, setImgEdit] = useState<TRegistImg>({show:Product.image,
filename:null,formatIsLandscape:undefined,hasFormatImgToCheck:false,
fileIsLoading:false,hasInputFileToClean:false});    
const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme;
const ThemeForSpan = ModeTheme.themeIsDark ? 'bg-gray-500 text-gray-700':'bg-white text-gray-400'   

useEffect(() => {    
if (Status.msgBtnWait && ImgEdit.filename) {
 UploadImgMember(ImgEdit.filename,Product.nanoId)   
}    
else if (Status.msgBtnWait &&  !Status.hasProductToUpdt) {
setStatus(prevState => ({...prevState,hasProductToUpdt:true}));  
}
else if (ImgEdit.filename && ImgEdit.fileIsLoading) {
setImgEdit(prevState => ({...prevState,fileIsLoading:false}));  
}
else if (ImgEdit.hasFormatImgToCheck) {
CheckNewFormatImg();    
}

}, [ImgEdit,Status]) 

function CheckNewFormatImg() {
    CheckFormatImgIsLandScape(ImgEdit.show).then((data)=>{ 
     if (data) {
    setImgEdit(prevState => ({...prevState,formatIsLandscape:true,hasFormatImgToCheck:false})) ;
setProduct(prevState => ({...prevState,formatImg:'landscape'}))
}
     else {
    setImgEdit(prevState => ({...prevState,formatIsLandscape:false,hasFormatImgToCheck:false})) ;
    setProduct(prevState => ({...prevState,formatImg:'portrait'})) }  }) 
}

function ChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
setImgEdit((prevState:TRegistImg) => ({...prevState,filename:null,fileIsLoading:true}));
    if (file.type === 'image/heic') {
    heic2any({blob:file,toType:"image/jpeg",}).then((jpegBlob: any) => {
    const reader = new FileReader();
    reader.onload = () => {
setImgEdit((prevState:TRegistImg) => ({
    ...prevState,show:reader.result as string,filename:jpegBlob,hasFormatImgToCheck:true}));
    }
    reader.readAsDataURL(jpegBlob);}).catch((e: Error) => console.error(e));
    }   
    else {
     const reader = new FileReader();
    reader.onload = () => {
setImgEdit((prevState:TRegistImg) => ({
    ...prevState,show:reader.result as string,filename:file,hasFormatImgToCheck:true}));

    }
    reader.readAsDataURL(file);
    } 
}

}

async function UploadImgMember(img:any,nanoId:number|string) {
    const storageRef = ref(storage, `CatalogoDeProdutos/(${nanoId})`);
    const snapshot = await uploadBytes(storageRef,img);
    const url = await getDownloadURL(snapshot.ref);
    setProduct(prevState => ({...prevState,image:`${url}`}));
    setImgEdit(ImgValuesEmpty);
    setStatus(prevState => ({...prevState,hasProductToUpdt:true}));
    return url;}

function RemoveImg() {
    if (inputFileRef.current) {
    inputFileRef.current.value = ''    
}    
setImgEdit({show:'',filename:null,formatIsLandscape:undefined,
hasFormatImgToCheck:false,fileIsLoading:false,hasInputFileToClean:false}) ;
setProduct( prevState => ({ ...prevState,image:'',formatImg:''}));
}

return (<div>

<input onChange={(event)=>ChangeImg(event)}  
id='file-input' type="file" accept="image/*,.heic,.heif" className='hidden' 
 ref={inputFileRef}/>

<div className=' rounded-md justify-around flex flex-col items-center py-2 px-2 pt-0 '>

<div className=' flex justify-center align-middle text-gray-300  rounded-md overflow-hidden mb-2 mt-1'>
{!ImgEdit.fileIsLoading && (
<>
{Product.image && !ImgEdit.show &&
<img src={Product.image} alt="Foto" className={`${Product.formatImg === 'landscape' ? 'max-w-[280px]':'max-h-[250px]'}`}/>}

{ImgEdit.show && <img src={ImgEdit.show} alt="Foto" className={`${ImgEdit.formatIsLandscape ? 'max-w-[280px]':'max-h-[250px]'}`}/>}

{!Product.image && !ImgEdit.show &&
<span className={`${ThemeForSpan}  h-[150px] w-[150px] flex justify-center items-center`}>Sem foto</span>}

</>)}

{ImgEdit.fileIsLoading && <p >Carregando foto ...</p>}
</div>

<div className='flex flex-row justify-around w-full w-screen300:flex-col items-center'>

<button className='flex flex-row bg-red-600 text-white rounded-full py-1 hover:bg-red-700  px-2 items-center max-w-36 justify-center'
onClick={RemoveImg}>
<span className="flex flex-row items-center"><FaTrashAlt />Remover foto</span>
</button>

<label htmlFor='file-input' className=" bg-black  text-white rounded-full py-1 cursor-pointer
hover:bg-gray-800 px-2 flex flex-row  items-center text-sm h-9 max-w-44 w-screen300:mt-1 w-screen300:mr-1 ml-2 w-screen300:ml-0">
<span className="flex flex-row items-center" >
<BsFilePersonFill className=' mr-1'/>
Selecionar foto 
</span>
</label>

</div>

</div>

</div>)    
}

export default RegistredimgInput
