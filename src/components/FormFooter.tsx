import { useState,useContext,useEffect } from 'react';
import { TformFooter,TadmOn,TboxAdm,TstateInfoCompany,TstateModalFooter,TstateModeTheme } from './Types';
import { CatalogContext } from './CatalogContext';


function FormFooter({MsgBtnWait,setMsgBtnWait,FormValue,setFormValue}:TstateModalFooter) {
const { ModeTheme,AdmOn, InfoCompany,BoxAdm,setInfoCompany,setAdmOn,setBoxAdm} = useContext(CatalogContext) as TadmOn & TboxAdm & TstateInfoCompany & TstateModeTheme;
const eventPayNames = ['acceptPayCredit', 'acceptPayDebit', 'acceptPayMoney', 'acceptPayPix']; 
const [HasValueToPass,setHasValueToPass] = useState<boolean>(true)
const ThemeForInput = ModeTheme?.themeIsDark ? 'bg-gray-900 border-solid border-gray-600 border duration-500':'border border-solid border-gray-300  duration-500'


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
   onChange={ChangeInput} className={`${ThemeForInput} rounded-full px-3 py-1`}/>
   </label>

   <label className="flex flex-col mb-2">
   Endereço da loja
   <input type="text" name="addresStore" placeholder="endereço" value={FormValue.addresStore}
   onChange={ChangeInput} className={`${ThemeForInput} rounded-full px-3 py-1`}/>
   </label>

   <label className="flex flex-col mb-2">
Descreva o horário de atendimento
   <input type="text" name="servicePeriod" placeholder="" value={FormValue.servicePeriod}
   onChange={ChangeInput} className={`${ThemeForInput} rounded-full px-3 py-1`}/>
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


<button className=" rounded-full px-3 py-1 flex flex-row items-center bg-black text-white justify-center hover:bg-gray-800">
{MsgBtnWait ? 'Aguarde...':'Atualizar'}</button>
</form>)    
}

export default FormFooter
