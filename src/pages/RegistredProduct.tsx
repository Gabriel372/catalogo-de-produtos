import {CatalogContext} from '../components/CatalogContext'
import { useState,useContext,useEffect } from 'react';
import {TBoxProduct,Tproduct} from '../components/Types'
import RegistredCardProduct from '../components/RegistredCardProduct';
import ModalDelProduct from '../components/ModalDelProduct'
import {TmodDelProduct} from '../components/Types'


function RegistredProduct() {
const {  BoxProduct,setBoxProduct } = useContext(CatalogContext) as TBoxProduct;
const [ModalDel,setModalDel] = useState<TmodDelProduct>({modalIsOpen:false,deleteTarget:undefined})

return <div>
<div className='sm:w-auto mx-auto max-w-[1100px] px-2 flex  flex-col min-h-[calc(95vh)] '>
<h3 className='text-2xl text-center my-2'>Produtos Cadastrados</h3>
<div>

{BoxProduct.length > 0 ?
<ul className='w-screen650:grid w-screen650:grid-cols-1 w-screen650:max-w-[300px] m-auto mb-10
 w-screen800:grid-cols-2 grid-cols-3   grid gap-3' >{BoxProduct.map((product)=>(
<RegistredCardProduct product={product} ModalDel={ModalDel} setModalDel={setModalDel}/>
))}

</ul>

:
<p>sem produtos cadastrados no momento</p>

}

</div>

</div>

<ModalDelProduct ModalDel={ModalDel} setModalDel={setModalDel}/>

</div>

}

export default RegistredProduct
