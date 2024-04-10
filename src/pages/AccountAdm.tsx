import {useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { TboxAdm,TstateModeTheme } from '../components/Types';
import { useContext } from 'react';
import { CatalogContext } from '../components/CatalogContext';
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import ModDelAdm from '../components/ModalDelAdm';

function AccountAdm() {
const admOnNanoId = sessionStorage.getItem('admOnNanoId');
const {BoxAdm,ModeTheme } = useContext(CatalogContext) as TboxAdm & TstateModeTheme
const Adm = BoxAdm.find((adm) => JSON.stringify(adm.nanoId) === admOnNanoId);
const [ModalDelIsOpen,setModalDelIsOpen] = useState<boolean>(false)
const ThemeForContainer = ModeTheme?.themeIsDark ? 'bg-black duration-500 text-white':'bg-white duration-500'
const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'

 return (<div>
 <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

 <div className={`${ThemeForContainer}`}>
    <div className={` max-w-[1200px] m-auto flex flex-col items-center min-h-[70vh]`}>

<h2 className={` text-2xl font-bold my-2`}>Minha conta</h2>
<div className='ACADMsquareDad'>

<div className={`${ThemeForComponent} rounded-md shadow-2xl p-1 flex flex-col text-center items-center pb-2`}>
<h4 className={` font-bold text-md mb-1`}>Administrador</h4>
<p className={`mb-1`}>Nome: {Adm?.name}</p>
<p className={`mb-1`}>Email:{Adm?.email}</p>

<button 
className={` flex flex-row rounded-full text-white hover:bg-red-700 px-2 items-center justify-center bg-red-600 py-1 max-w-24 w-full`} 
onClick={()=>setModalDelIsOpen(true)} >
<FaTrashAlt /> Deletar</button>

</div>
</div>
    </div>


    </div>

    </motion.div>

        <ModDelAdm ModalDelIsOpen={ModalDelIsOpen} setModalDelIsOpen={setModalDelIsOpen}/>

 </div>



 )


}

export default AccountAdm
