const db = require('../models/index.js');

const auto_validator = {

    autoGris : async(arr,id_auto)  => {
        /* id de pintura es 5 */
        const existe = arr.find(value => value == 5);
        var color_encontrado = false;
        if(existe) {
            
            //Encontrar el color del auto
            const auto = await db.Auto.findOne({
                where : {
                    id : id_auto
                }
            });
            //encuentro el color
            color_encontrado = (auto.color.toLowerCase() == 'gris') ? true : false;
            /* lo elimino del array de servicios a realizar en caso de existir*/
            arr = (color_encontrado) ? arr.filter( e => e != 5) : arr;
        }

        return arr;
    }

};

module.exports = auto_validator;