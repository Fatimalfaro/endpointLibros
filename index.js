import express from 'express';

const app = express();
const PORT = 3000; 


console.log("Primer mensaje")

app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`)
})