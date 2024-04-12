import { TstateEditProduct } from "./Types"
import { ref,deleteObject,getStorage } from 'firebase/storage';
import { useEffect,useState } from "react";

function DelPrevImgProduct({Product,ModalEdit,Status }:TstateEditProduct) {
    const [HasPrevImgToCheck,setHasPrevImgToCheck] = useState<boolean>(true)

useEffect(() => {
if (Status.hasProductToUpdt && HasPrevImgToCheck) {
CheckToDeleteImg();
 }
},[Status,HasPrevImgToCheck])  
 
function CheckToDeleteImg() {
 setHasPrevImgToCheck(false);   
    if (!Product.image && ModalEdit.productEdit.image) {
        DeletePrevImg();
} }

function DeletePrevImg() {
const storage = getStorage();
const desertRef = ref(storage,`CatalogoDeProdutos/(${Product.nanoId})`);
deleteObject(desertRef).then(() => {
}).catch((error) => {
console.log('ERRO:',error);
});    } 

 return (<div></div> )   
}

export default DelPrevImgProduct
