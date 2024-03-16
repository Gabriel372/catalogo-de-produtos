import {CatalogContext} from '../components/CatalogContext'
import { useState,useContext,useEffect } from 'react';
import {TBoxProduct,Tproduct} from '../components/Types'
import RegistredImgProduct from '../components/RegistredImgProduct';
import RegistredDataDescript from '../components/RegistredDataProduct';
import RegistredCardProduct from '../components/RegistredCardProduct';


function RegistredProduct() {
const {  BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct;


return <div>
<div className='sm:w-auto mx-auto sm:max-w-[1100px] px-2 flex  flex-col min-h-[calc(95vh)] '>
<h3 className='text-2xl text-center my-2'>Produtos Cadastrados</h3>

<div>

{BoxProduct.length > 0 ?
<ul className='flex flex-col items-center sm:grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3   '
>{BoxProduct.map((product)=>(
<RegistredCardProduct product={product}/>
))}

</ul>

:
<p>sem produtos cadastrados no momento</p>

}


</div>









</div>



{/* <button onClick={()=> console.log('')}>TESTE</button>   */}

</div>

}

export default RegistredProduct
