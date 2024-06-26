import { useState,useContext } from 'react';
import { CatalogContext } from './CatalogContext';
import { TadmIsLoggedin,TstateModeTheme } from './Types';
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

function MenuMobile() {
    const { ModeTheme,setAdmIsLoggedin } = useContext(CatalogContext) as TadmIsLoggedin & TstateModeTheme
    const [interrupt ,setInt] = useState(false)
    const [AdmGetOut,setAdmGetOut] = useState<boolean>(false)
    const ThemeForComponent = ModeTheme?.themeIsDark ? 'text-white bg-gray-800 duration-500':'text-back bg-gray-200 duration-500' 
    const ThemeForUlMenu = ModeTheme?.themeIsDark ? 'border border-gray-500 text-white bg-neutral-800 duration-500':'border border-gray-300  text-back bg-gray-200 duration-500' 

function AdmExit() {
sessionStorage.removeItem('admOnNanoId'); 
setAdmGetOut(true);
SaveActualPage('/LoginPage')
setAdmIsLoggedin(false) }
    
function SaveActualPage(page:string) {
sessionStorage.setItem('ActualPage',page) }
      
return (<div className=' hidden w-screen850:block ' >

<button className={`${ThemeForComponent} text-2xl transition duration-500 ease-in-out transform`}
onClick={() => {setInt(!interrupt)}}>
<div style={{ transform: interrupt ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.4s ease-in-out" }} >
{interrupt ? (<IoClose />) : (<FiMenu />)}
</div>
</button>

<div className={`flex justify-end z-20 absolute left-0 top-0 w-full box-border max-h-0 transition-all duration-200 ease-in
${interrupt && '  h-[100vh] max-h-[100vh] transition-all duration-200 ease-in'}`} onClick={()=> setInt(!interrupt)} > 

<ul className={`${ThemeForUlMenu} ${interrupt ? `z-20 text-left flex flex-col  relative pb-2 m-0 ml-1.25  rounded-md right-1 top-[55px] p-2 h-screen400:top-[40px] shadow-2xl text-xl max-h-48`:
'hidden'}`}> 

<Link onClick={()=>SaveActualPage('/')} to='/' 
className={`pb-2 rounded-md `}>Ver produtos</Link> 
<Link onClick={()=>SaveActualPage('/RegistredProduct')} to='/RegistredProduct'
 className=' pb-2 rounded-md'>Produtos cadastrados</Link>      
<Link onClick={()=>SaveActualPage('/ProductRegister')} to='/ProductRegister'
 className=' pb-2 rounded-md '>Cadastrar produtos</Link> 

<Link onClick={()=>SaveActualPage('/AccountAdm')} to='/AccountAdm'
 className=' pb-2 rounded-md '>Minha conta</Link> 

<Link onClick={AdmExit} to='/LoginPage' className=' rounded-md '>
 Sair </Link> 

</ul> 
</div>

</div>)    
}

export default MenuMobile
