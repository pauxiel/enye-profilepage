const API_URL = 'http://api.enye.tech/v1/challenge/records';
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true

 
}

export const getAll = () =>
  fetch(`${API_URL}`, { headers })
    .then(res => res.json())
        .then(data => data.profiles)
    
       