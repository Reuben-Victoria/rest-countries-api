import Axios from "axios";

export const axios = Axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}/v2/`
})