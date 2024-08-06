const express = require('express')
const fileUpload = require('express-fileupload')
const photoRoutes = require('./photos.routes')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './archivos'
}));

app.use(photoRoutes)

app.use(express.static('images'))

app.listen(3000, () => {
    console.log("El servidor esta en el puerto", 3000)
})