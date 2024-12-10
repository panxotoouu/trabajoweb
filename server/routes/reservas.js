import express from 'express';
import { getReservas, createReserva, updateReserva, deleteReserva } from '../controllers/reservasController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getReservas);
router.post('/', auth, createReserva);
router.put('/:id', auth, updateReserva);
router.delete('/:id', auth, deleteReserva);

export default router;