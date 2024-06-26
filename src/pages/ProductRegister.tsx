import FormProductRegister from '../components/FormProductRegister'
import { useContext,useEffect,useState } from 'react';
import {Tproduct,TBoxProduct,TstateBoxProductIsEmpty,TstateModeTheme} from '../components/Types'
import {  addDoc, collection } from "firebase/firestore"; 
import {db} from '../components/firebase'
import { CatalogContext } from '../components/CatalogContext';
import { toast } from 'react-toastify';
import ImgRegisterProduct from '../components/ImgRegisterProduct'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";

function ProductRegister() {
const [Product, setProduct] = useState<Tproduct>(
{name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
const [MsgBtnWait, setMsgBtnWait] = useState<boolean>(false);
const { BoxProduct,ModeTheme,setBoxProduct,setBoxProductIsEmpty } = useContext(CatalogContext) as TBoxProduct & TstateBoxProductIsEmpty & TstateModeTheme
const [InputHasValue,setInputHasValue] = useState<boolean>(false)
const ThemeForContainer = ModeTheme?.themeIsDark ? 'bg-black duration-500 text-white':'bg-white duration-500'
const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'

useEffect(() => {
if (InputHasValue) {
PostProductToFirebase()   
}
else if (Product.id !== '') {
InsertProductInBox() }
}, [InputHasValue,Product]) ;    

async function PostProductToFirebase() {
setInputHasValue(false)    
try { 
const docRef = await addDoc(collection(db,"ProductCDP"),Product);
setProduct((prevState => ({...prevState,id:docRef.id})));
setMsgBtnWait(false);
}
catch (e) {
console.error("Error adding document: ", e);
setMsgBtnWait(false) }}

function InsertProductInBox() {  
BoxProduct.length === 0 && setBoxProductIsEmpty(false);    
setBoxProduct(prevState => [...prevState,Product]);  
setProduct({name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
toast.success("cadastrado com sucesso",{position:'top-center', theme: "dark",}) }

return(
<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
<div className={`${ThemeForContainer} w-full pb-2`}>

<div className="sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex flex-col items-center  min-h-[calc(95vh)] ">
   <h1 className="font-bold block w-full text-center text-2xl my-2">Cadastrar produto</h1>

<div className={`${ThemeForComponent} flex flex-col content-around rounded-lg p-2 mt-2 shadow-2xl w-full mx-1 max-w-[420px]`} >
<ImgRegisterProduct Product={Product} setProduct={setProduct} MsgBtnWait={MsgBtnWait} 
setMsgBtnWait={setMsgBtnWait} InputHasValue={InputHasValue} setInputHasValue={setInputHasValue}/>
<FormProductRegister Product={Product} setProduct={setProduct} MsgBtnWait={MsgBtnWait} setMsgBtnWait={setMsgBtnWait}/>

</div>

</div>  

</div>

 </motion.div>
) 
}

export default ProductRegister
