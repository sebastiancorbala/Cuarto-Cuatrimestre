import React from 'react';
import './CSS/Menu.css';

const Menu = ({ onItemClick }) => {
  return (
    <div className="menu">
      <ul>
        <li onClick={() => onItemClick('PendientesID')}>Pendientes (IDs)</li>
        <li onClick={() => onItemClick('PendientesID_y_titles')}>Pendientes (IDs y Títulos)</li>
        <li onClick={() => onItemClick('PendSinResolverID_titles')}>Pendientes sin Resolver (ID y Títulos)</li>
        <li onClick={() => onItemClick('PendResueltosID_titles')}>Pendientes Resueltos (ID y Títulos)</li>
        <li onClick={() => onItemClick('PendientesID_userID')}>Pendientes (IDs y UserID)</li>
        <li onClick={() => onItemClick('PendResueltosID_userID')}>Pendientes Resueltos (ID y UserID)</li>
        <li onClick={() => onItemClick('PendSinResolverID_userID')}>Pendientes sin Resolver (ID y UserID)</li>
      </ul>
    </div>
  );
};

export default Menu;