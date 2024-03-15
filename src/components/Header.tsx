import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import { CatalogContext } from './CatalogContext';
import {TadmIsLoggedin} from './Types'

function Header() {
const AdmLoged = sessionStorage.getItem('admStorage');
const { AdmIsLoggedin,setAdmIsLoggedin } = useContext(CatalogContext) as TadmIsLoggedin
const ActualPage = sessionStorage.getItem('ActualPage')?.replace(/\/%22|\/\//g, '') || '/';
const navigate = useNavigate();

useEffect( () => { 
CheckStatusPageForNavigate()
},[AdmIsLoggedin,ActualPage ])

function CheckStatusPageForNavigate() {
    let adm = sessionStorage.getItem('admStorage');
    if (adm && ActualPage) { 
        setAdmIsLoggedin(true);
      navigate(ActualPage);
        } 
    else{navigate('/');  }  }
    
function SaveActualPage(page:string) {
    sessionStorage.setItem('ActualPage',page)
  }
  

function RemoveAdmEpage() {
    sessionStorage.removeItem('ActualPage');  
    sessionStorage.removeItem('admStorage');  
    setAdmIsLoggedin(false);
}


    return <header className="bg-black text-white">
    <nav className="w-full sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex flex-row justify-between h-[calc(13vh)] items-center">
        <span>icon</span>

{AdmIsLoggedin && <div className="text-xl">
<Link onClick={()=>SaveActualPage('/ProductShowPublic')} to='/ProductShowPublic' className='mr-2 p-1 rounded-md hover:bg-gray-700'>Ver produtos</Link>       
<Link onClick={()=>SaveActualPage('/ProductRegister')} to='/ProductRegister' className='mr-2 p-1 rounded-md hover:bg-gray-700'>Cadastrar Produtos</Link> 

{/* <Link  to='/AdmRegister' className='mr-2 p-1 rounded-md hover:bg-gray-700'>Cadastrar admin</Link>        */}
<Link onClick={RemoveAdmEpage} to='/' className='mr-2 p-1 rounded-md hover:bg-gray-700'>Sair</Link> 
</div>}


</nav>

{/* <div className="flex flex-col sm:flex-row h-50 w-full border border-black rounded-md m-5 ml-10 items-center justify-center py-3">
<div className=' bg-red-600 w-40 h-40 m-3 rounded-md flex justify-center items-center'>child 1</div>
<div  className='h-40 w-40 bg-purple-200 m-3 rounded-md flex justify-center items-center'>child 2</div>
<button className='bg-purple-500 text-white rounded-3xl p-3 text-xl cursor-pointer hover:bg-purple-700 '>click-me!</button>
</div> */}

<button onClick={()=>console.log(AdmLoged)}>TESTE</button>
    </header>
}

export default Header
