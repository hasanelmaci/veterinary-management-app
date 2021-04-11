import axios from "axios";

const setUserAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    } else {
        delete axios.defaults.headers.common;
    }
};

export default setUserAuthToken;
