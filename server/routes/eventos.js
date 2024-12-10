import express from 'express';
import { getEventos, createEvento, updateEvento, deleteEvento } from '../controllers/eventosController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getEventos);
router.post('/', auth, createEvento);
router.put('/:id', auth, updateEvento);
router.delete('/:id', auth, deleteEvento);

export default router;