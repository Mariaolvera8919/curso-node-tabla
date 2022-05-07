const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 3, listar = false, hasta = 20)=>{
   try {
        

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i}  = ${base * i}\n`;
            consola += `${colors.green(base)} ${'x'.gray} ${colors.yellow(i)}  = ${colors.cyan(base * i)}\n`;
        }
        if(listar){
            console.log('==================')
            console.log(`Tabla del ${base}`)
            console.log('==================') 
            console.log(consola)
        }
        
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return`tabla-${base}.txt `;    
   } catch (error) {
       throw error;
   }
      
    
}

module.exports={
    crearArchivo
}