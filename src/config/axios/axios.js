import axios from 'axios';
import {API_PATH} from "../../constants/appConstants";

export const api = axios.create({
  baseURL: API_PATH,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.REACT_APP_API_KEY
  }
});
