import express from 'express';
import { getGastos, createGasto, updateGasto, deleteGasto } from '../controllers/gastosController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getGastos);
router.post('/', auth, createGasto);
router.put('/:id', auth, updateGasto);
router.delete('/:id', auth, deleteGasto);

export default router;