import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container } from "react-bootstrap";
import Hello from "./components/Hello";
import Footer from "./components/Footer";



function App() {
 
  return (
    <>
    <Container className="main container-fluid text-center mt-5 text-light">
      <Hello/>
    </Container>
    <Footer/>
    </>
  )
}

export default App
