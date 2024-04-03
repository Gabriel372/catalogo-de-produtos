import { TstateModalisOpen,TinfoCompany,TstateInfoCompany } from "./Types"
import FormFooter from "./FormFooter"
import { IoClose } from "react-icons/io5";
import { useContext,useEffect,useState } from 'react';
import { CatalogContext } from './CatalogContext';
import { updateDoc,doc } from "firebase/firestore"; 
import {db} from '../components/firebase';

function ModalFooter({ModalIsOpen,setModalIsOpen}:TstateModalisOpen) {
const [MsgBtnWait,setMsgBtnWait] = useState<boolean>(false)
const {InfoCompany,setInfoCompany} = useContext(CatalogContext) as TstateInfoCompany ;
const EmptyValuesForm = {celphone:'',addresStore:'',servicePeriod:'',titlePage:'',nanoId:'',id:'',acceptPayCredit:false,acceptPayDebit:false,acceptPayMoney:false,acceptPayPix:false}
const [FormValue,setFormValue] = useState<TinfoCompany>(EmptyValuesForm);

useEffect(() => {
if (MsgBtnWait) {
UpdtFormValueInFirebase()    
}
}, [MsgBtnWait]) 

async function UpdtFormValueInFirebase() {
    try {const docRef:any =  FormValue
        const Source = doc(db, "InfoCompanyCDP", docRef.id);
        await updateDoc(Source,docRef);
   setInfoCompany(docRef);
    setMsgBtnWait(false);
    } catch (erro) {
        console.error('Erro ao atualizar: ', erro);
        setMsgBtnWait(false)
      }    
}

function CloseModal() {
setFormValue(EmptyValuesForm);    
setModalIsOpen(false);    
}


return (<div >
{ModalIsOpen && <div className='bg-custom-black fixed w-full h-full top-0 flex justify-center items-center text-black'
onClick={()=>setModalIsOpen(false)}>


<div className=' rounded-md bg-gray-200 max-w-[350px] pt-0 p-2 flex flex-col justify-around w-full'
onClick={(e)=> e.stopPropagation()}>

<div className=" flex flex-row justify-between">
<h3 className=" text-xl">Informacoes de loja</h3>

<button onClick={CloseModal}>
<IoClose className=" text-black text-2xl"/></button>

</div>
<p>Preencha somente informaçõoes que deseja exibir</p>

    <FormFooter MsgBtnWait={MsgBtnWait} setMsgBtnWait={setMsgBtnWait} 
    FormValue={FormValue} setFormValue={setFormValue}/>

  </div>
    

    </div>}

</div>)    

}

export default ModalFooter
