import express from 'express'
import {
   getAllBarang,
   getBarangById,
   addBarang,
   updateBarang,
   deleteBarang,
   getUsageReport
} from '../controllers/barang_controller.js'


const app = express()

import { authorize } from '../controllers/auth_controller.js'
import { IsAdmin } from '../middleware/role_validation.js'

app.get('/', getAllBarang)
app.get('/:id', getBarangById)
app.post('/:id',authorize,[IsAdmin], addBarang)
app.put('/:id', updateBarang)
app.delete('/', deleteBarang)
app.post('/', getUsageReport)

export default app