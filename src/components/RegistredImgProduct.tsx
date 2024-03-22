import { TproductProp } from "./Types"

function RegistredImgProduct({product}:TproductProp) {

  return<div>
    <div className={`${product.image === '' ? ' flex justify-center items-center h-[150px] w-[150px] bg-white rounded-lg border  mb-2 ' :
  'max-w-[270px] max-h-[200px] flex justify-center items-start   bg-white rounded-lg border  mb-2 overflow-hidden '}`}>

    {/* <div className={`${product.image === '' ? ' flex justify-center items-center h-[150px] w-[150px] bg-white rounded-lg border  mb-2 ' :
  `${product.formatImg === 'landscape' ? '' :'' } `}`}> */}

{product.image === '' ?
<span className=' text-gray-400'>Sem foto</span>:

<img src={product.image} alt="Foto" className={`${product.formatImg === 'landscape' ? 'max-w-[280px]':'max-h-[250px]'}`}/>



}
</div>
{/* <img src={product.image} alt="Foto" />:
<button onClick={()=>console.log(product)}>TESTE</button> */}
  </div>  
}

export default RegistredImgProduct