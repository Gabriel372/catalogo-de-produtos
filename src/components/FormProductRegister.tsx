import {TstateProduct,TadmOn,TstateModeTheme} from './Types'
import { ToastContainer, toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import {nanoid} from "nanoid";
import { CatalogContext } from './CatalogContext';
import { useContext } from 'react';

function FormProductRegister({Product,setProduct,MsgBtnWait,setMsgBtnWait}:TstateProduct) {
    const { ModeTheme} = useContext(CatalogContext) as TadmOn & TstateModeTheme
    const ThemeForInput = ModeTheme?.themeIsDark ? 'bg-gray-900 border-solid border-gray-600 border duration-500':'border border-solid border-gray-300  duration-500'

function ClickRegist(e: React.FormEvent<HTMLFormElement>) {
 e.preventDefault();
 if (Product.name === '' && Product.price === '') {
    toast.error("Somene a descição pode ficar em branco,digite o nome e o preço",{position:'top-center',theme: "dark"}) ;     
}
else if (Product.name === '') {
toast.error("Somene a descição pode ficar em branco,digite o nome",{position:'top-center',theme: "dark"}) ;     
}
else if (Product.price === '') {
toast.error("Somene a descição pode ficar em branco,digite o preço",{position:'top-center',theme: "dark" }) ;     
}
else{
setMsgBtnWait(true) } }
         
function ChangeInput(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setProduct(PrevState => ({...PrevState,[e.target.name]: e.target.value})) 
    if (e.target.name === 'price') {
setProduct(prevState => ({...prevState,nanoId:nanoid()}));  } }  
    return<form onSubmit={ClickRegist}>
    <ToastContainer />
      
   <label className="flex flex-col mb-2">
   Digite o nome
   <input autoFocus type="text" name="name" placeholder="nome" value={Product.name}
   onChange={ChangeInput} className={`${ThemeForInput} rounded-full px-3 py-1`}/>
   </label>

   <label className="flex flex-col mb-2">
    Digite o preço
   <input onChange={ChangeInput}   type="number" name="price" placeholder="preço" value={Product.price}
  className={`${ThemeForInput} rounded-full px-3 py-1`} />
   </label>
   
   <label className="flex flex-col mb-3">
    Digite a descriçao
    <textarea  value={Product.description} onChange={ChangeInput}
 name="description" placeholder="descrição" className={`${ThemeForInput} rounded-xl px-3 py-0 resize-none`} />
   </label>
   
   <button className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 w-full">
   {MsgBtnWait ? <p className='flex justify-center align-middle'>
   <CgSpinner  className='text-2xl mr-1 animate-spin'/>Aguarde</p>   :
   'Cadastrar'}</button>
   
   </form>
}

export default FormProductRegister
