
//Require para hacer archivos FileSystem
const     fs = require('fs');
const colors = require('colors');


let crearArchivo = (base,limite) =>{

    return new Promise((resolve, reject) =>{
        let data="";

        if(!Number(base)){
            reject("Error, no es numero");
            return;
        }

        for (let i=1; i<=limite; i++){

            data+=`${base} * ${i} = ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};
let listarTabla = (base,limite) =>{

    return new Promise((resolve, reject) =>{
        let data="";

        if(!Number(base)){
            reject("Error, no es numero");
            return;
        }

        console.log(`================tabla de ${base}===========`.red);
        for (let i=1; i<=limite; i++){

            console.log(`${base} * ${i} = ${base*i} \n`);
        }
    });
};
module.exports = {
    crearArchivo,
    listarTabla
}