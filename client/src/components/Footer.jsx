import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>&copy; {new Date().getFullYear()} Sistema de Gestión de Condominios. Todos los derechos reservados.</p>
        <div style={linksStyle}>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#A020F0', // Fondo morado
  color: 'white', // Texto blanco
  padding: '8px',
  textAlign: 'center',
  marginTop: '10px',
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const linksStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};

const linkStyle = {
  color: 'white', // Texto blanco para los enlaces
  textDecoration: 'none', // Sin subrayado
  fontWeight: 'bold',
};

export default Footer;
