import URL from "../../utils/endpoint";
import axios from "axios";
import { getToken } from "../../service/asyncStorage";

export const getAllContribution = async () => {
    try {
        const t = await getToken();
        console.log(t);
        const res = await axios.get(`${URL}/api/member/getAllContribution`,{
            headers: {
                "AC_TOKEN": t
            }
        });

        return res
    } catch(e) {
        console.log(e);
        return [];
    }
}