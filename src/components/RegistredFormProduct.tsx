
import {Tproduct, TstateProductEdit} from './Types'
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import UpdateProduct from './UpdateProduct'
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

function RegistredFormProduct({Product,setProduct,Status,setStatus}:TstateProductEdit) {

function ClickUpdate(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
if (!Product.name) {
toast.error("Somente a descriçao pode ficar em branco,Prencha o nome",{position:'top-center', }) ;  
}
else if (!Product.price) {
  toast.error("Somente a descriçao pode ficar em branco,Prencha o preço",{position:'top-center', }) ;  
}
else{
setStatus({hasProductToUpdt:false,msgBtnWait:true}); 

}
}

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
setProduct(prevState => ({...prevState,[e.target.name]:e.target.value}));
}

    return <div >
<div className='flex justify-between mb-1 z-10'>
<label>
 Nome do produto:
</label>

</div>
    <form  className='z-10' onSubmit={ClickUpdate}>

<input  value={Product.name} onChange={ChangeInput}
autoFocus type="text" name="name" placeholder="nome" className="rounded-full px-3 font-semibold py-0" />

<label className="flex flex-col ">
 Valor do produto:
<input value={Product.price} onChange={ChangeInput}
 type="number" name="price" placeholder="valor" className="rounded-full px-3 font-semibold py-0 text-red-800" />
</label>

<label className="flex flex-col ">
 Descrição do produto:
<input  value={Product.description} onChange={ChangeInput}
type="text" name="description" placeholder="descrição" className="rounded-full px-3 py-0" />
</label>

<div className='flex justify-end mt-1'>
<button className="bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700  px-2  text-sm">
{Status.msgBtnWait ? 'Aguarde...':'Atualizar'}</button>

</div>

    </form>  



    </div> 
    

  }
  
  export default RegistredFormProduct
