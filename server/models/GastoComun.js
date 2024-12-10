import mongoose from 'mongoose';

const gastoComunSchema = new mongoose.Schema({
  condominio: { type: mongoose.Schema.Types.ObjectId, ref: 'Condominio', required: true },
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, required: true },
});

export default mongoose.model('GastoComun', gastoComunSchema);