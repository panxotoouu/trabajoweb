import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

const Reservas = () => {
  const [espacio, setEspacio] = useState('');
  const [fecha, setFecha] = useState('');

  const handleReserva = async () => {
    if (!espacio || !fecha) {
      alert('Por favor seleccione un espacio y una fecha');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/reservas', 
        { espacioComun: espacio, fecha: new Date(fecha) },
        { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Reserva realizada con éxito');
    } catch (error) {
      console.error('Error al realizar la reserva:', error);
      alert(error.response?.data?.message || 'Error al realizar la reserva');
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Reserva de Espacios
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Espacio</InputLabel>
          <Select value={espacio} onChange={(e) => setEspacio(e.target.value)}>
            <MenuItem value="quincho">Quincho</MenuItem>
            <MenuItem value="multicancha">Multicancha</MenuItem>
            <MenuItem value="salaEventos">Sala de Eventos</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleReserva} fullWidth>
          Reservar
        </Button>
      </CardContent>
    </Card>
  );
};

export default Reservas;

