import { TstateModalisOpen,TinfoCompany,TstateInfoCompany,TstateModeTheme } from "./Types"
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
const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme;
const ThemeForModal = ModeTheme?.themeIsDark ? 'text-white bg-neutral-700 duration-500 border border-gray-600':'bg-gray-200 duration-500 border border-gray-500'


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
{ModalIsOpen && <div className='bg-custom-black fixed w-full h-full top-0 flex justify-center items-center text-black py-1'
onClick={()=>setModalIsOpen(false)}>


<div className={`${ThemeForModal} rounded-md max-w-[350px] pt-0 p-2 flex flex-col justify-around w-full
 h-screen450:h-full h-screen450:overflow-y-scroll`}
onClick={(e)=> e.stopPropagation()}>

<div className=" flex flex-row justify-between ">
<h3 className=" text-xl">Informacoes de loja</h3>

<button onClick={CloseModal}>
<IoClose className=" text-2xl"/></button>

</div>
<p>Preencha somente informaçõoes que deseja exibir</p>

    <FormFooter MsgBtnWait={MsgBtnWait} setMsgBtnWait={setMsgBtnWait} 
    FormValue={FormValue} setFormValue={setFormValue}/>

  </div>
    

    </div>}

</div>)    

}

export default ModalFooter
