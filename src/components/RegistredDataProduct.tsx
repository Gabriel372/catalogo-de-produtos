import {Tproduct,TstateModeTheme} from './Types'
import { useContext } from 'react'
import { CatalogContext } from './CatalogContext' 

function RegistredDataProduct({ product }: { product: Tproduct }) {
  const { ModeTheme} = useContext(CatalogContext) as TstateModeTheme

return ( 
<div className=' h-full max-h-36 flex flex-col justify-around' >

<p className='text-lg font-semibold'>{product.name}</p>
<p >R$: <span className={`${ModeTheme.themeIsDark ? 'text-red-400':'text-red-800'} text-lg font-bold`}>{product.price.replace('.',',')}</span> </p>

{product.description && 
<p className='text-sm'>Descriçao: 
  <span className='font-semibold'> {product.description} </span>
  </p>}

</div>
)
  }
  
  export default RegistredDataProduct
