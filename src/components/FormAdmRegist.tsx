import {nanoid} from "nanoid";
import { TadmToStorage,TstateModeTheme } from "../components/Types";
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CatalogContext} from '../components/CatalogContext'
import { useContext } from "react";

function FormAdmRegist({AdmToStorage,setAdmToStorage,MsgWaitBtn,setMsgWaitBtn }:TadmToStorage ) {
  const {  ModeTheme } = useContext(CatalogContext) as TstateModeTheme
  const ThemeForInput = ModeTheme?.themeIsDark ? 'bg-gray-900 border-solid border-gray-600 border duration-500':'border border-solid border-gray-300  duration-500'
  const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'

function ClickNewAdm (e: React.FormEvent<HTMLFormElement>) {  
 e.preventDefault();
 const {name,email,password,nanoId,id} = AdmToStorage ;
const AdmIsComplete = name && email && password ; 
if (!AdmIsComplete) {
toast.error("Prencha todos os campos.",{position:'top-center', theme: "dark"}) ;
}
else {console.log('ok')
setMsgWaitBtn(true) ;
}

  } 

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
setAdmToStorage(prevState => ({...prevState,[e.target.name]:e.target.value}));   
if (e.target.name === 'password') {
setAdmToStorage(prevState => ({...prevState,nanoId:nanoid()}));       
}

 }

return     <form onSubmit={ClickNewAdm} 
className={`${ThemeForComponent} flex flex-col content-around rounded-lg bg-gray-200 w-full max-w-[350px] p-2 max-h-[400px] h-full shadow-2xl`}>
<ToastContainer/>
<label className="flex flex-col mb-1">
 Digite seu nome
<input onChange={ChangeInput} autoFocus type="text" name="name" placeholder="nome" 
className={`${ThemeForInput}  rounded-full text-lg px-3 py-1`} />
</label>


<label className="flex flex-col mb-1">
 Digite seu e-mail
<input onChange={ChangeInput} type="email" name="email" placeholder="e-mail" 
className={`${ThemeForInput}  rounded-full text-lg px-3 py-1`} />

</label>

<label className="flex flex-col mb-2">
Digite sua senha   
<input onChange={ChangeInput} type="password" name="password" placeholder="senha" 
className={`${ThemeForInput}  rounded-full text-lg px-3 py-1`} />

</label>

<button className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700">
{MsgWaitBtn ?'Aguarde...' : 'Cadastrar' }</button>
</form>

}

export default FormAdmRegist ;
