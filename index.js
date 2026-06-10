import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {dirname} from 'path'
import {fileURLToPath} from 'url'


const app = express();
const PORT = 3000; 

app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
const __dirname = dirname(fileURLToPath(import.meta.url)); //para obtener la ruta del directorio actual
console.log(__dirname + '/public')
//configurar un archivo estatico como pagina principal
app.use(express.static(__dirname + '/public'))

const libros = [
    {
        id: 1,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry"
    },
    {
        id: 2,
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        id: 3,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes"
    }
]

app.get('/api/libros', (req, res) => {
    res.json(libros)
})

app.get('/api/libros/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const libroEncontrado = libros.find(
        libro => libro.id === id
    )

    res.json(libroEncontrado)
})


app.post('/api/libros', (req, res) => {

    const nuevoLibro = req.body

    libros.push(nuevoLibro)

    res.json({
        mensaje: 'Libro agregado correctamente',
        libro: nuevoLibro
    })
})

app.delete('/api/libros/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const indice = libros.findIndex(
        libro => libro.id === id
    )

    libros.splice(indice, 1)

    res.json({
        mensaje: 'Libro eliminado correctamente'
    })
})


app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`)
})