import GastoComun from '../models/GastoComun.js';

export const getGastos = async (req, res) => {
  try {
    const gastos = await GastoComun.find({ condominio: req.user.condominio });
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener gastos comunes' });
  }
};

export const createGasto = async (req, res) => {
  try {
    const { descripcion, monto, fecha } = req.body;
    const gasto = new GastoComun({
      condominio: req.user.condominio,
      descripcion,
      monto,
      fecha
    });
    await gasto.save();
    res.status(201).json(gasto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear gasto común' });
  }
};

export const updateGasto = async (req, res) => {
  try {
    const { descripcion, monto, fecha } = req.body;
    const gasto = await GastoComun.findByIdAndUpdate(
      req.params.id,
      { descripcion, monto, fecha },
      { new: true }
    );
    if (!gasto) return res.status(404).json({ message: 'Gasto no encontrado' });
    res.json(gasto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar gasto común' });
  }
};

export const deleteGasto = async (req, res) => {
  try {
    const gasto = await GastoComun.findByIdAndDelete(req.params.id);
    if (!gasto) return res.status(404).json({ message: 'Gasto no encontrado' });
    res.json({ message: 'Gasto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar gasto común' });
  }
};