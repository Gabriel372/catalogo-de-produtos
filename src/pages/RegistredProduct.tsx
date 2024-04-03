import {CatalogContext} from '../components/CatalogContext'
import { useState,useContext,useEffect } from 'react';
import {TBoxProduct,Tproduct} from '../components/Types'
import RegistredCardProduct from '../components/RegistredCardProduct';
import ModalDelProduct from '../components/ModalDelProduct'
import {TmodDelProduct,TmodEditProduct,TstateBoxProductIsEmpty} from '../components/Types'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import Title from '../components/Title';
import ModalEditProduct from '../components/ModalEditProduct';

function RegistredProduct() {
const {  BoxProduct,setBoxProduct,BoxProductIsEmpty } = useContext(CatalogContext) as TBoxProduct & TstateBoxProductIsEmpty
const [ModalDel,setModalDel] = useState<TmodDelProduct>({modalIsOpen:false,deleteTarget:undefined})
const EmptyValues = {name:'',price:'',description:'',image:'',formatImg:'',nanoId:'',id:''}
const [ModalEdit,setModalEdit] = useState<TmodEditProduct>({modalIsOpen:false,hasProductValueToPass:false,productEdit:EmptyValues})

return (<div>
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
 
 <div>
<div className='sm:w-auto mx-auto max-w-[1100px] px-2 flex  flex-col min-h-[calc(60vh)] '>

<Title/>

<div>

{BoxProduct.length > 0 &&
<ul className='w-screen650:grid w-screen650:grid-cols-1 w-screen650:max-w-[300px] m-auto mb-10
 w-screen800:grid-cols-2 grid-cols-3   grid gap-3' >{BoxProduct.map((product)=>(
<RegistredCardProduct key={product.id} product={product} ModalDel={ModalDel} setModalDel={setModalDel}
ModalEdit={ModalEdit} setModalEdit={setModalEdit}/>
))}

</ul>} 

{BoxProductIsEmpty && <div className=' flex align-middle justify-center h-full items-center min-h-[calc(60vh)]'>
  <p className='text-center '>sem produtos cadastrados no momento</p>
</div>}

</div>

</div>


</div>

  </motion.div>
<ModalDelProduct ModalDel={ModalDel} setModalDel={setModalDel}/>
<ModalEditProduct ModalEdit={ModalEdit} setModalEdit={setModalEdit}/>
</div>


)

}

export default RegistredProduct
