import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import AdmRegister from './pages/AdmRegister'
import ProductRegister from './pages/ProductRegister';
import ProductShowPublic from './pages/ProductShowPublic';
import RegistredProduct from './pages/RegistredProduct';
import { BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CatalogContextProvider} from './components/CatalogContext'
import './components/transitions.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from "framer-motion";

function App() {
  return (
    <CatalogContextProvider>

<BrowserRouter>
<Header/>
<ToastContainer />

<Routes>
 <Route  path='/' element={<ProductShowPublic/>}/>
<Route  path='/LoginPage' element={<LoginPage/>}/>
<Route  path='/AdmRegister' element={<AdmRegister/>}/>
<Route  path='/ProductRegister' element={<ProductRegister/>}/>
<Route  path='/RegistredProduct' element={<RegistredProduct/>}/>

</Routes>
</BrowserRouter>


    </CatalogContextProvider>
  );
}

export default App;

