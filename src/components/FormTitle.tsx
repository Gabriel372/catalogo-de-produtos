import { TstateFormTitle } from "./Types"
import { FaRegSave } from "react-icons/fa";


function FormTitle({Form,setForm}:TstateFormTitle) {

function clickSaveTitle(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
setForm( prevState => ({...prevState,IsOpen:false}))
}
    

return (
<form onSubmit={clickSaveTitle} className="flex flex-row min-h-[50px] items-center w-full justify-center">
<input className="border border-b-black max-w-[250px] w-full"type="text" name="" id="" />

<button className="max-h-[30px] flex flex-row bg-black text-white rounded-full py-1 cursor-pointer hover:bg-gray-700  px-2  text-sm ml-2 items-center">
<FaRegSave className="mr-1"/>salvar
</button>
</form>


)

}

export  default FormTitle
