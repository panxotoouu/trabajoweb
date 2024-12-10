import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Multas = () => {
  const [multas, setMultas] = useState([]);
  const [nuevaMulta, setNuevaMulta] = useState({ residente: '', monto: '', descripcion: '' });

  useEffect(() => {
    fetchMultas();
  }, []);

  const fetchMultas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/multas', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setMultas(response.data);
    } catch (error) {
      console.error('Error al obtener multas:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/multas', nuevaMulta, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setNuevaMulta({ residente: '', monto: '', descripcion: '' });
      fetchMultas();
    } catch (error) {
      console.error('Error al agregar multa:', error);
    }
  };

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gestión de Multas
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Residente"
            value={nuevaMulta.residente}
            onChange={(e) => setNuevaMulta({...nuevaMulta, residente: e.target.value})}
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Monto"
            type="number"
            value={nuevaMulta.monto}
            onChange={(e) => setNuevaMulta({...nuevaMulta, monto: e.target.value})}
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Descripción"
            value={nuevaMulta.descripcion}
            onChange={(e) => setNuevaMulta({...nuevaMulta, descripcion: e.target.value})}
            margin="normal"
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Agregar Multa
          </Button>
        </form>
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Residente</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Descripción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {multas.map((multa) => (
                <TableRow key={multa._id}>
                  <TableCell>{multa.residente}</TableCell>
                  <TableCell>${multa.monto.toLocaleString()}</TableCell>
                  <TableCell>{multa.descripcion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Multas;

