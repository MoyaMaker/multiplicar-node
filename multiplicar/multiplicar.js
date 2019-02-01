const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite) => {
  if (!Number(base)) {
    console.log(`La base introducida '${ base }' no es un número`);
    return;
  }
  if (!Number(limite)) {
    console.log(`El limite introducido '${ limite }' no es un número`);
    return;
  }
  
  console.log(colors.green('============='));
  console.log(colors.green('Tabla del ' + base));
  console.log(colors.green('============='));
  for (let i = 1; i <= limite; i++) {
    console.log(`${ base } * ${ i } = ${base * i}`);
  }
};

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor base introducido '${ base }' no es un número`);
      return;
    }
    if (!Number(limite)) {
      reject(`El valor limite introducido '${ limite }' no es un número`);
      return;
    }
    let data = '';
  
    for (let i = 1; i <= limite; i++) {
      data += `${ base } * ${ i } = ${base * i}\n`;
    }
    
    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (error) => {
      if (error) reject(error);
      else resolve(`El archivo ${ colors.green(`tabla-${base}.txt`)} ha sido creado!`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}