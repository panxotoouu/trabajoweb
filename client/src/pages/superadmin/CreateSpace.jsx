import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const CreateSpace = () => {
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
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
        <h2>Crear Espacio Común</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
          <FormInput
            label="Nombre del Espacio"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Capacidad"
            type="number"
            name="capacity"
            value={formData.capacity}
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
  backgroundImage: 'url(/path/to/your/image.jpg)', // Cambia esto a la ruta de tu imagen de fondo
  backgroundSize: 'cover', // Asegura que la imagen cubra todo el fondo
};

const formContainerStyle = {
  backgroundColor: 'white', // Fondo blanco
  padding: '20px', // Espaciado interno
  borderRadius: '8px', // Bordes redondeados
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad
  width: '100%', // Ancho completo
  maxWidth: '400px', // Ancho máximo
};

export default CreateSpace;