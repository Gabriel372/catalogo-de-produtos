import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import { CatalogContext } from './CatalogContext';
import {TadmIsLoggedin,TadmOn,TboxAdm} from './Types'
import MenuOutside from './MenuOutside'

import { FaShoppingBasket } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

function Header() {
const { AdmIsLoggedin,setAdmIsLoggedin } = useContext(CatalogContext) as TadmIsLoggedin
const ActualPage = sessionStorage.getItem('ActualPage')?.replace(/\/%22|\/\//g, '') || '/';
const navigate = useNavigate();
const [AdmGetOut,setAdmGetOut] = useState<boolean>(false)
const { AdmOn, setAdmOn, BoxAdm } = useContext(CatalogContext) as TadmOn & TboxAdm;
const admOnNanoId = sessionStorage.getItem('admOnNanoId')

useEffect( () => { 
CheckStatusPageForNavigate()
},[AdmIsLoggedin,ActualPage,AdmGetOut ])

function CheckStatusPageForNavigate() {
    if (admOnNanoId && ActualPage) { 
 setAdmOn(BoxAdm.find( (adm) => ( JSON.stringify(adm.nanoId) === admOnNanoId  ) ) )       
setAdmIsLoggedin(true);
navigate(ActualPage);
        } 
else if (AdmGetOut) {
    navigate('/LoginPage');  
}
else{    navigate('/'); }
}
    
function RemoveAdmEpage() {
    sessionStorage.removeItem('ActualPage');  
    sessionStorage.removeItem('admOnNanoId'); 
    setAdmGetOut(true);
    setAdmIsLoggedin(false);
}

function SaveActualPage(page:string) {
    sessionStorage.setItem('ActualPage',page)
  }
  
    return <header className="bg-black text-white">
    <nav className="w-full sm:w-auto mx-auto max-w-[1100px] px-2 flex flex-row justify-between h-[calc(13vh)] items-center">
 <Link to='./' className='text-red-400 text-3xl ml-2'>
<FaShoppingBasket />
        </Link>

{AdmIsLoggedin && <div className="text-xl">
<Link onClick={()=>SaveActualPage('/')} to='/' 
className='mr-2 p-1 rounded-md hover:bg-gray-700'>Ver produtos</Link> 
<Link onClick={()=>SaveActualPage('/RegistredProduct')} to='/RegistredProduct'
 className='mr-2 p-1 rounded-md hover:bg-gray-700'>Produtos cadastrados</Link>      
<Link onClick={()=>SaveActualPage('/ProductRegister')} to='/ProductRegister'
 className='mr-2 p-1 rounded-md hover:bg-gray-700'>Cadastrar Produtos</Link> 
<Link onClick={RemoveAdmEpage} to='/LoginPage' className='mr-2 p-1 rounded-md hover:bg-gray-700'>
 sair </Link> 
</div>}

{!AdmIsLoggedin &&<Link to='/LoginPage' className=' text-2xl'><RiLoginBoxLine /></Link> }

</nav>
    </header>
}

export default Header
