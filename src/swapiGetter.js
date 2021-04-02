import axios from 'axios'
//const mockAxios = require('axios');

// Get a star wars person by id and return their name
const swapiGetter = id =>
     axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.data)

export default swapiGetter