
const opt = {
    base: {
        demand:true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}

const argv = require("yargs")
    .command("listar","Impresion de la tabla multitplicar",opt)
    .command("crear","Genera un archivo con la tabla de multitplicar",opt)
    .help()
    .argv;


module.exports= {
    argv
}
