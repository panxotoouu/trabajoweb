import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  const userRole = localStorage.getItem('userRole');

  const menuItems = [
    { title: 'Gastos Comunes', path: '/gastos-comunes', roles: ['SuperAdmin', 'AdminCondominio', 'Directiva', 'Residente'] },
    { title: 'Reservas', path: '/reservas', roles: ['SuperAdmin', 'AdminCondominio', 'Conserje', 'Residente'] },
    { title: 'Multas', path: '/multas', roles: ['SuperAdmin', 'AdminCondominio', 'Directiva'] },
    { title: 'Estacionamientos', path: '/estacionamientos', roles: ['SuperAdmin', 'AdminCondominio', 'Conserje'] },
    { title: 'Reportes', path: '/reportes', roles: ['SuperAdmin', 'AdminCondominio', 'Directiva'] },
    { title: 'Libro de Eventos', path: '/libro-eventos', roles: ['SuperAdmin', 'AdminCondominio', 'Conserje'] },
  ];

  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          {menuItems.map((item, index) => (
            item.roles.includes(userRole) && (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button
                  component={Link}
                  to={item.path}
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ height: '100px', fontSize: '1.2rem' }}
                >
                  {item.title}
                </Button>
              </Grid>
            )
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Dashboard;

