import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import { CatalogContext } from './CatalogContext';
import { TadmIsLoggedin,TadmOn,TboxAdm,TstateModeTheme,TstateAdmGetOut} from './Types'
import { FaShoppingBasket } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import MenuMobile from './MenuMobile';
import BtnToggleMode from './BtnToggleMode';

function Header() {
const {BoxAdm,ModeTheme,AdmIsLoggedin,AdmGetOut,setAdmGetOut,setAdmOn,setAdmIsLoggedin     
} = useContext(CatalogContext) as TadmOn & TboxAdm & TstateModeTheme & TadmIsLoggedin & TstateAdmGetOut
const ActualPage = sessionStorage.getItem('ActualPage')?.replace(/\/%22|\/\//g, '') || '/';
const navigate = useNavigate();
const admOnNanoId = sessionStorage.getItem('admOnNanoId')
const foundAdm = BoxAdm.find((adm) => JSON.stringify(adm.nanoId) === admOnNanoId);
const ThemeForComponent = ModeTheme?.themeIsDark ? 'text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500  '

useEffect( () => { 
CheckStatusPageForNavigate();
},[AdmIsLoggedin,ActualPage,AdmGetOut,foundAdm ])

function CheckStatusPageForNavigate() {
if (admOnNanoId ) { 
setAdmIsLoggedin(true);
navigate(ActualPage);
        } 
else if (AdmGetOut) {
setAdmIsLoggedin(false);   
navigate(ActualPage);  
}
else if(!admOnNanoId && !AdmGetOut){
    navigate('/'); 
}
}
 

function AdmExit() {
    SaveActualPage('/LoginPage')
    sessionStorage.removeItem('admOnNanoId'); 
    setAdmGetOut(true);
    setAdmIsLoggedin(false);
}

function SaveActualPage(page:string) {
    sessionStorage.setItem('ActualPage',page)
  }
  
    return <header className={ThemeForComponent}>
    <nav className="w-full sm:w-auto mx-auto max-w-[1100px] px-2 flex flex-row justify-between h-[calc(12vh)] items-center w-screen800:h-[calc(10vh)]">
 <Link to='./' onClick={()=>SaveActualPage('/')}
 className='text-red-400 text-3xl ml-2'>
<FaShoppingBasket />
        </Link>

<BtnToggleMode/>

{AdmIsLoggedin && <div className="text-xl w-screen850:hidden">
<Link onClick={()=>SaveActualPage('/')} to='/' 
className={`${ModeTheme.themeIsDark ? 'hover:bg-gray-700':'hover:bg-gray-300' } mr-2 p-1 rounded-md `}>Ver produtos</Link> 
<Link onClick={()=>SaveActualPage('/RegistredProduct')} to='/RegistredProduct'
className={`${ModeTheme.themeIsDark ? 'hover:bg-gray-700':'hover:bg-gray-300' } mr-2 p-1 rounded-md `}>Produtos cadastrados</Link>      
<Link onClick={()=>SaveActualPage('/ProductRegister')} to='/ProductRegister'
 className={`${ModeTheme.themeIsDark ? 'hover:bg-gray-700':'hover:bg-gray-300' } mr-2 p-1 rounded-md `}>Cadastrar produtos</Link> 
<Link onClick={()=>SaveActualPage('/AccountAdm')} to='/AccountAdm'
 className={`${ModeTheme.themeIsDark ? 'hover:bg-gray-700':'hover:bg-gray-300' } mr-2 p-1 rounded-md `}>Minha conta</Link> 
<Link onClick={AdmExit} to='/LoginPage' 
className={`${ModeTheme.themeIsDark ? 'hover:bg-gray-700':'hover:bg-gray-300' } mr-2 p-1 rounded-md `}>
 Sair </Link> 
</div>}

{!AdmIsLoggedin &&<Link to='/LoginPage' className=' text-2xl'><RiLoginBoxLine /></Link> }

{AdmIsLoggedin && <MenuMobile/>}
</nav>
    </header>
}

export default Header
