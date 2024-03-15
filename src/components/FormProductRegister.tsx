import {TstateProduct} from './Types'
import { ToastContainer, toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import {nanoid} from "nanoid";


function FormProductRegister({Product,setProduct,MsgBtnWait,setMsgBtnWait}:TstateProduct) {

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
setMsgBtnWait(true)
}             
}
         

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
    setProduct(PrevState => ({...PrevState,[e.target.name]: e.target.value})) 
    if (e.target.name === 'price') {
setProduct(prevState => ({...prevState,nanoId:nanoid()}));  
}
}  


    return<form onSubmit={ClickRegist}
    className="flex flex-col content-around border rounded-lg bg-gray-200 w-full max-w-[350px] p-2 max-h-[400px] h-full mx-1 mt-5"  >
    <ToastContainer />
      
   <label className="flex flex-col mb-2">
   Digite o nome do produto 
   <input autoFocus type="text" name="name" placeholder="nome" value={Product.name}
   onChange={ChangeInput} className="rounded-full px-3 py-1"/>
   </label>


   <label className="flex flex-col ">
    Digite o valor do produto
   <input onChange={ChangeInput}   type="number" name="price" placeholder="valor" value={Product.price}
   className="rounded-full px-3 py-1" />
   </label>
   
   <label className="flex flex-col ">
    Digite a descriçao do produto
   <input onChange={ChangeInput}   type="text" name="description" placeholder="descrição" value={Product.description}
   className="rounded-full px-3 py-1" />
   </label>
   
   <button className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700">
   {MsgBtnWait ? <p className='flex justify-center align-middle'>
   <CgSpinner  className='text-2xl mr-1 animate-spin'/>Aguarde</p>   :
   'Cadastrar'}</button>
   
   </form>
}

export default FormProductRegister
