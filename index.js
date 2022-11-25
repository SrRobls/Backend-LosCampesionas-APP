// Cargar las dependencia
let bodyParser = require("body-parser");
let express = require("express");

// Cargar la configuracion de la applicacion
let appConfig = require("./config");

// Cargamos los enrutadores
let productosRouter = require("./routes/productosRouter");

// Inicializar nuestra app web y la conexion a base de datos
let dbConnector = require("./db/dbConector");
let app = express();

// Registramos los enrutadores
app.use("/productos", productosRouter);

// Levantamos el servidor
app.listen(appConfig.PORT, function () {
    console.log(
        "La aplicacion esta escuchando en el puerto: " + appConfig.PORT
    );
});

console.log("Hello world!!!!!");