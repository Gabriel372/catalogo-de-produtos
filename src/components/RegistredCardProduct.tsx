import RegistredImgProduct from "./RegistredImgProduct"
import RegistredDataProduct from "./RegistredDataProduct"
import RegistredFormProduct from "./RegistredFormProduct"
import {TmodDelProduct, Tproduct} from './Types'
import { BsTrash } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";

type TModDel = {
  product:Tproduct
  ModalDel:TmodDelProduct;
  setModalDel:React.Dispatch<React.SetStateAction<TmodDelProduct>>; 
  }

    function RegistredCardProduct({setModalDel,ModalDel,product}:TModDel ) {


    return<li key={product.id} className="border rounded-lg bg-gray-200 p-1 shadow-xl max-w-[350px]">
    <RegistredImgProduct/>
<RegistredDataProduct product={product}/>
<RegistredFormProduct/>

<div className="flex justify-around "> 
    <button onClick={()=>setModalDel({modalIsOpen:true,deleteTarget:product})} 
    className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 px-2 flex flex-row  items-center text-sm">
<BsTrash className="mr-1" />Deletar</button>

  <button className="bg-black  text-white rounded-full py-1 cursor-pointer 
hover:bg-gray-700 px-2 flex flex-row  items-center text-sm">
<SlPencil className="mr-1"/>Editar</button>

</div>

    </li>  
  }
  
  export default RegistredCardProduct