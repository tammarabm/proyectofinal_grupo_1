
import { Routes, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';
import DesafioMatematico from './components/DesafioMatematico/ProyectoReact';

function App() {


  //<div className='container'></div>    Si pongo esto en el return la pagina no se ve completa
  return (
      
        <Routes>
          <Route path="/" element ={ <Layout/> }>
            <Route index element = { <Home/>} />
            <Route path="/aboutUs" element ={ <AboutUs/> } />
            <Route path="/desafioMatematico" element ={ <DesafioMatematico/> } />
            <Route path="*" element ={ <ErrorPage/> }/>
          </Route>
        </Routes>
      

      
  )
}

export default App
