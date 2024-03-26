import FormTitle from "./FormTitle"
import { BsPencil } from "react-icons/bs";
import { useState,useContext,useEffect } from 'react';
import {TformTitle,TadmOn,TboxAdm} from './Types'
import { CatalogContext } from './CatalogContext';

function Title() {
const { AdmOn } = useContext(CatalogContext) as TadmOn
const [FormIsOpen,setFormIsOpen] = useState<boolean>(false)

    return (
   <div className="flex justify-center">
    
  {FormIsOpen ?
<FormTitle FormIsOpen={FormIsOpen} setFormIsOpen={setFormIsOpen}/>
:
<div className="flex flex-row justify-center">
<h3 className='text-2xl text-center my-2'>{AdmOn.titlePage}</h3>

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
