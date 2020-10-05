const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('========================='.green);
    console.log(`====Tabla de ${base}====`.green);
    console.log('======================='.green);
    return new Promise((resolve, reject) => {
        if (!Number(base && limite)) {
            reject(`El valor introducido ${base} o ${limite} no es un número`);
            return;
        }
        let lista = '';
        for (let i = 0; i <= limite; i++) {
            lista += `${base} * ${i} = ${ base * i }\n`;
        }
        resolve(lista);

    })
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es número.`);
            return;
        }
        let data = '';

        for (let i = 0; i < 11; i++) {
            data += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tablas-${ base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}