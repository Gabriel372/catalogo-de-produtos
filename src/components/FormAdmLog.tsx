import {TstateAdmLog} from './Types'
import { ToastContainer, toast } from "react-toastify";
import { useContext } from 'react';
import { CatalogContext } from './CatalogContext';
import { TstateModeTheme } from './Types';

function FormAdmLog({AdmLog,setAdmLog}:TstateAdmLog) {
    const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme 
    const ThemeForInput = ModeTheme?.themeIsDark ? 'bg-gray-900 border-solid border-gray-600 border duration-500':'border border-solid border-gray-300  duration-500'

function ClickLog(e: React.FormEvent<HTMLFormElement>) {
 e.preventDefault();
 if (AdmLog.email === '' || AdmLog.password === '' ) {
 toast.error("Prencha os campos",{position:'top-center',theme: "dark"}) }     
else {
setAdmLog(PrevState=>({...PrevState,msgBtnWait:true})) }  }
    
function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
 setAdmLog(PrevState => ({...PrevState,[e.target.name]: e.target.value})) }    
    
return <form onSubmit={ClickLog} className="flex flex-col content-around"  >
 <ToastContainer />
<h3 className="font-bold block w-full text-center">Login</h3>
<label className="flex flex-col mb-1">
 Digite seu e-mail
<input onChange={ChangeInput}  autoFocus type="email" name="email" placeholder="seu e-mail" value={AdmLog.email}
className={`${ThemeForInput} rounded-full px-3 py-1 text-lg`} />
</label>

<label className="flex flex-col mb-3">
Digite sua senha   
<input type="password" name="password" placeholder="sua senha" value={AdmLog.password}
onChange={ChangeInput} className={`${ThemeForInput} rounded-full px-3 py-1 text-lg`}/>
</label>

<button className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700">
{AdmLog.msgBtnWait ? 'Entrando...':'Entrar'}</button>

</form>

}

export default FormAdmLog ;