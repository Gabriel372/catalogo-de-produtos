import { useState,useEffect,useContext } from 'react';
import { CatalogContext } from './CatalogContext';
import { TadmIsLoggedin } from './Types';
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

function MenuMobile() {
    const { AdmIsLoggedin,setAdmIsLoggedin } = useContext(CatalogContext) as TadmIsLoggedin
    const [interrupt ,setInt] = useState(false)
    const [AdmGetOut,setAdmGetOut] = useState<boolean>(false)

    function RemoveAdmEpage() {
        sessionStorage.removeItem('ActualPage');  
        sessionStorage.removeItem('admOnNanoId'); 
        setAdmGetOut(true);
        setAdmIsLoggedin(false);
    }
    
    function SaveActualPage(page:string) {
        sessionStorage.setItem('ActualPage',page)
      }
      

return (<div className=' hidden w-screen800:block ' >

<button className=' text-white text-2xl' onClick={()=>{setInt(!interrupt)}}  >
{interrupt ? <IoClose />:<FiMenu className=' text-white' />}
</button>

<div className={`flex justify-end z-20 absolute left-0 top-0 w-full box-border max-h-0 transition-all duration-200 ease-in
${interrupt && '  h-[100vh] max-h-[100vh] transition-all duration-100 ease-in'}`} onClick={()=> setInt(!interrupt)} > 
<ul className={`${interrupt ? 'z-20 text-left flex flex-col bg-black relative pb-2 m-0 ml-1.25 border border-gray-300 rounded-md max-h-32 right-1 top-20 p-2':
'hidden'}`}>
<Link onClick={()=>SaveActualPage('/')} to='/' 
className='pb-1 pl-1 rounded-md hover:bg-gray-700'>Ver produtos</Link> 
<Link onClick={()=>SaveActualPage('/RegistredProduct')} to='/RegistredProduct'
 className=' pb-1 px-1 rounded-md hover:bg-gray-700'>Produtos cadastrados</Link>      
<Link onClick={()=>SaveActualPage('/ProductRegister')} to='/ProductRegister'
 className=' pb-1 pl-1 rounded-md hover:bg-gray-700'>Cadastrar Produtos</Link> 
<Link onClick={RemoveAdmEpage} to='/LoginPage' className='mr-2 p-1 rounded-md hover:bg-gray-700'>
 Sair </Link> 

</ul> 
</div>

</div>)    
}

export default MenuMobile
