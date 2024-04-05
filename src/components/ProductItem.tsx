import { Tproduct,TstateModeTheme } from "./Types"
import {CatalogContext} from '../components/CatalogContext'
import { useContext } from 'react';

function ProductItem({ product }: { product: Tproduct }) {
const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme;
const ThemeForComponent = ModeTheme?.themeIsDark ? 'text-white bg-gray-800 duration-500':'bg-gray-200 duration-500  '


return (<li key={product.id} className={`${ThemeForComponent} rounded-lg bg-gray-200 p-1 max-w-[350px] shadow-2xl
card transform transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-around `}> 

<div className="flex justify-center">
  <div className={`flex justify-center bg-white rounded-lg mb-2
  ${product.image === '' ? ' items-center h-[150px] w-[150px]' :
  'max-w-[270px] max-h-[200px] items-start overflow-hidden'}`}>

{product.image === '' ?
<span className=' text-gray-400'>Sem foto</span>:
<img src={product.image} alt="Foto" className={`${product.formatImg === 'landscape' ? 'max-w-[280px]':'max-h-[250px]'}`}/>
}

  </div>

  </div>  

<p className='text-lg font-semibold'>{product.name}</p>
<p >R$: <span className='text-lg font-bold text-red-800'>{product.price}</span> </p>
{product.description && 
<p className='text-sm'>Descriçao:  
<span className='font-semibold'> {product.description} </span>
</p>}

</li>
)

}

export default ProductItem
