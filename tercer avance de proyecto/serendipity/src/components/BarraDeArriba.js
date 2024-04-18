import React from "react";
import { Link } from "react-router-dom";
import "./CSS/BarraDeArriba.css";

function BarraDeArriba() {
  return (
    <div className="barra-amarilla">
      <div className="textos-arriba">
        <span>Envío rápido</span>
        <span>Productos exclusivos</span>
        <span>Realza tu belleza</span>
      </div>
      <Link to="/registro" className="registrarme-btn">Registrarme</Link>
    </div>
  );
}

export default BarraDeArriba;