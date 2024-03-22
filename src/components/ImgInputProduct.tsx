import {useRef,useEffect  } from 'react'
import { BsFilePersonFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { TRegistImg,TstateImgUpload } from "./Types"
import heic2any from 'heic2any';

function ImgInputProduct({ImgUpload,setImgUpload}:TstateImgUpload,{}) {
const inputFileRef = useRef<HTMLInputElement>(null);
   
useEffect(() => {
if (ImgUpload.filename && ImgUpload.fileIsLoading) {
setImgUpload(prevState => ({...prevState,fileIsLoading:false}));  
}
if (ImgUpload.hasInputFileToClean) {
ClearInputFile()    
}
 }, [ImgUpload]) 

 function ChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
    setImgUpload((prevState:TRegistImg) => ({...prevState,filename:null,fileIsLoading:true}));
    if (file.type === 'image/heic') {
    heic2any({blob:file,toType:"image/jpeg",}).then((jpegBlob: any) => {
    const reader = new FileReader();
    reader.onload = () => {
    setImgUpload((prevState:TRegistImg) => ({
    ...prevState,show:reader.result as string,filename:jpegBlob,hasFormatImgToCheck:true}));
    }
    reader.readAsDataURL(jpegBlob);}).catch((e: Error) => console.error(e));
    } else {
     const reader = new FileReader();
    reader.onload = () => {
    setImgUpload((prevState:TRegistImg) => ({
    ...prevState,show:reader.result as string,filename:file,hasFormatImgToCheck:true}));
    }
    reader.readAsDataURL(file);
    } }}

function ClearInputFile() {
 if (inputFileRef.current) {
inputFileRef.current.value = '';
 }
setImgUpload({show:'',filename:null,formatIsLandscape:undefined,hasFormatImgToCheck:false,
fileIsLoading:false,hasInputFileToClean:false});
}


function RemoveImg() {
if (inputFileRef.current) {
inputFileRef.current.value = ''    
}    
setImgUpload({show:'',filename:null,formatIsLandscape:undefined,
hasFormatImgToCheck:false,fileIsLoading:false,hasInputFileToClean:false}) ;
 }

return <div>
<input id='file-input' type="file" accept="image/*,.heic,.heif" className='hidden' 
onChange={(event)=>ChangeImg(event)}  ref={inputFileRef}/>

<div className=' rounded-md justify-around flex flex-col items-center py-2 px-2 pt-0  '>

{!ImgUpload.fileIsLoading &&
<div className={`${ImgUpload.show  === '' ?
' flex justify-center items-center h-[150px] w-[150px] bg-white rounded-lg border  mb-2 ':
' flex justify-center items-start   bg-white rounded-lg border  mb-2 overflow-hidden max-w-[270px] max-h-[200px]'}`}>
{ImgUpload.show === '' ?
<span className=' text-gray-400'>Sem foto</span>:
 <img src={ImgUpload.show} alt="Foto" className={`${ImgUpload.show !== '' && ImgUpload.formatIsLandscape ? 'max-w-[280px]':'max-h-[250px]'}`}/>
}    
</div>}

{ImgUpload.fileIsLoading && <p className="IRMmsgLoad">Carregando foto ...</p> }


<div className='flex flex-row justify-around w-full'>

<button className='flex flex-row bg-red-600 text-white rounded-full py-1 hover:bg-red-700  px-2 items-center'
onClick={RemoveImg}>
<FaTrashAlt />
<span className="IRMspanRemovePhoto">Remover foto</span>
</button>

<label htmlFor='file-input' className=" bg-black  text-white rounded-full py-1 cursor-pointer 
hover:bg-gray-700 px-2 flex flex-row  items-center text-sm">
<BsFilePersonFill className='IRMiconPhoto'/>
Selecionar foto 
</label>


</div>


</div>

</div>

}

export default ImgInputProduct