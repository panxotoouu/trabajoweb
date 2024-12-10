import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  condominio: { type: mongoose.Schema.Types.ObjectId, ref: 'Condominio', required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Evento', eventoSchema);