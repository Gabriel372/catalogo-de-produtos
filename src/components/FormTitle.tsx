import { Tadm, TstateFormTitle } from "./Types"
import { FaRegSave } from "react-icons/fa";
import { CatalogContext } from './CatalogContext';
import { useState,useContext,useEffect } from 'react';
import {TformTitle,TadmOn,TboxAdm} from './Types'
import {db} from '../components/firebase'
import { doc,updateDoc } from "firebase/firestore";

function FormTitle({FormIsOpen,setFormIsOpen}:TstateFormTitle) {
    const { AdmOn, setAdmOn, BoxAdm,setBoxAdm  } = useContext(CatalogContext) as TadmOn & TboxAdm;
    const [InputValue, setInputValue] = useState<string>(AdmOn.titlePage); 
    const [MsgBtnWait, setMsgBtnWait] = useState<boolean>(false) 

useEffect(() => {
if (MsgBtnWait) {
if (InputValue !== AdmOn.titlePage) {
setAdmOn(prevState => ({...prevState, titlePage: InputValue}));
}  
else {setFormIsOpen(false)}}
}, [MsgBtnWait]);

useEffect(() => {
 if (MsgBtnWait) {
 UpdtAdmInFirebase(); 
 }   
  }, [AdmOn]);


function clickSaveTitle(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
setMsgBtnWait(true);
}

async function UpdtAdmInFirebase() {
    try {const docRef:any =  AdmOn
        const Source = doc(db, "AdmCDP", docRef.id);
        await updateDoc(Source,docRef);
        UpdtAdmInBox()
          } catch (erro) {
        console.error('Erro ao atualizar: ', erro);
        setMsgBtnWait(false) ;   
        setFormIsOpen(false);
}}

function UpdtAdmInBox() {
setBoxAdm(BoxAdm.map(adm => adm.id === AdmOn?.id ? AdmOn : adm ));
setMsgBtnWait(false)
setFormIsOpen(false);

}

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
setInputValue(e.target.value)   ; 
}

return (
<form onSubmit={clickSaveTitle} className="flex flex-row min-h-[50px] items-center w-full justify-center">
<input className="border border-b-black max-w-[250px] w-full" type="text" name="titlePage"
value={InputValue} onChange={ChangeInput}/>

<button className="max-h-[30px] flex flex-row bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700  px-2  text-sm ml-2 items-center">
{MsgBtnWait ? 'Aguarde...':<span className=" flex flex-row items-center">
<FaRegSave className="mr-1"/>Salvar</span>}
</button>

</form>


)

}

export  default FormTitle
