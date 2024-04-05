import { TproductProp } from "./Types"

function RegistredImgProduct({product}:TproductProp) {

  return <div className="flex justify-center">
  <div className={`flex justify-center bg-white rounded-lg mb-2
  ${product.image === '' ? ' items-center h-[150px] w-[150px]' :
  'max-w-[270px] max-h-[200px] items-start overflow-hidden'}`}>

{product.image === '' ?
<span className=' text-gray-400'>Sem foto</span>:

<img src={product.image} alt="Foto" className={`${product.formatImg === 'landscape' ? 'max-w-[280px]':'max-h-[250px]'}`}/>
}

  </div>

  </div>  
  
}

export default RegistredImgProduct