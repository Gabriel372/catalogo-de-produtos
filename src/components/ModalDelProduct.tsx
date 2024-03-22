import { TstateModDel,TBoxProduct} from './Types'
import { useContext,useState } from 'react';
import { CatalogContext } from '../components/CatalogContext';
import { db } from '../components/firebase';
import { doc, deleteDoc } from "firebase/firestore";

function ModalDelProduct({ModalDel,setModalDel}:TstateModDel) {
const { BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct
const [MsgLoadBtn,setMsgLoadBtn] = useState<boolean>(false)

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
setBoxProduct(BoxProduct.filter((item)=> item.id !== ModalDel.deleteTarget?.id));
setMsgLoadBtn(false);
setModalDel({modalIsOpen:false,deleteTarget:undefined});
}



return <div>
{ModalDel.modalIsOpen && 
<div className='bg-custom-black fixed w-full h-full top-0 flex justify-center items-center'>

<div className=' rounded-md bg-gray-200 h-[110px] pt-0 p-2 flex flex-col justify-around'>

<h4 className='text-lg font-semibold'>Deseja deletar esse Produto ?</h4>

<div className='flex flex-row justify-around'>

{MsgLoadBtn ? 
<button className='bg-gray-300 text-gray-500 rounded-full py-1 max-w-[90px] w-full border border-gray-400 border-1 cursor-default' 
 >Não</button>  
:
<button className='bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700 max-w-[90px] w-full' 
onClick={()=>setModalDel({modalIsOpen:false,deleteTarget:undefined})} >Não</button>  }

<button className='bg-red-600 text-white rounded-full py-1 cursor-pointer hover:bg-red-700 max-w-[90px] w-full'
onClick={ClickDelProductInFirebase}>
{MsgLoadBtn ? 'Aguarde...' :'sim'}    
</button>  


</div>

</div>


</div>


}    



</div>

}

export default ModalDelProduct
