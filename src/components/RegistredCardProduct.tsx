import RegistredImgProduct from "./RegistredImgProduct"
import RegistredDataProduct from "./RegistredDataProduct"
import {TModDel,TstateModeTheme} from './Types'
import { BsTrash } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";
import {useContext } from 'react';
import { CatalogContext } from './CatalogContext';

function RegistredCardProduct({setModalDel,product,setModalEdit}:TModDel ) {
  const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme;
  const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'

return<li key={product.id} className={`${ThemeForComponent} rounded-lg  p-1 shadow-2xl max-w-[350px]
card transform transition-transform duration-200 hover:-translate-y-1 h-full box-border max-h-100 flex flex-col justify-between pb-2`}>    

<RegistredImgProduct product={product}/> 
<RegistredDataProduct product={product}/>

<div className="flex justify-around mt-1"> 
    <button onClick={()=>setModalDel({modalIsOpen:true,deleteTarget:product})} 
    className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 px-2 flex flex-row  items-center text-sm max-w-[120px]  w-full justify-center">
<BsTrash className="mr-1" />Deletar</button>

  <button className="bg-black  text-white rounded-full py-1 cursor-pointer 
hover:bg-gray-700 px-2 flex flex-row  items-center text-sm max-w-[120px]  w-full justify-center"
onClick={()=>setModalEdit({modalIsOpen:true,hasProductValueToPass:true,productEdit:product})}>
<SlPencil className="mr-1"/>Editar</button>

</div>

    </li>  
  }
  
  export default RegistredCardProduct