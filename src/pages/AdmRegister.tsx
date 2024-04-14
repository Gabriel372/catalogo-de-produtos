import { useNavigate } from 'react-router-dom';
import { Tadm,TstateModeTheme } from "../components/Types";
import { useState,useEffect,useContext } from 'react';
import FormAdmRegist from '../components/FormAdmRegist'
import {  addDoc, collection } from "firebase/firestore"; 
import {db} from '../components/firebase'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import {CatalogContext} from '../components/CatalogContext'
import { TboxAdm,TstatusAdmRegist } from '../components/Types';

function AdmRegister() {
const [AdmToStorage, setAdmToStorage] = useState<Tadm>({name: '',email: '',password: '',nanoId:'',id:''}); 
const navigate = useNavigate();
const {  ModeTheme ,setBoxAdm,BoxAdm } = useContext(CatalogContext) as TstateModeTheme & TboxAdm
const ThemeForContainer = ModeTheme?.themeIsDark ? 'bg-black duration-500 text-white':'bg-white duration-500'
const [Status,setStatus] = useState<TstatusAdmRegist>({msgBtnWait:false,hasAdmToPost:false});

useEffect(() => {
if (Status.hasAdmToPost) {
PostAdmInFirebase()  }
else if (Status.msgBtnWait && AdmToStorage.id ) {
InsertAdmInBox()   }
}, [Status,AdmToStorage]) ;

async function PostAdmInFirebase() {
setStatus(({msgBtnWait:true,hasAdmToPost:false})); 
try { 
const docRef = await addDoc(collection(db,"AdmCDP"),AdmToStorage).then((docRef)=> {
setAdmToStorage((prevState => ({...prevState,id:docRef.id})));
})
}
catch (e) {
console.error("Error adding document: ", e);
setStatus(({msgBtnWait:false,hasAdmToPost:false})); 
}
}

function InsertAdmInBox() {
setBoxAdm(prevState=>([...prevState,AdmToStorage]));
sessionStorage.setItem('admOnNanoId',JSON.stringify(AdmToStorage.nanoId));
setAdmToStorage({name: '',email: '',password: '',nanoId:'',id:''}); 
AdmLogin();
}

function AdmLogin() {
sessionStorage.setItem('ActualPage','/ProductRegister') ;
setStatus(({msgBtnWait:false,hasAdmToPost:false})); 
navigate('/ProductRegister') 
}

return  (
<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <div className={`${ThemeForContainer} px-1 pb-2`}>
<div className={`${ThemeForContainer} flex pt-1`}>

    <h3 className="font-bold block w-full text-center my-1">Cadastre-se como administrador</h3>

</div>

    <div className="sm:w-auto mx-auto sm:max-w-[1100px] flex justify-center min-h-[calc(68vh)] items-center">
   <FormAdmRegist AdmToStorage={AdmToStorage} setAdmToStorage={setAdmToStorage} Status={Status} setStatus={setStatus}/>
 
    </div>
    </div> 
</motion.div>
    )     
}
export default AdmRegister