const baseUrl = 'http://localhost:8080'

export const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`

    if(method === 'GET'){
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                // "Access-Control-Allow-Headers" : "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            body: JSON.stringify(data)
        })
    }

}