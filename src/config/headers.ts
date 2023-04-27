export const urlBase = 'http://localhost:8000'
export const urlApi = `${ urlBase }/api`

export const headers = {
   'Content-Type': 'application/json',
   'Accept': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
   'Authorization': ''
}