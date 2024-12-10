import Estacionamiento from '../models/Estacionamiento.js';

export const getEstacionamientos = async (req, res) => {
  try {
    const estacionamientos = await Estacionamiento.find({ condominio: req.user.condominio });
    res.json(estacionamientos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener estacionamientos' });
  }
};

export const createEstacionamiento = async (req, res) => {
  try {
    const { numero } = req.body;
    const estacionamiento = new Estacionamiento({
      numero,
      condominio: req.user.condominio
    });
    await estacionamiento.save();
    res.status(201).json(estacionamiento);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear estacionamiento' });
  }
};

export const updateEstacionamiento = async (req, res) => {
  try {
    const { estado, usuario } = req.body;
    const estacionamiento = await Estacionamiento.findByIdAndUpdate(
      req.params.id,
      { estado, usuario },
      { new: true }
    );
    if (!estacionamiento) return res.status(404).json({ message: 'Estacionamiento no encontrado' });
    res.json(estacionamiento);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar estacionamiento' });
  }
};

export const deleteEstacionamiento = async (req, res) => {
  try {
    const estacionamiento = await Estacionamiento.findByIdAndDelete(req.params.id);
    if (!estacionamiento) return res.status(404).json({ message: 'Estacionamiento no encontrado' });
    res.json({ message: 'Estacionamiento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar estacionamiento' });
  }
};