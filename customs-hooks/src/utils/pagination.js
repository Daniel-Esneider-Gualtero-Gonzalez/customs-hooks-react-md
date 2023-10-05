// funcion que pagina una lista de any cosa y la cantidad de elementos por la cuel
// desea paginar

function paginateArrayData(lisdata,numelepaginate) {

    if(!Array.isArray(lisdata)) throw Error("se espera un Array como argumento ")
 
    const cantPages = Math.ceil(lisdata.length / numelepaginate)

    const dataPaginata = []
    let pagesIndex = 0
    let valuesPage = []

        
       for (let i = 0; i < lisdata.length; i++) {
        
        valuesPage.push(lisdata[i])
        

        if (valuesPage.length === numelepaginate) {
            dataPaginata[pagesIndex]=valuesPage
           
            pagesIndex++
            valuesPage = []
        }

        if(i==lisdata.length -1 && valuesPage.length > 0){
            
            dataPaginata[pagesIndex]=valuesPage
        }

        

       }
        
    

    return {dataPaginata,cantPages}
}