import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GastosComunes = () => {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const fetchGastos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gastos-comunes', {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        setGastos(response.data);
      } catch (error) {
        console.error('Error al obtener gastos comunes:', error);
      }
    };
    fetchGastos();
  }, []);

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Gastos Comunes
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Descripción</TableCell>
                <TableCell>Monto</TableCell>
                <TableCell>Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gastos.map((gasto) => (
                <TableRow key={gasto._id}>
                  <TableCell>{gasto.descripcion}</TableCell>
                  <TableCell>${gasto.monto.toLocaleString()}</TableCell>
                  <TableCell>{new Date(gasto.fecha).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Agregar Gasto
        </Button>
      </CardContent>
    </Card>
  );
};

export default GastosComunes;

