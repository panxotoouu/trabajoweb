import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Reportes = () => {
  const [tipoReporte, setTipoReporte] = useState('');
  const [reporteData, setReporteData] = useState(null);

  const generarReporte = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/reportes/${tipoReporte}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setReporteData(response.data);
    } catch (error) {
      console.error('Error al generar reporte:', error);
    }
  };

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Generación de Reportes
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Tipo de Reporte</InputLabel>
          <Select value={tipoReporte} onChange={(e) => setTipoReporte(e.target.value)}>
            <MenuItem value="gastos">Gastos Comunes</MenuItem>
            <MenuItem value="morosidad">Morosidad</MenuItem>
            <MenuItem value="reservas">Uso de Espacios Comunes</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={generarReporte}>
          Generar Reporte
        </Button>
        {reporteData && (
          <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
              Resultado del Reporte
            </Typography>
            <pre style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 4, overflowX: 'auto' }}>
              {JSON.stringify(reporteData, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Reportes;

