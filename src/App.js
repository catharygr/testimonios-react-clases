import React from 'react'
import Testimonio from './componentes/Testimonio';
import './App.css';
import {data} from './data.js'

export default function App() {

  const htmlJsx = data.map( persona => {
    return(
      <Testimonio 
        item={persona}
    
      />
    )
  })

  return (
    <div className="App">
        <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {htmlJsx}
      
      </div>
    </div>

  );
}


