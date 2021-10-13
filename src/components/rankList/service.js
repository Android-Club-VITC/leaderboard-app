import URL from "../../utils/endpoint";
import axios from "axios";

export const getAllContribution = async () => {
    try {
        const res = await axios.get(`${URL}/api/member/getAllContribution`);
        return res.data
    } catch(e) {
        console.log(e);
        return [];
    }
}