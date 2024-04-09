import ModalFooter from "./ModalFooter"
import { CatalogContext } from './CatalogContext';
import { useState,useContext } from 'react';
import {TstateInfoCompany,TadmIsLoggedin,TstateModeTheme} from './Types'
import { SlPencil } from "react-icons/sl";
import { PiMapPinBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";

function Footer() {
const {InfoCompany ,AdmIsLoggedin,ModeTheme} = useContext(CatalogContext) as TstateInfoCompany & TadmIsLoggedin & TstateModeTheme
const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false) 
const hasPaymentMethod = InfoCompany.acceptPayCredit || InfoCompany.acceptPayDebit || InfoCompany.acceptPayMoney || InfoCompany.acceptPayPix ;   
const infoIsEmpty = !InfoCompany.addresStore && !InfoCompany.celphone && !InfoCompany.servicePeriod &&
!InfoCompany.acceptPayCredit && !InfoCompany.acceptPayDebit && !InfoCompany.acceptPayMoney && !InfoCompany.acceptPayPix ;   
const ThemeForComponent = ModeTheme?.themeIsDark ? 'text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500  '

function ShowInfoCompany() {
return (
<ul className={`flex flex-col`}>
{InfoCompany.addresStore && <li className="font-bold mb-1">
<PiMapPinBold className="mr-1 text-lg inline"/>
Endereço:<span className=" font-normal ml-1">{InfoCompany.addresStore} </span></li>}

{InfoCompany.celphone && <li className="font-bold flex flex-row items-center mb-1"><BsWhatsapp className="mr-1"/>
Peça pelo WhatsApp:<span className=" font-normal ml-1">{InfoCompany.celphone}</span></li>}

{InfoCompany.servicePeriod && <li className="font-bold items-center mb-1"><LuAlarmClock  className="mr-1 inline"/>
Horário de atendimento:<span className=" font-normal ml-1">{InfoCompany.servicePeriod}</span></li>}

{hasPaymentMethod && <li className="font-bold flex flex-row w-screen600:flex-col mb-2">
 <span >
<GiReceiveMoney className="mr-1 text-xl inline"/>Formas de pagamento:
 </span>

 <div className=" font-normal ml-1">
 {InfoCompany.acceptPayCredit && <span> Cartão de crédito,</span>}   
 {InfoCompany.acceptPayDebit && <span> Cartão de débito,</span>}   
 {InfoCompany.acceptPayMoney && <span> Dinheiro,</span>}   
 {InfoCompany.acceptPayPix && <span> Pix</span>}  
 </div>
 
    </li>}
</ul>

)

}

return <footer className={`${ThemeForComponent} pb-3 pt-2`}>

<div  className="w-full sm:w-auto mx-auto max-w-[1100px] px-2 flex justify-between h-full max-h-[700px] flex-col ">

{ShowInfoCompany()}

{AdmIsLoggedin &&
<div>
<button onClick={()=>setModalIsOpen(true)} 
className={`${!ModeTheme.themeIsDark && 'border-black'}  border  rounded-full px-3 py-1`}>
<SlPencil className="mr-1"/>{infoIsEmpty && 'Editar informaçoes'} </button>
</div>
}

</div>
<ModalFooter ModalIsOpen={ModalIsOpen} setModalIsOpen={setModalIsOpen}/>
</footer>    
}

export default Footer
