import FormTitle from "./FormTitle"
import { BsPencil } from "react-icons/bs";
import { useState,useContext } from 'react';
import {TstateInfoCompany} from './Types'
import { CatalogContext } from './CatalogContext';

function Title() {
const { InfoCompany } = useContext(CatalogContext) as TstateInfoCompany
const [FormIsOpen,setFormIsOpen] = useState<boolean>(false)

    return (
   <div className="flex justify-center">
    
  {FormIsOpen ?
<FormTitle FormIsOpen={FormIsOpen} setFormIsOpen={setFormIsOpen}/>
:
<div className="flex flex-row justify-center">
<h3 className='text-2xl text-center my-2'>
{InfoCompany.titlePage ? InfoCompany.titlePage : <span className="text-2xl text-center my-2 text-gray-300">Digite seu titulo</span>}
</h3>

<button onClick={() => setFormIsOpen(true)}
className=" text-black ml-1" >
<BsPencil/>
</button>
</div>

}  

    </div>


    )
    
 
}

export default Title
