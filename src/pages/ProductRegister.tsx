import FormProductRegister from '../components/FormProductRegister'
import { useContext,useEffect,useState } from 'react';
import { nanoid } from 'nanoid';
import {Tproduct,TadmIsLoggedin,TBoxProduct} from '../components/Types'
import {  addDoc, collection } from "firebase/firestore"; 
import {db} from '../components/firebase'
import { CatalogContext } from '../components/CatalogContext';
import { toast } from 'react-toastify';

function ProductRegister() {
const [Product, setProduct] = useState<Tproduct>(
{name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
const [MsgBtnWait, setMsgBtnWait] = useState<boolean>(false);
const { BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct

useEffect(() => {
    if (MsgBtnWait) {
        PostProductToFirebase()  }

else if (Product.id !== '') {
InsertProductInBox();    
}
}, [MsgBtnWait,Product]) ;    

async function PostProductToFirebase() {
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


return<div className="sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex flex-col items-center  min-h-[calc(95vh)] ">
   <h1 className="font-bold block w-full text-center text-2xl">Cadastrar produto</h1>

<FormProductRegister Product={Product} setProduct={setProduct} MsgBtnWait={MsgBtnWait} setMsgBtnWait={setMsgBtnWait}/>
</div>    
}

export default ProductRegister
