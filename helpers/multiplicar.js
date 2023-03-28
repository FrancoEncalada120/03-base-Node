

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        console.clear();

        let salida = '';
        const fs = require('fs');
        var colors = require('colors');

        console.log(`tabla del ${base} ======================================================== `);

        for (let index = 1; index <= hasta; index++) {

            salida += `${base} x ${index} = ${index * base} \n`;
            //console.log(`--> ${base} x ${index} = ${index * base}`);
        }

        if (listar) {
            console.log(salida);
            console.log('Underline that text'.yellow.underline);
        }
        else
            console.log('salida');

        const txt = `./salida/tabla-${base}.txt`;

        fs.writeFile(txt, salida, (err) => {
            if (err) throw err;
            //console.log(`tabla-${base}.txt creado`);
        })

        return `${txt} promise`;

    } catch (error) {
        throw error;
    }


}


module.exports = {
    crearArchivo
}