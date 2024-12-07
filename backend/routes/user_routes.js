// user_routes.js
import express from 'express';
import {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} from '../controllers/user_controller.js';
import { authenticate } from '../controllers/auth_controller.js'; // Pastikan impor ini benar

const app = express();
app.use(express.json());

app.get('/', getAllUser);
app.get('/userId:id', getUserById);
app.post('/addUser', addUser);
app.put('/upUser:id', updateUser);
app.delete('/deleteUser:id', deleteUser);

// Menggunakan authenticate di route login
app.post('/login', authenticate, (req, res) => {
    // Logic untuk login jika autentikasi berhasil
    res.send('Login successful');
});

export default app;
