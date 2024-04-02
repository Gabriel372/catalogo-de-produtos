import { TstateFormTitle } from "./Types"
import { FaRegSave } from "react-icons/fa";
import { CatalogContext } from './CatalogContext';
import {TstateInfoCompany} from './Types'
import {db} from '../components/firebase'
import { doc,updateDoc } from "firebase/firestore";
import { useContext,useEffect,useState } from 'react';

function FormTitle({FormIsOpen,setFormIsOpen}:TstateFormTitle) {
    const {InfoCompany, setInfoCompany  } = useContext(CatalogContext) as & TstateInfoCompany;
    const [MsgBtnWait, setMsgBtnWait] = useState<boolean>(false) 
    const [InputValue, setInputValue] = useState<string>(InfoCompany.titlePage);     
    const [HasInfoToUpdt, setHasInfoToUpdt] = useState<boolean>(false) 

useEffect(() => {
  if (HasInfoToUpdt) {
    setInfoCompany((prevState) => ({ ...prevState, titlePage: InputValue }));
    if (InfoCompany.titlePage === InputValue) {
      setHasInfoToUpdt(false);
      UpdtInfoCompanyInFirebase();
    }
  }
}, [HasInfoToUpdt, InfoCompany.titlePage, InputValue]);

async function UpdtInfoCompanyInFirebase() {
    try {const docRef:any = InfoCompany ;
        const Source = doc(db, "InfoCompanyCDP", docRef.id);
await updateDoc(Source,docRef);
setMsgBtnWait(false);
setFormIsOpen(false);
          } catch (erro) {
        console.error('Erro ao atualizar: ', erro);
        setMsgBtnWait(false) ;   
        setFormIsOpen(false);
}
}

function clickSaveTitle(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
setMsgBtnWait(true);
if (InfoCompany.titlePage === InputValue) {
  setMsgBtnWait(false);
  setFormIsOpen(false);
}
else { setHasInfoToUpdt(true);}
}

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
setInputValue(e.target.value);
}

return (
<form onSubmit={clickSaveTitle} className="flex flex-row min-h-[50px] items-center w-full justify-center">
<input autoFocus className="border border-b-black max-w-[250px] w-full" type="text" name="titlePage"
value={InputValue} onChange={ChangeInput}/>

<button className="max-h-[30px] flex flex-row bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700  px-2  text-sm ml-2 items-center">
{MsgBtnWait ? 'Aguarde...':<span className=" flex flex-row items-center">
<FaRegSave className="mr-1"/>Salvar</span>}
</button>

</form>


)

}

export  default FormTitle
