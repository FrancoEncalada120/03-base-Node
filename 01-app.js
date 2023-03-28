



//const base = 2;
const argv  = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');



crearArchivo(argv.b, argv.l, argv.h)
    .then(x => console.log(x))
    .catch(x => console.log(x));

    console.log(argv.b, argv.l);

// console.log(process.argv);s
//console.log(yargs);

// console.log('Base yar = ', yargs.base);

