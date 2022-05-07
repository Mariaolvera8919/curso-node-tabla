
//const { demandOption } = require('yargs');
const yargs = require('yargs');
const argv = require ('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');


console.clear();

//console.log('base: yargs', argv.b);

// const base = 3;

crearArchivo(argv.b , argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log (err));

