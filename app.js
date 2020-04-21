
const {crearArchivo, listarTabla} = require("./multiplicar/multiplicar");

const argv = require("./config/yargs").argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando){

    case "listar":
        listarTabla(argv.base,argv.limite)
        break;

    case "crear":
        crearArchivo(argv.base,argv.limite)
            .then( archivo => console.log(colors.green("Se creo el archivo", argv.base)))
            .catch((err)=>{
                console.log(err);
            });
        break;
}

// Proces.argv es una variable de entorno global es para recobor comandos
//desde cpnsola
// let argument= process.argv;
// let parametro = argument[2];
// let base = parametro.split("=")[1];
//
//
