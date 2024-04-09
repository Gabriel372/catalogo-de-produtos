import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import AdmRegister from './pages/AdmRegister'
import ProductRegister from './pages/ProductRegister';
import ProductShowPublic from './pages/ProductShowPublic';
import RegistredProduct from './pages/RegistredProduct';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CatalogContextProvider} from './components/CatalogContext'
import './components/transitions.css'
import Footer from './components/Footer';
import {useContext} from "react";
import { CatalogContext } from './components/CatalogContext';
import { TstateModeTheme } from './components/Types';

function App() {
const {ModeTheme} = useContext(CatalogContext) as TstateModeTheme ;

  return (  <div className={ModeTheme && ModeTheme.themeIsDark ? ' styleDark':'styleLight'}>

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

<Footer/>
</BrowserRouter>
    </CatalogContextProvider>
</div>

  );
}

export default App;

