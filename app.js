import express from 'express'
import cors from 'cors'
import conectarBD from './configDB/db.js';
import citasRoutes from './Routes/Routes_Citas.js'

const app = express();
app.use(express.json())
app.use(cors());
app.use('/citas', citasRoutes)


try {
    await conectarBD.authenticate();
    console.log('Connection has been established SATISFACTORIAMENTE.');
  } catch (error) {
    console.error('JODIDO to connect to the database:', error);
  }


app.get('/',(req, res)=> {
    res.send('Hola pues mundo');
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log("el servidor ESTA corriendo en http://www.localhost:5000")

})