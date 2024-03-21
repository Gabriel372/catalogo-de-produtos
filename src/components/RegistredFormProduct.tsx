
import {Tproduct, TstateFormEdit} from './Types'
import { useState } from 'react';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProduct from './UpdateProduct'
import { IoClose } from "react-icons/io5";

function RegistredFormProduct({FormEdit,setFormEdit,product}:TstateFormEdit) {
const [ProductEdit,setProductEdit] = useState<Tproduct>(product)

function ClickUpdate(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
if (!ProductEdit.name) {
toast.error("Somente a descriçao pode ficar em branco,Prencha o nome",{position:'top-center', }) ;  
}
else if (!ProductEdit.price) {
  toast.error("Somente a descriçao pode ficar em branco,Prencha o preço",{position:'top-center', }) ;  
}
else{
setFormEdit({formIsOpen:true,hasProductToUpdt:true}); 

}
}

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
setProductEdit(prevState => ({...prevState,[e.target.name]:e.target.value}));
}
function CloseForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
 e.preventDefault();
 setProductEdit({name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''});
 setFormEdit({formIsOpen:false,hasProductToUpdt:false}); 
}

    return <div className={`absolute border rounded-lg bg-gray-200 p-1 shadow-xl 
   
${FormEdit.formIsOpen && 'visible'} `}>
<div className='flex justify-between mb-1'>
<label>
 Nome do produto:
</label>

<button onClick={(e)=>CloseForm(e)}
className=' text-2xl'  ><IoClose /></button>

</div>
    <form onSubmit={ClickUpdate} >

<input onChange={ChangeInput} value={ProductEdit.name}
autoFocus type="text" name="name" placeholder="nome" className="rounded-full px-3 font-semibold py-0" />

<label className="flex flex-col ">
 Valor do produto:
<input onChange={ChangeInput} value={ProductEdit.price}
 type="number" name="price" placeholder="valor" className="rounded-full px-3 font-semibold py-0 text-red-800" />
</label>

<label className="flex flex-col ">
 Descrição do produto:
<input onChange={ChangeInput} value={ProductEdit.description}
type="text" name="description" placeholder="descrição" className="rounded-full px-3 py-0" />
</label>

<div className='flex justify-end mt-1'>
<button className="bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700  px-2  text-sm">
{FormEdit.hasProductToUpdt ? 'Aguarde...': 'Atualizar'  } </button>


</div>

<UpdateProduct FormEdit={FormEdit} setFormEdit={setFormEdit} 
ProductEdit={ProductEdit} setProductEdit={setProductEdit}/>
    </form>  



    </div> 
    

  }
  
  export default RegistredFormProduct
