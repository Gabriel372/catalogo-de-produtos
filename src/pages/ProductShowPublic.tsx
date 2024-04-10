import {CatalogContext} from '../components/CatalogContext'
import { useContext } from 'react';
import {TBoxProduct,TadmOn,TstateInfoCompany,TstateBoxProductIsEmpty,TstateModeTheme} from '../components/Types'
import { motion } from 'framer-motion';
import { pageVariants,pageTransition } from "../components/AnimationMotion";
import ProductItem from '../components/ProductItem'

function ProductShowPublic() {
const {  BoxProduct,InfoCompany,BoxProductIsEmpty,ModeTheme } = useContext(CatalogContext) as TadmOn & TBoxProduct & TstateInfoCompany & TstateBoxProductIsEmpty & TstateModeTheme;
const ThemeForContainer = ModeTheme?.themeIsDark ? 'bg-black duration-500 text-white':'bg-white duration-500'

return  (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

<div className={`${ThemeForContainer} w-full`}>
<div className={` sm:w-auto mx-auto max-w-[1100px] px-2 flex  flex-col min-h-[calc(72vh)] pb-2`}>
<h3 className='text-2xl text-center my-2'>{InfoCompany.titlePage}</h3>

<div>

{BoxProduct.length > 0 &&
<ul className='w-screen650:grid w-screen650:grid-cols-1 w-screen650:max-w-[300px] m-auto
 w-screen800:grid-cols-2 grid-cols-3   grid gap-3' >
  {BoxProduct.map((product)=>(
   <ProductItem key={product.nanoId} product={product}/>   
))}
</ul>}

{BoxProductIsEmpty && <div className=' flex align-middle justify-center h-full items-center min-h-[calc(70vh)]'>
  <p className='text-center'>sem produtos cadastrados no momento</p>
</div>}

</div>

</div>  

</div>
</motion.div>
)
}

export default ProductShowPublic

