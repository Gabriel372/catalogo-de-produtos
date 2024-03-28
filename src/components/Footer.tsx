import ModalFooter from "./ModalFooter"
import { CatalogContext } from './CatalogContext';
import { useState,useContext } from 'react';
import {TstateInfoCompany} from './Types'
import { SlPencil } from "react-icons/sl";

function Footer() {
const {InfoCompany} = useContext(CatalogContext) as TstateInfoCompany;
const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false) 

return <footer className="bg-black text-white">


<div  className="w-full sm:w-auto mx-auto max-w-[1100px] px-2 flex flex-row justify-between h-[calc(13vh)] items-center">
{/* <FormFooter/> */}
<button onClick={()=>setModalIsOpen(true)} 
className="border border-white rounded-full px-3 py-1 flex flex-row items-center ">
<SlPencil className="mr-1"/>Editar Informaçoes</button>
</div>


<ModalFooter ModalIsOpen={ModalIsOpen} setModalIsOpen={setModalIsOpen}/>
<button onClick={()=>console.log(InfoCompany)}>TESTE</button>

</footer>    
}

export default Footer
