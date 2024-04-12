import { TstateModalShow,TstateModeTheme } from "./Types"
import {CatalogContext} from '../components/CatalogContext'
import { useContext } from 'react';

function ProductItem({product,setModalShow}:TstateModalShow ) {
const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme;
const ThemeForComponent = ModeTheme?.themeIsDark ? 'border border-gray-700 text-white bg-neutral-800 duration-500':'bg-gray-200 duration-500 border border-gray-300'
const ThemeForDiv = ModeTheme.themeIsDark ? 'bg-gray-500 text-gray-700':'bg-white text-gray-400'   

return (<li key={product.id} className={`${ThemeForComponent} rounded-lg bg-gray-200 p-1 max-w-[350px] shadow-2xl
card transform transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-around cursor-pointer`}
onClick={()=> {setModalShow( prevState => ({...prevState,modalIsOpen:true,product:product}))}} > 

<div className="flex justify-center">

  <div className={`${ThemeForDiv} flex justify-center rounded-lg mb-2
  ${product.image === '' ? ' items-center h-[150px] w-[150px]' :
  'max-w-[270px] max-h-[200px] items-start overflow-hidden'}`}>

{product.image === '' ?
<span className=' '>Sem foto</span>:
<img src={product.image} alt="Foto" className={`${product.formatImg === 'landscape' ? 'max-w-[280px]':'max-h-[250px]'} w-full`}/>
}

  </div>

  </div>  

<p className='text-lg font-semibold'>{product.name}</p>
<p >R$: <span className={`${ModeTheme.themeIsDark ? 'text-red-400':'text-red-800'} text-lg font-bold`}>{product.price}</span> </p>
{product.description && 
<p className='text-sm'>Descriçao:  
<span className='font-semibold'> {product.description} </span>
</p>}

</li>
)

}

export default ProductItem
