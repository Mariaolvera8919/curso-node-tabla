const { describe } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    demandOption: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: 10,
                    describe: 'Este es el último número de la tabla'
                })
                .check((argv, options) =>{ 
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }    
                    return true;             
                }).argv;

                module.exports =argv;