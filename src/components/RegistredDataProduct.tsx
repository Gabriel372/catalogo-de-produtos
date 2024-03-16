import {Tproduct} from './Types'

function RegistredDataProduct({ product }: { product: Tproduct }) {

function AddZeroToPrice(value:string) {
if (value.length === 1) {
return `${value},00`  
}
else {return value}  
}



return<div>

<p className='text-lg font-semibold'>{product.name}</p>
<p >R$: <span className='text-lg font-bold text-red-800'>{AddZeroToPrice(product.price)}</span> </p>
<p className='text-sm'>Descriçao: <span className='font-semibold'>Coxinha de frango</span></p>

{product.description && 
<p>Descriçao:  {product.description}</p>
}




</div>  
  }
  
  export default RegistredDataProduct
