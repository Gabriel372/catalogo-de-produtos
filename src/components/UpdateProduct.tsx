import {Tproduct, TstateFormEdit,TstateProductEdit,TBoxProduct} from './Types'
import { useContext,useEffect,useState } from 'react';
import { db } from './firebase';
import { doc,updateDoc } from "firebase/firestore";
import { CatalogContext } from '../components/CatalogContext';
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function UpdateProduct({FormEdit,setFormEdit,ProductEdit}:TstateProductEdit ) {
    const { BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct

useEffect(() => {
if (FormEdit.hasProductToUpdt) {
   UpdtProductInFirebase()   
}
},[FormEdit])   

async function UpdtProductInFirebase() {
    setFormEdit({formIsOpen:true,hasProductToUpdt:false}); 
    try {const docRef:any =  ProductEdit
        const Source = doc(db, "ProductCDP",docRef.id);
        await updateDoc(Source,docRef);
        UpdateProductInBox() 
          } catch (erro) {
        console.error('Erro ao atualizar: ', erro);
      }    
}

function UpdateProductInBox() {
    setBoxProduct(prevState => prevState.map(product => 
        product.id === ProductEdit?.id ? ProductEdit : product
      ));
    //setProductEdit({name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
    toast.success("Editado com sucesso",{position:'top-center', theme: "dark",}) ; 
    setFormEdit({formIsOpen:false,hasProductToUpdt:false}); 
    }

return <>
{/* <button onClick={()=>console.log(ProductEdit)}>TESTE</button> */}

</>    
}

export default UpdateProduct
