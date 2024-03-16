import { createContext, useState,ReactNode,useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase';
import { Tadm,Tproduct } from './Types';

interface  Props {
  children:ReactNode
   }

export const CatalogContext = createContext({});

export function CatalogContextProvider({children}:Props) {  
  const [BoxAdm,setBoxAdm] = useState<Array<Tadm>>([]);
  const [BoxProduct,setBoxProduct] = useState<Array<Tproduct>>([]);

  const [AdmIsLoggedin, setAdmIsLoggedin] = useState<boolean>(false);

  useEffect( () => { 
    GetAdmToBox() ;
  },[])

  async function GetAdmToBox() {
    const querySnapshot = await getDocs(collection(db, "AdmCDP"));
    const data:any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })  );
  setBoxAdm(data);
GetProductToBox()
}

async function GetProductToBox() {
  const querySnapshot = await getDocs(collection(db, "ProductCDP"));
  const data:any = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}) );
setBoxProduct(data)
}


  return (
    <CatalogContext.Provider value={{ BoxAdm,AdmIsLoggedin,BoxProduct,setBoxAdm,setAdmIsLoggedin,setBoxProduct}}>
      {children}
    </CatalogContext.Provider>
  );
};
