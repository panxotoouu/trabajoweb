import mongoose from 'mongoose';

const condominioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  viviendas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vivienda' }],
  espaciosComunes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EspacioComun' }],
});

export default mongoose.model('Condominio', condominioSchema);