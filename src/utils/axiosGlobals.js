import axios from 'axios';

const axiosGlobals = () => {
    axios.defaults.baseURL = 'http://foodmama.herokuapp.com';
    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
}

export default axiosGlobals;