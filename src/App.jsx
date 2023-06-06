import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioPais from './components/FormularioPais';

function App() {

  return (
    <>
    <Container id="containerPrincipal">
      <FormularioPais></FormularioPais>
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
