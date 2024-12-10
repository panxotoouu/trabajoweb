import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
  espacioComun: { type: mongoose.Schema.Types.ObjectId, ref: 'EspacioComun', required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fecha: { type: Date, required: true },
  estado: { type: String, enum: ['Pendiente', 'Confirmada', 'Cancelada'], default: 'Pendiente' },
});

export default mongoose.model('Reserva', reservaSchema);