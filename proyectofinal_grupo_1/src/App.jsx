
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';
import DesafioMatematico from './components/DesafioMatematico/ProyectoReact';
import Team from "./data/Collaborators.json";
import BilleterasVirtuales from './components/BilleterasVirtuales/BilleterasVirtuales';
import Imc from './components/Imc/Imc';

function App() {


  //<div className='container'></div>    Si pongo esto en el return la pagina no se ve completa
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs team= {Team} />} />
        <Route path="/desafioMatematico" element={<DesafioMatematico />} />
        <Route path="/billeterasVirtuales" element={<BilleterasVirtuales />} />
        <Route path="/imc" element={<Imc />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
