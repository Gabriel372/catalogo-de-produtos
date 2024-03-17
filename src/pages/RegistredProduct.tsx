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
<p className=' screen400:bg-red-500 screen450:bg-blue-500 bg-pink-500 text-center '>TESTE</p>
<div>
{/* <ul className='custom:flex-col custom:items-center custom:flex  sm:grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 '>{BoxProduct.map((product)=>( */}
{/* <ul className='flex screen1:flex-col screen1:items-center flex-col items-center screen2:grid screen2:gap-3 screen2:grid-cols-2'>{BoxProduct.map((product)=>( */}

{BoxProduct.length > 0 ?
<ul className='border-spacing-2 screen1:border-red-600 sreen2:border-blue-500 ' >{BoxProduct.map((product)=>(
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
