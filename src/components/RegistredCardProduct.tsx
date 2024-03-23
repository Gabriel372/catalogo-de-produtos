import RegistredImgProduct from "./RegistredImgProduct"
import RegistredDataProduct from "./RegistredDataProduct"
import RegistredFormProduct from "./RegistredFormProduct"
import {TFormEdit,TModDel} from './Types'
import { BsTrash } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";
import { useContext,useEffect,useState } from 'react';

function RegistredCardProduct({setModalDel,ModalDel,product}:TModDel ) {
const [FormEdit,setFormEdit] = useState<TFormEdit>({formIsOpen:false,hasProductToUpdt:false})


    return<li key={product.id} className={`border rounded-lg bg-gray-200 p-1 shadow-xl max-w-[350px] 
    card transform transition-transform duration-200 hover:-translate-y-1.5 h-full ${FormEdit.formIsOpen && 'invisible'}`}
      >    

{FormEdit.formIsOpen && <RegistredFormProduct FormEdit={FormEdit} setFormEdit={setFormEdit} product={product}/>}
<RegistredImgProduct product={product}/> 
<RegistredDataProduct product={product}/>

{!FormEdit.formIsOpen &&
<div className="flex justify-around "> 
    <button onClick={()=>setModalDel({modalIsOpen:true,deleteTarget:product})} 
    className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 px-2 flex flex-row  items-center text-sm">
<BsTrash className="mr-1" />Deletar</button>

  <button className="bg-black  text-white rounded-full py-1 cursor-pointer 
hover:bg-gray-700 px-2 flex flex-row  items-center text-sm"
onClick={()=>setFormEdit({formIsOpen:true,hasProductToUpdt:false})}>
<SlPencil className="mr-1"/>Editar</button>

</div>
}



    </li>  
  }
  
  export default RegistredCardProduct