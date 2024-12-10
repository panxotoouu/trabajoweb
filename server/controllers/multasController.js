import Multa from '../models/Multa.js';

export const getMultas = async (req, res) => {
  try {
    const multas = await Multa.find({ residente: req.user.id });
    res.json(multas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener multas' });
  }
};

export const createMulta = async (req, res) => {
  try {
    const { residente, monto, descripcion } = req.body;
    const multa = new Multa({
      residente,
      monto,
      descripcion
    });
    await multa.save();
    res.status(201).json(multa);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear multa' });
  }
};

export const updateMulta = async (req, res) => {
  try {
    const { estado } = req.body;
    const multa = await Multa.findByIdAndUpdate(
      req.params.id,
      { estado },
      { new: true }
    );
    if (!multa) return res.status(404).json({ message: 'Multa no encontrada' });
    res.json(multa);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar multa' });
  }
};

export const deleteMulta = async (req, res) => {
  try {
    const multa = await Multa.findByIdAndDelete(req.params.id);
    if (!multa) return res.status(404).json({ message: 'Multa no encontrada' });
    res.json({ message: 'Multa eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar multa' });
  }
};