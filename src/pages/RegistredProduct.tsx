import {CatalogContext} from '../components/CatalogContext'
import { useState,useContext,useEffect } from 'react';
import {TBoxProduct,Tproduct} from '../components/Types'
import RegistredCardProduct from '../components/RegistredCardProduct';
import ModalDelProduct from '../components/ModalDelProduct'
import {TmodDelProduct} from '../components/Types'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import Title from '../components/Title';

function RegistredProduct() {
const {  BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct;
const [ModalDel,setModalDel] = useState<TmodDelProduct>({modalIsOpen:false,deleteTarget:undefined})

return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
 
 <div>
<div className='sm:w-auto mx-auto max-w-[1100px] px-2 flex  flex-col min-h-[calc(95vh)] '>

<Title/>

<div>

{BoxProduct.length > 0 ?
<ul className='w-screen650:grid w-screen650:grid-cols-1 w-screen650:max-w-[300px] m-auto mb-10
 w-screen800:grid-cols-2 grid-cols-3   grid gap-3' >{BoxProduct.map((product)=>(
<RegistredCardProduct key={product.id} product={product} ModalDel={ModalDel} setModalDel={setModalDel}/>
))}

</ul>
:
<p>sem produtos cadastrados no momento</p>
}

</div>

</div>

<ModalDelProduct ModalDel={ModalDel} setModalDel={setModalDel}/>

</div>
  </motion.div>

)

}

export default RegistredProduct
