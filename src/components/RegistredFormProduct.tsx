import {TstateProductEdit,TstateModeTheme} from './Types'
import { useContext } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import { CatalogContext } from './CatalogContext';

function RegistredFormProduct({Product,setProduct,Status,setStatus}:TstateProductEdit) {
  const { ModeTheme} = useContext(CatalogContext) as TstateModeTheme
  const ThemeForInput = ModeTheme?.themeIsDark ? 'bg-gray-900 border-solid border-gray-600 border duration-500':'border border-solid border-gray-300  duration-500'

function ClickUpdate(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
if (!Product.name) {
toast.error("Somente a descriçao pode ficar em branco,Prencha o nome",{position:'top-center',theme: "dark" }) ;  
}
else if (!Product.price) {
  toast.error("Somente a descriçao pode ficar em branco,Prencha o preço",{position:'top-center',theme: "dark" }) ;  
}
else{
setStatus({hasProductToUpdt:false,msgBtnWait:true}); 
}
}

function ChangeInput(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
const { name, value } = e.target;
if (name === 'name' && value.length < 34) {
setProduct(prevState => ({...prevState,[e.target.name]:e.target.value}));}
else if (name === 'price' && value.length < 20) {
setProduct(prevState => ({...prevState,[e.target.name]:e.target.value}));} 
else if (name === 'description' && value.length < 300) {
  setProduct(prevState => ({...prevState,[e.target.name]:e.target.value}));} 
}

    return <div >
<div className='flex justify-between mb-1 z-10'>
<label >
 Nome do produto:
</label>

</div>
    <form  className='z-10' onSubmit={ClickUpdate}>

<input  value={Product.name} onChange={ChangeInput}
autoFocus type="text" name="name" placeholder="nome" className={`${ThemeForInput} rounded-full px-3 font-semibold py-0 w-full text-lg`} />

<label className="flex flex-col ">
 Valor do produto:
<input value={Product.price} onChange={ChangeInput}
 type="number" name="price" placeholder="valor" 
 className={`${ThemeForInput} ${ModeTheme.themeIsDark ? 'text-red-400':'text-red-800'} rounded-full px-3 font-semibold text-lg`} />
</label>

<label className="flex flex-col ">
 Descrição do produto:
<textarea  value={Product.description} onChange={ChangeInput}
 name="description" placeholder="descrição" className={`${ThemeForInput} rounded-xl px-3 py-0 resize-none text-lg`} />

</label>

<button className="bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-800  px-2  text-sm w-full mt-2">

{Status.msgBtnWait ?<p className='flex justify-center align-middle'>
   <CgSpinner  className='text-2xl mr-1 animate-spin'/>Aguarde</p> 
:'Atualizar'}</button>

    </form>  

    </div> 
  }
  
  export default RegistredFormProduct
