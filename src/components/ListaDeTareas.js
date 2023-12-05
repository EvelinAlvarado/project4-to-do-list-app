import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../stylesheets/ListaDeTareas.css";

// Componente Funcional
function ListaDeTareas() {
  /* Estado de lista de tareas */
  /* 2) [el estado, la funcion para actualizar el estado] = useState([valor inicial "un array vacio"]),cuando haya tareas será un "array de objetos". Cada objeto va a definir las caracteristicas de cada tarea y cada objeto tendrá un "id" */
  const [tareas, setTareas] = useState([]);

  /* 6) Definir función de lo qué va a ocurrir cuando se agrega una tarea  */
  /* 9) La función "agregarTarea" recibe el argumento "tareaNueva" de "TareaFormulario" como "tarea" */
  const agregarTarea = (tarea) => {
    // console.log("Tarea agregada");
    // console.log(tarea);
    /* 10) No se reciben tareas en blanco: al usar trim(elimina los espacios en blanco en ambos extremos del string), solo si es verdadero se adiciona al array */
    if (tarea.texto.trim()) {
      /* Quitamos los espacios en blanco, si los hubiera y se reasigna el valor */
      tarea.texto = tarea.texto.trim();
      /* 11) Se adiciona la tarea nueva al inicio del array de todas las tareas, utilizando "Spread operator"  */
      const tareasActualizadas = [tarea, ...tareas];
      /* 12) Se llama a la función "setTareas" para actualizar el estado */
      setTareas(tareasActualizadas);
    }
  };
  /* 7)Para que una tarea sea agregada: se debe hacer clic en el boton "Agregar Tarea" (componente TareaFormulario), esta accion será ejecutada en "agregarTarea", luego este va a actualizar el estado de "tareas" (Queremos que el componente "ListaDeTareas" sepa que se agregó una tarea y agregue la tarea al estado "tareas") */
  /* 14) ELIMINAR TAREA:
  Para eliminar una tarea debemos pasar el "id" único.
   */
  const eliminarTarea = (id) => {
    /* 15) Se crea una constante de tareasActualizadas (no es la misma de agrearTarea). Aquí se va a guardar el array modificado, donde se filtrará el objeto que se quiere eliminar "id". Método filter() crea un nuevo array.  */
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    /* 16) Una vez filtrado, el nuevo array actualizará las tareas */
    setTareas(tareasActualizadas);
    /* 17) para que el event Listener del componente "Tarea" funcione, se tiene que pasar como prop la función "eliminarTarea" */
  };

  /* 19) TAREA COMPLETADA 
  Queremos verificar si la "tarea" fue completada o no" (con la propiedad "completada" que es boolean), para después invertir su estado (negarla) y actualizar la propiedad de la "tarea". Al usar map, se genera un nuevo array, por eso se utilizará "setTareas", para actualizar el estado.
  **** Luego se pasa como "prop" con la función "completarTarea"
  */
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    /* 1) Fragmentos: "<></>" son las etiquetas vacias que estan alli para que se pueda escribir la estructura pero no aparecen reflejados en la estructura HTML. Se usa porque no puede haber la estructura <div><div/><div><div/>, solo 1 div por componente */
    <>
      {/* 8) El evento "onSubmit" (como "prop" de TareaFomulario)llama a la función "agregarTarea" cuando el formulario es submetido y que recibe como prop "tareaNueva" de "TareaFormulario" como "tarea" */}
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {/* 3) queremos renderizar una lista de tareas: usamos JS */}
        {/* 4) En el array de objetos "tareas" (el estado que contiene tareas): al usar map() va a tomar cada "tarea"(argumento que es un objeto del array) y por cada tarea se mostrará lo especificado: Se creará un componente "Tarea" por cara "tarea". Cada "tarea" tendrá un texto especifico y un valor para el prop "Completada" 
          [
            tarea-1={
              texto="hola"
              valor="tarea-contenedor completada"
            }
            tarea-2={
              texto="bienvenido"
              valor="tarea-contenedor"
            }
          ]
          18)Se adiciona el prop "eliminarTarea" con la función "eliminarTarea" para poder ser llamada cuando se haga clic en el ícono.
          */}
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
        {/* 13) IMPORTANTE!
        Key para cada tarea: Cuando se muestra una lista en React, para que React sepa el orden y no los cambie, se debe usar un prop o atributo "KEY". Es la forma que tiene React que tiene para darle una IDENTIDAD ESTABLE al elemento en la lista y debe ser único. De lo contrario resultaria en ERROR.
        En este caso vamos a usar el mismo valor ***identificador de ID.
        ***Se pasa doble porque "key" no puede ser usado como prop en el componente "Tarea"
        *** Las keys sirven como una sugerencia para React pero no son pasadas a tus componentes. Si necesitas usar el mismo valor en tu componente, pásasela explícitamente como una propiedad con un nombre diferente:*/}
      </div>
    </>
  );
}
/* Las funciones "completarTarea" y "eliminarTarea" van al componente "Tarea" a través del Componente "ListaDeTareas". Y se va a actualizar el estado "tareas" */

export default ListaDeTareas;
