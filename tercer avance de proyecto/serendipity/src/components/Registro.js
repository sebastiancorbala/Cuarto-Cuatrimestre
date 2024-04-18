import React, { useState } from "react";
import { Redirect } from "react-router-dom"; // Importa Redirect de react-router-dom
import "./CSS/Registro.css";

function Registro() {
  const [isRegistered, setIsRegistered] = useState(false); // Estado para controlar el registro

  // Función para manejar el registro del usuario
  const handleRegistro = () => {
    // Lógica de registro aquí (puedes agregar tu lógica de registro)

    // Después de registrar al usuario, establece isRegistered a true para redirigir
    setIsRegistered(true);
  };

  // Redirige a la página principal si el usuario está registrado
  if (isRegistered) {
    return <Redirect to="/" />;
  }

  return (
    <div className="registro-container">
         

      <h2>Registro</h2>
      <form className="registro-form" onSubmit={handleRegistro}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />

        <button type="submit" className="registro-btn">Registrarse</button>
      </form>
    </div>

           

  );
}

export default Registro;