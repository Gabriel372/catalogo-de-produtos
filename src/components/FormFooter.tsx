import { useState,useContext,useEffect } from 'react';
import { TformFooter,TadmOn,TboxAdm,TstateInfoCompany,TstateModalFooter } from './Types';
import { CatalogContext } from './CatalogContext';


function FormFooter({MsgBtnWait,setMsgBtnWait,FormValue,setFormValue}:TstateModalFooter) {
const { AdmOn, InfoCompany,BoxAdm,setInfoCompany,setAdmOn,setBoxAdm} = useContext(CatalogContext) as TadmOn & TboxAdm & TstateInfoCompany ;
const eventPayNames = ['acceptPayCredit', 'acceptPayDebit', 'acceptPayMoney', 'acceptPayPix']; 
const [HasValueToPass,setHasValueToPass] = useState<boolean>(true)



useEffect(() => {
    if (HasValueToPass) {
    setHasValueToPass(false);    
    setFormValue(InfoCompany);    
    }
    }, [HasValueToPass]) 



function ClickUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
setMsgBtnWait(true)
}

function ChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
    const { name, checked, value } = e.target;
if (eventPayNames.includes(name)) {
    setFormValue(PrevState => ({...PrevState,[name]:checked})) ;  
}
else {
    setFormValue(PrevState => ({...PrevState,[name]:value})) 

}

}


return (<form onSubmit={ClickUpdate} className=' flex flex-col'>
<label className="flex flex-col mb-2">
   Whatzapp do atendente
   <input autoFocus type="number" name="celphone" placeholder="whatzapp" value={FormValue.celphone}
   onChange={ChangeInput} className="rounded-full px-3 py-1"/>
   </label>

   <label className="flex flex-col mb-2">
   Endereço da loja
   <input type="text" name="addresStore" placeholder="endereço" value={FormValue.addresStore}
   onChange={ChangeInput} className="rounded-full px-3 py-1"/>
   </label>

   <label className="flex flex-col mb-2">
Descreva o horário de atendimento
   <input type="text" name="servicePeriod" placeholder="" value={FormValue.servicePeriod}
   onChange={ChangeInput} className="rounded-full px-3 py-1"/>
   </label>

<label className="flex flex-col mb-2">
Marque suas formas de pagamento:    
<label>
Cartão de crédito: 
<input type="checkbox" name="acceptPayCredit" checked={FormValue.acceptPayCredit}
 onChange={ChangeInput}/>  
</label>

<label>
Cartão de Débito: 
<input type="checkbox" name="acceptPayDebit" checked={FormValue.acceptPayDebit}
 onChange={ChangeInput}/>  
</label>

<label>
Dinheiro: 
<input type="checkbox" name="acceptPayMoney" checked={FormValue.acceptPayMoney}
 onChange={ChangeInput}/>  
</label>

<label>
Pix:
<input type="checkbox" name="acceptPayPix" checked={FormValue.acceptPayPix}
 onChange={ChangeInput}/>  
</label>



</label>


<button className="border border-white rounded-full px-3 py-1 flex flex-row items-center bg-black text-white justify-center">
{MsgBtnWait ? 'Aguarde...':'Atualizar'}</button>
</form>)    
}

export default FormFooter
