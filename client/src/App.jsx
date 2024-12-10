import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GastosComunes from './components/GastosComunes';
import Reservas from './components/Reservas';
import Multas from './components/Multas';
import Estacionamientos from './components/Estacionamientos';
import Reportes from './components/Reportes';
import LibroEventos from './components/LibroEventos';

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/gastos-comunes" component={GastosComunes} />
          <Route path="/reservas" component={Reservas} />
          <Route path="/multas" component={Multas} />
          <Route path="/estacionamientos" component={Estacionamientos} />
          <Route path="/reportes" component={Reportes} />
          <Route path="/libro-eventos" component={LibroEventos} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

