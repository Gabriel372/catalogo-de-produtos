import {TstateProductEdit,TBoxProduct} from './Types'
import { useContext,useEffect } from 'react';
import { db } from './firebase';
import { doc,updateDoc } from "firebase/firestore";
import { CatalogContext } from '../components/CatalogContext';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateProduct( ) {
  //{Status,setStatus,ProductEdit,setProductEdit}:TstateProductEdit
  const { BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct

// useEffect(() => {
// if (Status.hasProductToUpdt) {
//    UpdtProductInFirebase()   
// }
// },[Status])   

// async function UpdtProductInFirebase() {
//     setStatus({formIsOpen:true,hasProductToUpdt:false,msgBtnWait:false}); 
//     try {const docRef:any =  ProductEdit
//         const Source = doc(db, "ProductCDP",docRef.id);
//         await updateDoc(Source,docRef);
//         UpdateProductInBox() 
//           } catch (erro) {
//         console.error('Erro ao atualizar: ', erro);
//       }    
// }

// function UpdateProductInBox() {
//     setBoxProduct(BoxProduct.map(product => 
//         product.id === ProductEdit?.id ? ProductEdit : product
//       ));
//     toast.success("Editado com sucesso",{position:'top-center', theme: "dark",}) ; 
//     setProductEdit({name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
//     setStatus({formIsOpen:false,hasProductToUpdt:false,msgBtnWait:false}); 
//    setFormEdit({formIsOpen:true,hasProductToUpdt:false}); 
//     }

return <>
</>    
}

export default UpdateProduct
