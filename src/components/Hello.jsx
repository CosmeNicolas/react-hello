import { useState } from "react";
import { Button } from "react-bootstrap";


const Hello = () => {
  const [mensaje, setMensaje] = useState('My friend')
  

  return (
   <>
   <h1 className='text-center'>Hello {mensaje}🎅🎄</h1>
   <Button className="m-1" onClick={()=>{setMensaje('From changed State')}
  }>Show Menssage</Button>
  <Button className="m-1" variant="success" onClick={()=>{setMensaje('My Friend')}
  }>Show Menssage Friend</Button>

   </>
  )
}

export default Hello;