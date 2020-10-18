import React from 'react';
import Tabs from './componentes/Tabs'; 
import "./App.css";
import logo from './CRUD-LOGO.svg';
import Tabla from './componentes/Tabla';



function App() {
  return (
    <div >
    <h1>
      <img src={logo} className="logo" alt="logo" />
    </h1>
    <Tabs> 
       <div label="Consultar Paciente" className="consultar"> 
         <section className="center">
         <Tabla />
         </section>
       </div> 
       <div label="Ingresar Paciente"> 
         aqui va el componente de registro de Paciente 
       </div> 
       <div label="Modificar Paciente"> 
         aqui va el componente de modificacion
       </div>
       <div label="Eliminar Paciente"> 
         componente de Eliminar
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;
