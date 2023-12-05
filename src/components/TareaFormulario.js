import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/TareaFormulario.css";

// Componente Funcional
function TareaFormulario(props) {
  /* 3)input: va a menejar lo que el usuario escribió en formulario */
  const [input, setInput] = useState("");

  /* 2)manejarCambio: lo que ocurre cuando cambia el contenido del formulario. Para luego "setInput" actualizar el valor de "input" */
  const manejarCambio = (e) => {
    // console.log("Escribiendo...");
    /* 5) e.target.value: para extraer el valor del campo de texto que escribió el usuario */
    setInput(e.target.value);
    // console.log(e.target.value);
  };
  /* 1) manejarEnvio: se llama a esta funcion cuando se trate de enviar el formulario (clic en boton agregar tarea). Se recibe un argumento "e" */
  const manejarEnvio = (e) => {
    /* 7) e.preventDefault(): evita que la página se vuelva a cargar  */
    e.preventDefault();
    // console.log("Enviando formulario...");

    /* 8) Cuando se envia el formulario, se quiere crear un objeto que represente la tarea nueva, con id(identificador único, instalar nuevo paquete "UUID"), texto(con valor de input actualizado (el estado) y completada (valor boleano) */
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    // console.log(tareaNueva);
    /* 9) Este objeto creado será pasado al componente ListaDeTarea para poder actualizar el estado "tareas".
    Se llama a la función "onSubmit" como "prop" para poder pasarle como parámetro la "tareaNueva" */
    props.onSubmit(tareaNueva);
  };

  return (
    /* 6) Se adiciona un eventListener "onSubmit" al formulario, que llame a funcion "manejarEnvio" */
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      {/* 4) Se adiciona un event Listener: "onChange": cuando ocurra un cambio en el input */}
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
