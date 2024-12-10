import express from 'express';
import { getEstacionamientos, createEstacionamiento, updateEstacionamiento, deleteEstacionamiento } from '../controllers/estacionamientosController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getEstacionamientos);
router.post('/', auth, createEstacionamiento);
router.put('/:id', auth, updateEstacionamiento);
router.delete('/:id', auth, deleteEstacionamiento);

export default router;