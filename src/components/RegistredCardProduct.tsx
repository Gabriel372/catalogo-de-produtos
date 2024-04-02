import RegistredImgProduct from "./RegistredImgProduct"
import RegistredDataProduct from "./RegistredDataProduct"
import RegistredFormProduct from "./RegistredFormProduct"
import {TstatusEdit,TModDel,Tproduct} from './Types'
import { BsTrash } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";
import { useContext,useEffect,useState } from 'react';
import RegistredImgEdit from "./RegistredImgEdit";

function RegistredCardProduct({setModalDel,ModalDel,product,ModalEdit,setModalEdit}:TModDel ) {
const [ProductEdit,setProductEdit] = useState<Tproduct>(product)

return<li key={product.id} className={`border rounded-lg bg-gray-200 p-1 shadow-xl max-w-[350px] max-h-[330px] 
card transform transition-transform duration-200 hover:-translate-y-1.5 h-full `}>    

<div>
<RegistredImgProduct product={product}/> 
<RegistredDataProduct product={product}/>
</div>

<div className="flex justify-around "> 
    <button onClick={()=>setModalDel({modalIsOpen:true,deleteTarget:product})} 
    className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 px-2 flex flex-row  items-center text-sm">
<BsTrash className="mr-1" />Deletar</button>

  <button className="bg-black  text-white rounded-full py-1 cursor-pointer 
hover:bg-gray-700 px-2 flex flex-row  items-center text-sm"
onClick={()=>setModalEdit({modalIsOpen:true,hasProductValueToPass:true,productEdit:product})}>
<SlPencil className="mr-1"/>Editar</button>

</div>


    </li>  
  }
  
  export default RegistredCardProduct