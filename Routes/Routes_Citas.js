import express from 'express';
import { getAllCitas, getCita, agregarCita, modificarCita, eliminarCita } from '../Controllers/CitasController.js';


const router = express.Router();

//CRUD
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', agregarCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita)

export default router;