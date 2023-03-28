const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base para multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Numero hasta'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Listar para multiplicar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b, argv.l)) {
            throw 'La base tiene se que ser un numero';
        }
        return true;
    })
    .argv;


module.exports = argv;