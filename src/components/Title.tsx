import FormTitle from "./FormTitle"
import { BsPencil } from "react-icons/bs";
import { useState,useContext,useEffect } from 'react';
import {TformTitle,TadmOn,TboxAdm} from './Types'
import { CatalogContext } from './CatalogContext';

function Title() {
const [Form,setForm] = useState<TformTitle>({IsOpen:false,inputValue:''})
const { AdmOn, setAdmOn, BoxAdm,setBoxAdm  } = useContext(CatalogContext) as TadmOn & TboxAdm;


    return (
   <div className="flex justify-center">
    
  {Form.IsOpen ?
<FormTitle Form={Form} setForm={setForm}/>
:
<div className="flex flex-row justify-center">
<h3 className='text-2xl text-center my-2'>Produtos Cadastrados</h3>

<button onClick={() => setForm( prevState => ({...prevState,IsOpen:true}))}
className=" text-black ml-1" >
<BsPencil/>
</button>

</div>


}  




    </div>


    )
    
 
}

export default Title
