
import { IoArrowBackSharp } from "react-icons/io5";
import { Link,useNavigate } from 'react-router-dom';
import {nanoid} from "nanoid";
import { Tadm,Tstate } from "../components/Types";
import { useState,useContext,useEffect } from 'react';
import FormAdmRegist from '../components/FormAdmRegist'
import {  addDoc, collection } from "firebase/firestore"; 
import {db} from '../components/firebase'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";

function AdmRegister() {
const [AdmToStorage, setAdmToStorage] = useState<Tadm>({
 name: '',email: '',password: '',celphone:'',titlePage:'',addresStore:'',
 nanoId:'',id:'',acceptPayCredit:false,acceptPayDebit:false,
 acceptPayMoney:false,acceptPayPix:false}); 
const [MsgWaitBtn,setMsgWaitBtn] = useState<boolean>(false);
const navigate = useNavigate();


useEffect(() => {
if (MsgWaitBtn) {
PostAdmInFirebase()  }

}, [MsgWaitBtn]) ;

async function PostAdmInFirebase() {
try { 
const docRef = await addDoc(collection(db,"AdmCDP"),AdmToStorage).then((docRef)=> {
setAdmToStorage((prevState => ({...prevState,id:docRef.id})));
InsertAdmInBox();
})
}
catch (e) {
console.error("Error adding document: ", e);
setMsgWaitBtn(false);
}
}

function InsertAdmInBox() {
setAdmToStorage({
name: '',email: '',password: '',celphone:'',titlePage:'',addresStore:'',
nanoId:'',id:'',acceptPayCredit:false,acceptPayDebit:false,
acceptPayMoney:false,acceptPayPix:false}); 
setMsgWaitBtn(false);
AdmLogin();
}
function AdmLogin() {
sessionStorage.setItem('admOnNanoId',JSON.stringify(AdmToStorage.nanoId));
sessionStorage.setItem('ActualPage','/ProductRegister') ;
navigate('/ProductRegister') ;  
}


return  (
<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <div className="px-1">
<div className="flex mt-1">
<Link to='/' className="h-[30px] w-[25px] mt-1 ml-1">
 <IoArrowBackSharp />
 </Link>

    <h3 className="font-bold block w-full text-center">Cadastre-se como administrador</h3>

</div>

    <div className="sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex justify-center min-h-[calc(95vh)] ">
   <FormAdmRegist AdmToStorage={AdmToStorage} setAdmToStorage={setAdmToStorage} MsgWaitBtn={MsgWaitBtn} setMsgWaitBtn={setMsgWaitBtn}/>
 
    {/* <div className="border rounded-lg bg-gray-200 w-full max-w-[350px] p-2 max-h-[400px] h-full  mt-5" >    
    </div> */}
    
    </div>
    <button onClick={()=> console.log(AdmToStorage)}>TESTE</button>  
    </div> 
</motion.div>

    )

      
}

export default AdmRegister