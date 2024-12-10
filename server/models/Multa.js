import mongoose from 'mongoose';

const multaSchema = new mongoose.Schema({
  residente: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  monto: { type: Number, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  estado: { type: String, enum: ['Pendiente', 'Pagada'], default: 'Pendiente' },
});

export default mongoose.model('Multa', multaSchema);