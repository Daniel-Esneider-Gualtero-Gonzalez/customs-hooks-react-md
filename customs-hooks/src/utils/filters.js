
/**
 * Esta es una función que filtra una array por props y su value .
 * La funcion debe retornar un boolean
 *
 * @param {Object} filters - objeto {nameprop:function}
 * @param {Array} datalist - El array de objetos a los que aplicara el filtro.
 * @returns {Array} El nuevo array con los filtros.
 *
 * @example
 * const resultado = filterArraysProps({name:e=>e.include("a")},[{name:"alex"},{name:"lucio"}]);
 * console.log(resultado); // Resultado: [{name:"alex"}]
 */

export function filterArraysProps(filters,datalist) {

    if(typeof filters !== 'object' || Array.isArray(filters)) throw Error("Se espera un objeto como argumento : {}")

    if(Array.isArray(datalist) === false) throw Error("Se espera un Array como argumento : []")
    

    // valida si el valor de las props son funciones
    for (const prop in filters) {

        if( typeof filters[prop] !== 'function' || filters[prop] === undefined){
            
            throw Error("`El valor de la prop filtradora =>, No es una funcion  o esta undefined")
        }
    } 


    return datalist.filter(obj=>{
        
        let cumpleFiltros = true

        for (const prop in filters) {
            if (Object.hasOwnProperty.call(filters, prop)) {
                
             if(obj.hasOwnProperty(prop)){
                // valor de prop de filter => es una funcion
                const functFilter = filters[prop]
                // valor de la propiedad en el objeto actual
                const valPropData = obj[prop]

                // si el valor de la prop de la data, no esta definida salimos
                // ya que no cumple para poder realizar el filtro 
                if(valPropData === undefined || !functFilter(valPropData)){
             
                cumpleFiltros = false

                break;
                }


                
             }else{
                throw Error("la propiedad por la cual desea filtrar no existe en la lista de objetos")
             }
                
            }// valida que la prop de filter sea propia
        }
        
    
    
        return cumpleFiltros

       
        
    })
}



// for (const prop in filters) {
//     // si la prop esta en el objeto
//     if (obj.hasOwnProperty(prop)) {
        
//         // valor de prop de filter => es una funcion
//         const functFilter = filters[prop]
//         // valor de la propiedad en el objeto actual
//         const valPropData = obj[prop]

       
        
//         // si el valor de la prop de la data, no esta definida 
//         if(valPropData === undefined){
             
            
//             cumpleFiltros = false

//             break;
//         }

//         // validamos si se cumple el filtro

//         // realiza un callback con el valor de la prop del objeto actual
//         //  y tambien realizamos otro bucle para ejecutar todos los filtros
//         for (const propFunt in filters) {

//             // validamos otra vez que la propiedad por la que queramos filtrar exista en el objeto si no, no se filtra
//             if(!obj.hasOwnProperty(propFunt)) {
//                 cumpleFiltros = false
//                 break
//             }
           
//            let functFilter = filters[propFunt]

//            let cumpleFilter = functFilter(obj[propFunt])

//            if(!cumpleFilter) return false
//         }






//             // si en el objeto actual no existe la propiedad por la cual se quiere filtrar
//     }else {
        
//         throw Error("la propiedad por la cual desea filtrar no existe en la lista de objetos")
//         cumpleFiltros = false
//         continue
//     } 

// } // fin del for que valida si las prop que me pasan se encuentran y que realiza todos los filtros

