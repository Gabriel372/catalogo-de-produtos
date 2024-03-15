import React from 'react';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import AdmRegister from './pages/AdmRegister'
import ProductRegister from './pages/ProductRegister';
import ProductShowPublic from './pages/ProductShowPublic';
import ProductView from './pages/ProductView';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CatalogContextProvider} from './components/CatalogContext'


function App() {
  return (
    <CatalogContextProvider>

<BrowserRouter>
<Header/>
<ToastContainer />

<Routes>
<Route  path='/' element={<LoginPage/>}/>
<Route  path='/AdmRegister' element={<AdmRegister/>}/>
<Route  path='/ProductRegister' element={<ProductRegister/>}/>
<Route  path='/ProductShowPublic' element={<ProductShowPublic/>}/>
<Route  path='/ProductView' element={<ProductView/>}/>

</Routes>
</BrowserRouter>


    </CatalogContextProvider>
  );
}

export default App;
