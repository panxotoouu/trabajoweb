import Evento from '../models/Evento.js';

export const getEventos = async (req, res) => {
  try {
    const eventos = await Evento.find({ condominio: req.user.condominio })
      .sort({ fecha: -1 })
      .limit(20);
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener eventos' });
  }
};

export const createEvento = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const evento = new Evento({
      titulo,
      descripcion,
      condominio: req.user.condominio,
      usuario: req.user.id
    });
    await evento.save();
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear evento' });
  }
};

export const updateEvento = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const evento = await Evento.findByIdAndUpdate(
      req.params.id,
      { titulo, descripcion },
      { new: true }
    );
    if (!evento) return res.status(404).json({ message: 'Evento no encontrado' });
    res.json(evento);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar evento' });
  }
};

export const deleteEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndDelete(req.params.id);
    if (!evento) return res.status(404).json({ message: 'Evento no encontrado' });
    res.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar evento' });
  }
};