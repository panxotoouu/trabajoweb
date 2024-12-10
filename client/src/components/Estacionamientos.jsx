import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Estacionamientos = () => {
  const [estacionamientos, setEstacionamientos] = useState([]);
  const [nuevoEstacionamiento, setNuevoEstacionamiento] = useState({ numero: '', estado: 'Disponible' });

  useEffect(() => {
    fetchEstacionamientos();
  }, []);

  const fetchEstacionamientos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/estacionamientos', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setEstacionamientos(response.data);
    } catch (error) {
      console.error('Error al obtener estacionamientos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/estacionamientos', nuevoEstacionamiento, {
        headers: { 'Authorization': `Bearer${localStorage.getItem('token')}` }
      });
      setNuevoEstacionamiento({ numero: '', estado: 'Disponible' });
      fetchEstacionamientos();
    } catch (error) {
      console.error('Error al agregar estacionamiento:', error);
    }
  };

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gestión de Estacionamientos
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Número de estacionamiento"
            value={nuevoEstacionamiento.numero}
            onChange={(e) => setNuevoEstacionamiento({...nuevoEstacionamiento, numero: e.target.value})}
            margin="normal"
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Agregar Estacionamiento
          </Button>
        </form>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Número</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {estacionamientos.map((estacionamiento) => (
                <TableRow key={estacionamiento._id}>
                  <TableCell>{estacionamiento.numero}</TableCell>
                  <TableCell>{estacionamiento.estado}</TableCell>
                  <TableCell>
                    <Button
                      variant={estacionamiento.estado === 'Disponible' ? 'outlined' : 'contained'}
                      color="primary"
                      onClick={() => {/* Lógica para cambiar el estado */}}
                    >
                      {estacionamiento.estado === 'Disponible' ? 'Ocupar' : 'Liberar'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Estacionamientos;

