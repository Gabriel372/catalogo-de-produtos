import { Tproduct, TstateModEditProduct,TstatusEdit,TBoxProduct } from "./Types"
import { useState,useContext,useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import RegistredFormProduct from "./RegistredFormProduct";
import RegistredimgInput from "./RegistredimgInput";
import { doc,updateDoc } from "firebase/firestore"; 
import {db} from '../components/firebase'
import { CatalogContext } from '../components/CatalogContext';
import { toast } from 'react-toastify';

function ModalEditProduct({ModalEdit,setModalEdit}:TstateModEditProduct) {
const [Product,setProduct] = useState<Tproduct>(ModalEdit.productEdit)
const [Status,setStatus] = useState<TstatusEdit>({msgBtnWait:false,hasProductToUpdt:false})
const EmptyValues = {name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''}
const { setBoxProduct,BoxProduct } = useContext(CatalogContext) as TBoxProduct

useEffect( () => { 
if (ModalEdit.hasProductValueToPass) {
setModalEdit( prevState => ({...prevState,hasProductValueToPass:false}))  ;
setProduct(ModalEdit.productEdit);
}
else if (Status.hasProductToUpdt) {
setStatus( prevState => ({...prevState,hasProductToUpdt:false}))  ;
UpdtProductInFirebase()
}


}, [ModalEdit,Status])

async function UpdtProductInFirebase() {
    try {const docRef:any =  Product
        const Source = doc(db, "ProductCDP", docRef.id);
        await updateDoc(Source,docRef);
        UpdtBoxProduct() 
      } catch (erro) {
        console.error('Erro ao atualizar: ', erro);
      }    
}

function UpdtBoxProduct() {
    let NewBox = BoxProduct    
    let index = NewBox.findIndex(product => product.id === Product?.id);
    NewBox[index] = Product 
    setBoxProduct(NewBox);
 setTimeout(()=>{setStatus( (prevState) => ({...prevState,msgBtnWait:false}));
 toast.success("Editado com sucesso",{position:'top-center', theme: "dark",})},4000);
}


function CloseModal() {   
setProduct(EmptyValues);
setModalEdit({modalIsOpen:false,hasProductValueToPass:false,productEdit:EmptyValues})    
    }

return (<div>

{ModalEdit.modalIsOpen &&

 <div className="w-screen bg-custom-black h-[100%] top-0 left-0 fixed justify-center align-middle flex"> 

<div className='bg-opacity-50 flex justify-center items-center'>

<div className=' rounded-md bg-gray-200 pt-0 p-2 flex flex-col justify-around'>
<div className=" flex justify-between">

    <h3>Editar produto</h3>
<button onClick={CloseModal} className=" text-2xl"><IoClose /></button>

</div>

<RegistredimgInput Product={Product} setProduct={setProduct} Status={Status} setStatus={setStatus}/>
<RegistredFormProduct Product={Product} setProduct={setProduct} Status={Status} setStatus={setStatus}/>

</div>

</div>
</div>

}

</div>)    
}

export default ModalEditProduct