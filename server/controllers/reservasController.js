import Reserva from '../models/Reserva.js';

export const getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find({ usuario: req.user.id }).populate('espacioComun');
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener reservas' });
  }
};

export const createReserva = async (req, res) => {
  try {
    const { espacioComun, fecha } = req.body;
    const reserva = new Reserva({
      espacioComun,
      usuario: req.user.id,
      fecha
    });
    await reserva.save();
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear reserva' });
  }
};

export const updateReserva = async (req, res) => {
  try {
    const { estado } = req.body;
    const reserva = await Reserva.findByIdAndUpdate(
      req.params.id,
      { estado },
      { new: true }
    );
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar reserva' });
  }
};

export const deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndDelete(req.params.id);
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
    res.json({ message: 'Reserva eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar reserva' });
  }
};