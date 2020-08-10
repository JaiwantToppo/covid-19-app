import axios from 'axios';
import parsers from "./parsers";

async function usStats() {
    const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
    const [stats] = response.data;

    return parsers.usStats(response.data)

}

export default {
    usStats,
}