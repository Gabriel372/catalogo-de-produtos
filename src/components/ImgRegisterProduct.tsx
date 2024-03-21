import { TRegistImg } from "./Types"
import {useState,useEffect,useContext  } from 'react'
import ImgInputProduct from './ImgInputProduct'

function ImgRegisterProduct() {
const [ImgUpload, setImgUpload] = useState<TRegistImg>({show:'',
filename:null,formatIsLandscape:undefined,hasFormatImgToCheck:false,fileIsLoading:false}); 

useEffect(() => {
}, []) 

return <div>
<ImgInputProduct ImgUpload={ImgUpload} setImgUpload={setImgUpload}/>



</div>
}

export default ImgRegisterProduct
