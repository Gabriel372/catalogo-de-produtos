import { TproductProp } from "./Types"
import { useContext } from "react";
import { TstateModeTheme } from "./Types";
import { CatalogContext } from "./CatalogContext";

function RegistredImgProduct({product}:TproductProp) {
  const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme;
  const ThemeForDiv = ModeTheme.themeIsDark ? 'bg-gray-500 text-gray-700':'bg-white text-gray-400'   


  return <div className="flex justify-center">
  <div className={`${ThemeForDiv} flex justify-center  rounded-lg mb-2
  ${product.image === '' ? ' items-center h-[150px] w-[150px]' :
  'max-w-[270px] max-h-[200px] items-start overflow-hidden'}`}>

{product.image === '' ?
<span className=''>Sem foto</span>:

<img src={product.image} alt="Foto" className={`${product.formatImg === 'landscape' ? 'max-w-[280px]':'max-h-[250px]'} w-full`}/>
}

  </div>

  </div>  
  
}

export default RegistredImgProduct