import { CatalogContext } from './CatalogContext';
import { useState,useEffect,useContext } from 'react';
import {TadmIsLoggedin} from './Types'
import { IoClose } from "react-icons/io5";
import { VscKebabVertical } from "react-icons/vsc";
import { Link,useNavigate } from 'react-router-dom';

function MenuOutside() {
    const [Interrupt ,setInterrupt] = useState(false)
        
return (<div>
<button className='btnMobile' onClick={()=>{setInterrupt(!Interrupt)}}  >
{Interrupt ? <IoClose />:<VscKebabVertical />
}
</button>


<div className={`flex justify-end z-10 absolute pr-2 left-0 top-16 w-full box-border max-h-0 transition-all duration-200 ease-in ${Interrupt ? ' max-h-[97vh] h-full transition-all duration-100 ease-in':''}`} onClick={()=> setInterrupt(!Interrupt)} > 

<ul className={`${Interrupt ? 'MobileUl': 'MobileulNone'}`}>

<Link to='/LoginPage'>Entrar como administrador</Link>
 <Link to='/AdmRegister'>Cadastrar-se como administrador</Link>

</ul> 


</div>






</div>)

}

export default MenuOutside
