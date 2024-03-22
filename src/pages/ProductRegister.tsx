import FormProductRegister from '../components/FormProductRegister'
import { useContext,useEffect,useState } from 'react';
import {Tproduct,TBoxProduct} from '../components/Types'
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
const { setBoxProduct } = useContext(CatalogContext) as TBoxProduct
const [InputHasValue,setInputHasValue] = useState<boolean>(false)

useEffect(() => {
if (InputHasValue) {
PostProductToFirebase()   
}
else if (Product.id !== '') {
InsertProductInBox();    
}
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
setMsgBtnWait(false);
 }
}

function InsertProductInBox() {
setBoxProduct(prevState => [...prevState,Product]);  
setProduct({name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
toast.success("cadastrado com sucesso",{position:'top-center', theme: "dark",}) ; 
}


return(
<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
<div className="sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex flex-col items-center  min-h-[calc(95vh)] ">
   <h1 className="font-bold block w-full text-center text-2xl">Cadastrar produto</h1>

<div className="flex flex-col content-around border rounded-lg bg-gray-200 w-full max-w-[350px] p-2 mx-1 mt-5" >
<ImgRegisterProduct Product={Product} setProduct={setProduct} MsgBtnWait={MsgBtnWait} 
setMsgBtnWait={setMsgBtnWait} InputHasValue={InputHasValue} setInputHasValue={setInputHasValue}/>
<FormProductRegister Product={Product} setProduct={setProduct} MsgBtnWait={MsgBtnWait} setMsgBtnWait={setMsgBtnWait}/>

</div>


</div>  


 </motion.div>
)



  
}

export default ProductRegister
