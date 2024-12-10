import mongoose from 'mongoose';

const estacionamientoSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  estado: { type: String, enum: ['Disponible', 'Ocupado'], default: 'Disponible' },
  condominio: { type: mongoose.Schema.Types.ObjectId, ref: 'Condominio', required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Estacionamiento', estacionamientoSchema);