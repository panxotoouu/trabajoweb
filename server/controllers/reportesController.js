import GastoComun from '../models/GastoComun.js';
import User from '../models/User.js';
import Reserva from '../models/Reserva.js';

export const reporteGastos = async (req, res) => {
  try {
    const gastos = await GastoComun.find({ condominio: req.user.condominio })
      .sort({ fecha: -1 })
      .limit(10);
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ message: 'Error al generar reporte de gastos' });
  }
};

export const reporteMorosidad = async (req, res) => {
  try {
    const usuarios = await User.find({ condominio: req.user.condominio, role: 'Residente' });
    // Aquí deberías implementar la lógica para determinar la morosidad
    // Este es un ejemplo simplificado
    const morosos = usuarios.map(usuario => ({
      id: usuario._id,
      nombre: usuario.username,
      deuda: Math.floor(Math.random() * 100000) // Esto es solo un ejemplo, deberías calcular la deuda real
    })).filter(usuario => usuario.deuda > 0);
    res.json(morosos);
  } catch (error) {
    res.status(500).json({ message: 'Error al generar reporte de morosidad' });
  }
};

export const reporteReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find({ condominio: req.user.condominio })
      .populate('espacioComun')
      .populate('usuario', 'username')
      .sort({ fecha: -1 })
      .limit(20);
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al generar reporte de reservas' });
  }
};