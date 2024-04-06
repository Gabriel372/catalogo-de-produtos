import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,useNavigate } from 'react-router-dom';
import {TboxAdm,TadmLog,TstateModeTheme } from '../components/Types'
import { useState,useContext,useEffect } from 'react';
import {CatalogContext} from '../components/CatalogContext'
import FormAdmLog from '../components/FormAdmLog'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";


function LoginPage() {
  const {  BoxAdm,ModeTheme } = useContext(CatalogContext) as TboxAdm & TstateModeTheme
  const [AdmLog,setAdmLog] = useState<TadmLog>({email:'',password:'',msgBtnWait:false});
  const navigate = useNavigate();
  const ThemeForContainer = ModeTheme?.themeIsDark ? 'bg-black duration-500 text-white':'bg-white duration-500'
  const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'

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
  toast.error("Email incorreto",{position:'bottom-center', }) ; 
}
else if (!PasswordAdmIsOk && EmailAdmIsOk) {
  toast.error("Senha incorreta",{position:'bottom-center', }) ; 
}
else if (!EmailAdmIsOk && !PasswordAdmIsOk) {
  toast.error("Esse administrador não está cadstrado",{position:'bottom-center', }) ; 
}
else if (AdmIsOk) {
sessionStorage.setItem('admOnNanoId',JSON.stringify(AdmIsOk.nanoId));
sessionStorage.setItem('ActualPage','/ProductRegister') ;
navigate('/ProductRegister');
}  
}


return (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

<div className={`${ThemeForContainer} `}>

 {/* <ToastContainer /> */}

<div className="sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex justify-center  min-h-[calc(68vh)] ">

<div className={`${ThemeForComponent}  rounded-lg w-full max-w-[350px] p-2 max-h-[400px] h-full mx-1 mt-5 shadow-2xl`} >

<FormAdmLog AdmLog={AdmLog} setAdmLog={setAdmLog}/>

<p className="text-center">ou</p>

<Link to='/AdmRegister' className="bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700 w-full block text-center">
 Cadastrar</Link>
</div>

</div>  
</div> 


  </motion.div>
);
};


export default LoginPage
