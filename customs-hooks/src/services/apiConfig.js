
export const baseUrl = "https://rickandmortyapi.com/api/"


//  headers
const API_HEADERS ={
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your-access-token',
}



export const headers = {
    user: {
        ...API_HEADERS,
    }
}