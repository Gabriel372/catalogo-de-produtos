import { TstateModalShow2,TstateModeTheme } from "./Types"
import { CatalogContext } from "./CatalogContext"
import { useContext } from "react"
import { IoClose } from "react-icons/io5";

function ModalShowProduct({ModalShow,setModalShow}:TstateModalShow2) {
    const { ModeTheme } = useContext(CatalogContext) as TstateModeTheme
    const ThemeForModal = ModeTheme?.themeIsDark ? 'text-white bg-neutral-700 duration-500 border border-gray-600':'bg-gray-200 duration-500  '
    const ThemeForDiv = ModeTheme.themeIsDark ? 'bg-gray-500 text-gray-700':'bg-white text-gray-400'   

return (<div>
{ModalShow.modalIsOpen && 
<div className={` w-screen bg-custom-black h-[100%] top-0 left-0 fixed justify-center align-middle flex py-1`}
 onClick={()=> {setModalShow( prevState => ({...prevState,modalIsOpen:false})) }}>

<div className='bg-opacity-50 flex justify-center items-center w-full'>

<div className={`${ThemeForModal} rounded-md pt-1 p-2 flex flex-col justify-around h-screen500:h-full h-screen500:overflow-y-scroll w-full mx-1 max-w-[420px]`}
onClick={(e)=> e.stopPropagation()}>

<div  className=" flex justify-end">
<button onClick={()=> {setModalShow( prevState => ({...prevState,modalIsOpen:false})) }} className=" text-2xl"><IoClose /></button>
</div>

<div className=" flex justify-center">

<div className={`${ThemeForDiv} flex justify-center rounded-lg mb-2
 ${ModalShow.product.image ? ' items-start overflow-hidden':'items-center h-40 w-40'}`}>

{ModalShow.product.image ?
<img src={ModalShow.product.image} alt="Foto" className={`${ModalShow.product.formatImg === 'landscape' ? 'max-h-[280px]':'max-h-[300px]'}`}/>
:
<span className=' '>Sem foto</span>
}
</div>

</div>

<p className='text-lg font-semibold'>{ModalShow.product.name}</p>
<p >R$: <span className={`${ModeTheme.themeIsDark ? 'text-red-400':'text-red-800'} text-lg font-bold`}>{ModalShow.product.price.replace('.',',')}</span> </p>
{ModalShow.product.description && 
<p className='text-sm'>Descriçao:  
<span className='font-semibold'> {ModalShow.product.description} </span>
</p>}

</div>

</div>

    </div>}

</div>)    
}

export default ModalShowProduct



