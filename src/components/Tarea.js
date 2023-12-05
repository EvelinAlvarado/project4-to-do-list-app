import React from "react";
import "../stylesheets/Tarea.css";
// ?Se importa paquete externo de react icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// Componente funcional
// ---props con sintaxis de desestructracion
/* function Tarea({ texto, completada }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
} */

/* Modificando para la versión final */

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      {/* 1) Se ocurre un evento Click sobre el div que contiene el "texto" será llamada la funcion anónima "completarTarea" que recibe un valor "id" para saber que tarea es la que será marcada como completada */}
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      {/* 2) Se ocurre un evento Click en el "icono" será llamada la función anónima "eliminarTarea" que recibe un valor "id" para saber que tarea será eliminada */}
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}
/* Las funciones "completarTarea" y "eliminarTarea" llegan al componente "Tarea" a través del Componente "ListaDeTareas". Y se va a actualizar el estado "tareas" */

export default Tarea;
