import { createContext, useState,ReactNode,useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from './firebase';
import { Tadm,Tproduct,TinfoCompany } from './Types';

interface  Props {
  children:ReactNode
   }

export const CatalogContext = createContext({});

export function CatalogContextProvider({children}:Props) {  
  const [BoxAdm,setBoxAdm] = useState<Array<Tadm>>([]);
  const [BoxProduct,setBoxProduct] = useState<Array<Tproduct>>([]);
  const [AdmIsLoggedin, setAdmIsLoggedin] = useState<boolean>(false);
const [AdmOn, setAdmOn] = useState<Tadm>({name: '',email: '',password: '',nanoId:'',id:''}); 
const [InfoCompany,setInfoCompany] = useState<TinfoCompany>({
titlePage:'',addresStore:'',servicePeriod:'', celphone:'',
nanoId:'',id:'',acceptPayCredit:false,acceptPayDebit:false,
acceptPayMoney:false,acceptPayPix:false,});

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
setBoxProduct(data);
GetDataToInfoCompany()
}

async function GetDataToInfoCompany() {
  const querySnapshot = await getDocs(collection(db, "InfoCompanyCDP"));
  const data:any = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}) );
setInfoCompany(data[0])
}

  return (
    <CatalogContext.Provider value={{ BoxAdm,AdmIsLoggedin,BoxProduct,AdmOn,InfoCompany,
    setInfoCompany,setAdmOn,setBoxAdm,setAdmIsLoggedin,setBoxProduct}}>
      {children}
    </CatalogContext.Provider>
  );
};
