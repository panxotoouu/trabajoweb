import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['SuperAdmin', 'AdminCondominio', 'Conserje', 'Directiva', 'Residente'], required: true },
  condominio: { type: mongoose.Schema.Types.ObjectId, ref: 'Condominio' },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model('User', userSchema);