import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total, setOperacion] = useState(0);
  const [isVisible, setRegistrar] = useState(true);

  function onRegistrar(value) {
    setRegistrar(value);
    nombre = document.getElementById("nombre").value;
    document.getElementById("namereg").innerHTML = nombre;
  }

  function onPress(value) {
    if (value){
      document.getElementById("n0").value = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value);
    } else {
      document.getElementById("n0").value = parseInt(document.getElementById("n2").value) - parseInt(document.getElementById("n1").value);
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card" id="registro" style={{ display: isVisible ? "block" : "none" }}>
        <label id="name">Ingresa tu Nombre: </label>&nbsp;
        <input type="text" id="nombre" name="nombre" />&nbsp;
        <button className="btn btn-primary" onClick={() => onRegistrar(false)}>Registrar</button>
      </div>

      <div className="card" id="formulario" style={{ display: isVisible ? "none" : "block" }}>
        <p>Bienvenido <span id="namereg"><b></b></span>, ahora juguemos!</p>
        <div>
          <label id="name">Ingresar los numeros</label>&nbsp;<br></br>
          <input type="number" id="n1" name="n1" style={{textAlign: 'right'}}/><br></br>
          <input type="number" id="n2" name="n2" style={{textAlign: 'right'}}/><br></br>
          <input type="text" disabled id="n0" name="n0" value={0} style={{textAlign: 'right'}}/><br></br><br></br>
          <button className="btn btn-primary" onClick={() => onPress(true)}>Sumar (+)</button>&nbsp;
          <button className="btn btn-danger" onClick={() => onPress(false)}>Restar (-)</button><br></br>
        </div>
      </div>
    </>
  )
}

export default App
