const { argv } = require('./config/yargs');
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch(comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${ archivo }`))
      .catch(error => console.log(error));
    break;
  default:
    console.log('No reconocido');
}

// console.log(argv);

// const param = argv[2];
// const base = param.split('=')[1];