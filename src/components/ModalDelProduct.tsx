import { TstateModDel,TBoxProduct,TstateBoxProductIsEmpty,TstateModeTheme} from './Types'
import { useContext,useState } from 'react';
import { CatalogContext } from '../components/CatalogContext';
import { db } from '../components/firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { ref,deleteObject,getStorage } from 'firebase/storage';
import { CgSpinner } from "react-icons/cg";

function ModalDelProduct({ModalDel,setModalDel}:TstateModDel) {
const { ModeTheme,BoxProduct,setBoxProduct,setBoxProductIsEmpty } = useContext(CatalogContext) as TBoxProduct & TstateBoxProductIsEmpty & TstateModeTheme
const [MsgLoadBtn,setMsgLoadBtn] = useState<boolean>(false)
const ThemeForModal = ModeTheme?.themeIsDark ? 'text-white bg-neutral-700 duration-500 border border-gray-600':'bg-gray-200 duration-500  '

async function ClickDelProductInFirebase() {
   setMsgLoadBtn(true);
    try {
        const userDoc = doc(db, "ProductCDP",`${ModalDel.deleteTarget?.id}`)
        await deleteDoc(userDoc);
        DeleteProductInBox();
    } catch (error) {
        console.error("Erro ao excluir:", error);
} }

function DeleteProductInBox() {
BoxProduct.length === 1 && setBoxProductIsEmpty(true);
setBoxProduct(BoxProduct.filter((item)=> item.nanoId !== ModalDel.deleteTarget?.nanoId));
if (ModalDel.deleteTarget?.image) {
DeleteImg()    
}
else{
setMsgLoadBtn(false);
setModalDel({modalIsOpen:false,deleteTarget:undefined});
}
}

function DeleteImg() {
  if (ModalDel.deleteTarget) {
        const storage = getStorage();
            const desertRef = ref(storage,`${ModalDel.deleteTarget.image}`);
            deleteObject(desertRef).then(() => {
                setMsgLoadBtn(false);
                setModalDel({modalIsOpen:false,deleteTarget:undefined});
            }).catch((error) => {
                console.log('ERRO:',error);
            });     
}
}


return <div>
{ModalDel.modalIsOpen && 
<div className='bg-custom-black fixed w-full h-full top-0 flex justify-center items-center'
onClick={()=>setModalDel(prevState=>({...prevState,modalIsOpen:false}))}>

<div className={`${ThemeForModal} rounded-md h-[110px] pt-0 p-2 flex flex-col justify-around`}
onClick={(e)=> e.stopPropagation()}>

<h4 className='text-lg font-semibold'>Deseja deletar esse Produto ?</h4>

<div className='flex flex-row justify-around'>

{MsgLoadBtn ? 
<button className='bg-gray-300 text-gray-500 rounded-full py-1 w-full border border-gray-400 border-1 cursor-default max-w-32' 
 >Não</button>  
:
<button className='bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700 max-w-[120px] w-full' 
onClick={()=>setModalDel({modalIsOpen:false,deleteTarget:undefined})} >Não</button>  }

<button className='bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 w-full max-w-[120px] ml-2'
onClick={ClickDelProductInFirebase}>
{MsgLoadBtn ? <span className=' flex flex-row px-2'><CgSpinner  className='text-2xl mr-1 animate-spin'/>Aguarde</span>:'sim'}    
</button>  

</div>

</div>

</div>

}    

</div>

}

export default ModalDelProduct
