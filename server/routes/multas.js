import express from 'express';
import { getMultas, createMulta, updateMulta, deleteMulta } from '../controllers/multasController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getMultas);
router.post('/', auth, createMulta);
router.put('/:id', auth, updateMulta);
router.delete('/:id', auth, deleteMulta);

export default router;