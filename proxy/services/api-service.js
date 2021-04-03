require('dotenv').config();
const axios = require('axios');

const makeHttpGetRequest = (url) => {
     return axios.get(process.env.API_URL + url, {
	 proxy: false
	 });
};

module.exports = {
    makeHttpGetRequest: makeHttpGetRequest
};
