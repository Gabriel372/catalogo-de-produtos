import {TstateAdmLog} from './Types'
import { ToastContainer, toast } from "react-toastify";

function FormAdmLog({AdmLog,setAdmLog}:TstateAdmLog) {

function ClickLog(e: React.FormEvent<HTMLFormElement>) {
 e.preventDefault();
 if (AdmLog.email === '' || AdmLog.password === '' ) {
 toast.error("Prencha os campos.",{position:'top-center', }) ; 
 }     
else {
setAdmLog(PrevState=>({...PrevState,msgBtnWait:true}))
}  
}
    
function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
 setAdmLog(PrevState => ({...PrevState,[e.target.name]: e.target.value})) 

 }    
    
return <form onSubmit={ClickLog} className="flex flex-col content-around"  >
 <ToastContainer />

<h3 className="font-bold block w-full text-center">Login</h3>

<label className="flex flex-col ">
 Digite seu e-mail
<input onChange={ChangeInput}  autoFocus type="email" name="email" placeholder="seu e-mail" value={AdmLog.email}
className="rounded-full px-3 py-1" />

</label>

<label className="flex flex-col mb-2">
Digite sua senha   
<input type="password" name="password" placeholder="sua senha" value={AdmLog.password}
onChange={ChangeInput} className="rounded-full px-3 py-1"/>

</label>

<button className="bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700">
{AdmLog.msgBtnWait ? 'Entrando...':'Entrar'}</button>

</form>

}

export default FormAdmLog ;

