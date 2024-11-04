// src/App.js
import React, { useState } from 'react';
import './App.css';
import backgroundImage from '../src/background.jpg'; // Imagen de fondo
import Becas from './Becas'; // Importar componente Becas

function App() {
  const [showBecas, setShowBecas] = useState(false);

  const handleNavigation = (section) => {
    if (section === "becas") {
      setShowBecas(true);
    } else {
      setShowBecas(false);
    }
  };

  return (
    <div className="App">
      {/* Capa de fondo con transparencia */}
      <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      
      <header className="app-header">
        <h1>Relaciones USM 2.0</h1>
        <nav className="navbar">
          <a href="#inicio" onClick={() => handleNavigation("inicio")}>Inicio</a>
          <a href="#becas" onClick={() => handleNavigation("becas")}>Becas y Beneficios</a>
          <a href="#planes" onClick={() => handleNavigation("planes")}>Planes</a>
          <div className="navbar-right">
            <a href="#mi-cuenta">Mi Cuenta</a>
          </div>
        </nav>
      </header>

      {showBecas ? (
        <Becas />
      ) : (
        // Contenido de la página principal
        <div className="content">
          <p className="question">¿Quieres conocer tus beneficios?</p>
          <button className="benefits-button">Ingresa aquí</button>
        </div>
      )}

      {/* Botón de Soporte en la esquina inferior derecha */}
      <button className="support-button">Soporte</button>
    </div>
  );
}

export default App;
