import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="app-todo-list">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

// Todo
/* 1) Hacer que las tareas sean almacenadas depués de recargar la página
 */
