import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const LibroEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [nuevoEvento, setNuevoEvento] = useState({ titulo: '', descripcion: '' });

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/eventos', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setEventos(response.data);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/eventos', nuevoEvento, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setNuevoEvento({ titulo: '', descripcion: '' });
      fetchEventos();
    } catch (error) {
      console.error('Error al agregar evento:', error);
    }
  };

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Libro de Eventos
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Título del evento"
            value={nuevoEvento.titulo}
            onChange={(e) => setNuevoEvento({...nuevoEvento, titulo: e.target.value})}
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Descripción del evento"
            value={nuevoEvento.descripcion}
            onChange={(e) => setNuevoEvento({...nuevoEvento, descripcion: e.target.value})}
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Agregar Evento
          </Button>
        </form>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Título</TableCell>
                <TableCell>Descripción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eventos.map((evento) => (
                <TableRow key={evento._id}>
                  <TableCell>{new Date(evento.fecha).toLocaleString()}</TableCell>
                  <TableCell>{evento.titulo}</TableCell>
                  <TableCell>{evento.descripcion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default LibroEventos;

