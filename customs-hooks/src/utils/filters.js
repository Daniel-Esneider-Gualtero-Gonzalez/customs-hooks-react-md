
/**
 * Esta es una función que filtra una array por props y su value .
 * La funcion debe retornar un boolean
 *
 * @param {Object} filters - objeto {nameprop:function}
 * @param {Array} numero2 - El array de objetos a los que aplicara el filtro.
 * @returns {Array} El nuevo array con los filtros.
 *
 * @example
 * const resultado = filterArraysProps({name:e=>e.include("a")},[{name:"alex"},{name:"lucio"}]);
 * console.log(resultado); // Resultado: [{name:"alex"}]
 */

export function filterArraysProps(filters,data) {

    if(typeof filters !== 'object' || Array.isArray(filters)) throw Error("Se espera un objeto como argumento : {}")

    if(Array.isArray(data) === false) throw Error("Se espera un Array como argumento : []")


    return data.filter(obj=>{

       let cumpleFiltros = true
       
            
        for (const prop in filters) {
            // si la prop esta en el objeto
            if (obj.hasOwnProperty(prop)) {

                // valor de prop de filter, tiene que ser una funcion
                const functFilter = filters[prop]
                // valor de la propiedad en el objeto actual
                const valPropData = obj[prop]

               
                // evaluamos que la prop y su valor sea una funcion y que este definida
                if(typeof functFilter !== 'function' || functFilter === undefined ) {
                    throw Error("`El valor de la prop filtradora =>, No es una funcion  o esta undefined")
                }
                
                // si el valor de la prop de la data, no esta definida 
                if(valPropData === undefined){
                    cumpleFiltros = false

                    break;
                }

                // validamos si se cumple el filtro

                // realiza un callback con el valor de la prop de la data
                if(functFilter(valPropData)){

                    cumpleFiltros = true
                }else{
                    cumpleFiltros = false
                }







            }

        }
        //  retornamos si cumple o no los flitros

        return cumpleFiltros

    })

    
    

}