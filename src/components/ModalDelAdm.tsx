
import {useContext,useState} from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../components/firebase';
import { CgSpinner } from "react-icons/cg";
import { TModDelAdm,TboxAdm,TadmIsLoggedin,TstateAdmGetOut,TstateModeTheme } from './Types';
import { CatalogContext } from './CatalogContext';

function ModDelAdm({ModalDelIsOpen,setModalDelIsOpen}:TModDelAdm) {
const {BoxAdm, ModeTheme,setAdmGetOut,setBoxAdm,setAdmIsLoggedin} = useContext(CatalogContext) as TboxAdm & TadmIsLoggedin & TstateAdmGetOut & TstateModeTheme
const AdmStorage = sessionStorage.getItem('admOnNanoId') 
const admOnNanoId =  AdmStorage ? JSON.parse(AdmStorage) : ''
const [MsgLoadBtn,setMsgLoadBtn] = useState<boolean>(false)
const AdmDel:any = BoxAdm.find((adm)=> adm.nanoId === admOnNanoId)
const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'

async function ClickDelAdmInFirebase() {
setMsgLoadBtn(true);
try {
    const userDoc = doc(db, "AdmCDP",AdmDel.id);
    await deleteDoc(userDoc);
    DeleteAdmInBox();
} catch (error) {
    console.error("Erro ao excluir", error) } }

function DeleteAdmInBox() {
    const BoxFiltred = BoxAdm.filter((adm)=> adm.nanoId !== AdmDel.nanoId)
    setBoxAdm(BoxFiltred);
setMsgLoadBtn(false);
AdmExit() }

function AdmExit() {
    sessionStorage.removeItem('admOnNanoId'); 
    sessionStorage.setItem('ActualPage','/LoginPage')
    setAdmGetOut(true);
    setAdmIsLoggedin(false) }

    return <div>
{ModalDelIsOpen && 
        <div className="bg-custom-black fixed w-full h-full top-0 flex justify-center items-center" onClick={()=> {setModalDelIsOpen(false) }}>
<div className={`${ThemeForComponent}  rounded-md h-[110px] pt-0 p-2 flex flex-col justify-around`} onClick={(e)=> e.stopPropagation()}>
    <h4 className={`text-lg font-semibold`}>Deseja deletar essa conta ?</h4>

<div className='flex flex-row justify-around'>
{MsgLoadBtn ?
    <button className='bg-gray-300 text-gray-500 rounded-full py-1 w-full border border-gray-400 border-1 cursor-default max-w-32' 
 >Não</button>
: 
<button className='bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700 max-w-[120px] w-full' 
onClick={()=> {setModalDelIsOpen(false) }}>não</button>
}

<button className='bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 w-full max-w-[120px] ml-2'
onClick={ClickDelAdmInFirebase}>
{MsgLoadBtn ?
<span className=' flex flex-row px-2'><CgSpinner  className='text-2xl mr-1 animate-spin'/>Aguarde</span>
:'sim'}
</button>

</div>

</div>
            </div>
}    
    </div>    
}

export default ModDelAdm

