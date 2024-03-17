import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,useNavigate } from 'react-router-dom';
import {TboxAdm,TadmLog} from '../components/Types'
import { useState,useContext,useEffect } from 'react';
import {CatalogContext} from '../components/CatalogContext'
import FormAdmLog from '../components/FormAdmLog'

function LoginPage() {
  const {  BoxAdm } = useContext(CatalogContext) as TboxAdm;
  const [AdmLog,setAdmLog] = useState<TadmLog>({email:'',password:'',msgBtnWait:false});
  const navigate = useNavigate();

  useEffect( () => { 
if (AdmLog.msgBtnWait) {
  CheckAdmToLogin()  
}

  },[AdmLog])

function CheckAdmToLogin() {
setAdmLog(PrevState=>({...PrevState,msgBtnWait:false})); 
const AdmIsOk = BoxAdm.find((adm)=> adm.email === AdmLog.email  && adm.password === AdmLog.password );
const EmailAdmIsOk = BoxAdm.find((adm)=> adm.email === AdmLog.email );
const PasswordAdmIsOk = BoxAdm.find((adm)=> adm.password === AdmLog.password );


if (!EmailAdmIsOk && PasswordAdmIsOk) {
  toast.error("Email incorreto",{position:'top-center', }) ; 
}
else if (!PasswordAdmIsOk && EmailAdmIsOk) {
  toast.error("Senha incorreta",{position:'top-center', }) ; 
}
else if (!EmailAdmIsOk && !PasswordAdmIsOk) {
  toast.error("Esse administrador não está cadstrado",{position:'top-center', }) ; 
}
else if (AdmIsOk) {
sessionStorage.setItem('admStorage',JSON.stringify(AdmIsOk));
sessionStorage.setItem('ActualPage','/ProductRegister') ;
navigate('/ProductRegister');
}  
}


return <div className=" ">
      <button onClick={()=> console.log(AdmLog)}>TESTE</button>  

 {/* <ToastContainer /> */}

<div className="sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex justify-center  min-h-[calc(95vh)] ">

<div className="border rounded-lg bg-gray-200 w-full max-w-[350px] p-2 max-h-[400px] h-full mx-1 mt-5" >

<FormAdmLog AdmLog={AdmLog} setAdmLog={setAdmLog}/>

<p className="text-center">ou</p>

<Link to='/AdmRegister' className="bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700 w-full block text-center">
 Cadastrar</Link>
</div>

</div>  
</div> 
  
}

export default LoginPage