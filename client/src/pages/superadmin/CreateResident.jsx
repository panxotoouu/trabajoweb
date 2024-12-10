import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const CreateResident = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    casa:"",
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
        <h2>Crear Residente</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
          <FormInput
            label="Nombre del Residente"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Casa"
            type="text"
            name="casa"
            value={formData.casa}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Teléfono"
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
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  paddingTop: '20px', // Agrega un padding superior para separar el header del formulario
};

const formContainerStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  width: '100%',
  maxWidth: '400px',
  marginTop: '20px', // Agrega un margen superior para separar el formulario del header
};

export default CreateResident;