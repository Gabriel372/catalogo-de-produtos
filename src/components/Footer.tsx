import ModalFooter from "./ModalFooter"
import { CatalogContext } from './CatalogContext';
import { useState,useContext } from 'react';
import {TstateInfoCompany,TadmIsLoggedin} from './Types'
import { SlPencil } from "react-icons/sl";
import { PiMapPinBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";

function Footer() {
const {InfoCompany ,AdmIsLoggedin} = useContext(CatalogContext) as TstateInfoCompany & TadmIsLoggedin
const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false) 
const hasPaymentMethod = InfoCompany.acceptPayCredit || InfoCompany.acceptPayDebit || InfoCompany.acceptPayMoney || InfoCompany.acceptPayPix ;   
const infoIsEmpty = !InfoCompany.addresStore && !InfoCompany.celphone && !InfoCompany.servicePeriod &&
!InfoCompany.acceptPayCredit && !InfoCompany.acceptPayDebit && !InfoCompany.acceptPayMoney && !InfoCompany.acceptPayPix ;   

function ShowInfoCompany() {
return (
<ul className="flex flex-col">
{InfoCompany.addresStore && <li className="font-bold flex flex-row items-center">
<PiMapPinBold className="mr-1 text-lg"/>
Endereço:<span className=" font-normal ml-1">{InfoCompany.addresStore} </span></li>}

{InfoCompany.celphone && <li className="font-bold flex flex-row items-center"><BsWhatsapp className="mr-1"/>
Peça pelo WhatsApp:<span className=" font-normal ml-1">{InfoCompany.celphone}</span></li>}

{InfoCompany.servicePeriod && <li className="font-bold flex flex-row items-center"><LuAlarmClock  className="mr-1"/>
Horário de atendimento:<span className=" font-normal ml-1">{InfoCompany.servicePeriod}</span></li>}

{hasPaymentMethod && <li className="font-bold flex flex-row items-center"><GiReceiveMoney className="mr-1 text-xl"/>Formas de pagamento:
 <div className=" font-normal ml-1">
 {InfoCompany.acceptPayCredit && <span> Cartão de crédito</span>}   
 {InfoCompany.acceptPayDebit && <span> Cartão de débito</span>}   
 {InfoCompany.acceptPayMoney && <span> Dinheiro</span>}   
 {InfoCompany.acceptPayPix && <span> Pix</span>}  
 </div>
 
    </li>}
</ul>

)

}

return <footer className="bg-black text-white">


<div  className="w-full sm:w-auto mx-auto max-w-[1100px] px-2 flex flex-row justify-between h-[calc(18vh)] items-center">
{ShowInfoCompany()}

{AdmIsLoggedin && <button onClick={()=>setModalIsOpen(true)} 
className="border border-white rounded-full px-3 py-1 flex flex-row items-center ">
<SlPencil className="mr-1"/>{infoIsEmpty && 'Editar informaçoes'} </button>}


</div>
<ModalFooter ModalIsOpen={ModalIsOpen} setModalIsOpen={setModalIsOpen}/>

</footer>    
}

export default Footer
