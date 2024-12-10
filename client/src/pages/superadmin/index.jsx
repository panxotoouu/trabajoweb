import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SuperAdminDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '20px', flex: '1', textAlign: 'center' }}>
        <div style={titleBackgroundStyle}>
          <h2 style={titleStyle}>Dashboard del SuperAdmin</h2>
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
          <div style={blockStyle}>
            <a href="/superadmin/createSpace" style={linkStyle}>Crear Espacios Comunes</a>
          </div>
          <div style={blockStyle}>
            <a href="/superadmin/createResident" style={linkStyle}>Crear Residentes</a>
          </div>
          <div style={blockStyle}>
            <a href="/superadmin/createCondo" style={linkStyle}>Crear Condominios</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const titleStyle = {
  fontSize: '24px', // Tamaño de fuente más grande
  color: '#FFFFFF', // Color blanco para el texto
  fontWeight: 'bold', // Negrita
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Sombra de texto
  margin: 0, // Eliminar margen para centrar mejor
};

const titleBackgroundStyle = {
  backgroundColor: '#A020F0', // Color de fondo morado
  padding: '20px', // Espaciado alrededor del texto
  borderRadius: '8px', // Bordes redondeados
  display: 'inline-block', // Para que el fondo se ajuste al tamaño del texto
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad
};

const blockStyle = {
  backgroundColor: '#A020F0', // Morado
  padding: '7px',
  borderRadius: '10px',
  textAlign: 'center',
  width: '180px', // Tamaño fijo para uniformidad
  height: '70px', // Altura fija opcional
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  display: 'flex',
  gap: '20px', // Espaciado uniforme
  marginTop: '20px',
  justifyContent: 'center',
};


export default SuperAdminDashboard;
