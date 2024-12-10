import React, { useState } from 'react';
import Navbar from '../../components/Navbar'; // Asegúrate de que la ruta sea correcta
import FormInput from '../../components/FormInput'; // Asegúrate de que la ruta sea correcta
import Button from '../../components/Button'; // Asegúrate de que la ruta sea correcta

const CreateCondo = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    manager: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes agregar la lógica para enviar los datos a tu API
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={formContainerStyle}>
        <h2>Crear Condominio</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
          <FormInput
            label="Nombre del Condominio"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Dirección"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <FormInput
            label="Administrador"
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
          />
          <FormInput
            label="Teléfono de Contacto"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Button text="Guardar" />
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column', // Mantiene el Navbar y el formulario en columna
  alignItems: 'center',
  minHeight: '100vh', // Asegura que ocupe toda la altura de la ventana
};

const formContainerStyle = {
  backgroundColor: 'white', // Fondo blanco
  padding: '30px', // Espaciado interno
  borderRadius: '8px', // Bordes redondeados
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad
  width: '100%', // Ancho completo
  maxWidth: '400px', // Ancho máximo
};

export default CreateCondo;