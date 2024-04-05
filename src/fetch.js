const ENDPOINT = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa"
import axios from "axios";


export const fetchSearch = async (string) => {
    const resp = await axios.get(ENDPOINT + "?q=" + string + "&api_key=" + API_KEY);
    return resp.data
}
