const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    default: 12,
                    type: 'number',
                    describe: 'Es la cantidad de la tabla'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base no es un numero';
                    }else{
                        return true;
                    }
                })
                .argv;

module.exports = argv;