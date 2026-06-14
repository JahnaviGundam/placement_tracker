import axios from "axios";

const API_BASE_URL = "http://localhost:3001/applications";

export const getApplications= () => {
    return axios.get(API_BASE_URL);
       
    }
export const addApplication = (application) => {
    axios.post(API_BASE_URL, application)  }

