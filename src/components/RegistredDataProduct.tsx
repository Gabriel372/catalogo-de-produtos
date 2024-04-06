import {Tproduct,TstateModeTheme} from './Types'
import { useContext } from 'react'
import { CatalogContext } from './CatalogContext' 

function RegistredDataProduct({ product }: { product: Tproduct }) {
  const { ModeTheme} = useContext(CatalogContext) as TstateModeTheme


function AddZeroToPrice(value:string) {
if (value.length === 1) {
return `${value},00`  
}
else {return value}  
}



return ( 
<div className=' h-full max-h-36 flex flex-col justify-around' >

<p className='text-lg font-semibold'>{product.name}</p>
<p >R$: <span className={`${ModeTheme.themeIsDark ? 'text-red-400':'text-red-800'} text-lg font-bold`}>{AddZeroToPrice(product.price)}</span> </p>

{product.description && 
<p className='text-sm'>Descriçao: 
  <span className='font-semibold'> {product.description} </span>
  </p>}


</div>
)



  }
  
  export default RegistredDataProduct
