import {CatalogContext} from '../components/CatalogContext'
import { useState,useContext,useEffect } from 'react';
import {TBoxProduct,Tproduct} from '../components/Types'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";

function ProductShowPublic() {
const {  BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct;

return  (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
<div className='sm:w-auto mx-auto max-w-[1100px] px-2 flex  flex-col min-h-[calc(95vh)] '>
<h3 className='text-2xl text-center my-2'>Promocões do dia</h3>

<div>

{BoxProduct.length > 0 ?
<ul className='w-screen650:grid w-screen650:grid-cols-1 w-screen650:max-w-[300px] m-auto mb-10
 w-screen800:grid-cols-2 grid-cols-3   grid gap-3' >{BoxProduct.map((product)=>(
<li key={product.id} className='border rounded-lg bg-gray-200 p-1 shadow-xl max-w-[350px]
  card transform transition-transform duration-200 hover:-translate-y-2.5 '>
<p className='text-lg font-semibold'>{product.name}</p>
<p >R$: <span className='text-lg font-bold text-red-800'>{product.price}</span> </p>

{product.description && 
<p className='text-sm'>Descriçao:  
  <span className='font-semibold'> {product.description} </span>
  </p>}

</li>


))}

</ul>

:
<p>sem produtos cadastrados no momento</p>

}

</div>


</div>    

</motion.div>

)



}

export default ProductShowPublic

