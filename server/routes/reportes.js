import express from 'express';
import { reporteGastos, reporteMorosidad, reporteReservas } from '../controllers/reportesController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/gastos', auth, reporteGastos);
router.get('/morosidad', auth, reporteMorosidad);
router.get('/reservas', auth, reporteReservas);

export default router;