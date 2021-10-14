import URL from "../../utils/endpoint";
import axios from "axios";

export const getUserInfoService = async (email) => {
  try {
    const res = await axios.post(`${URL}/api/member/getInfo`, { email });
    return res.data;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const editSocialsService = async (obj) => {
  try {
    const res = await axios.post(`${URL}/api/member/editSocials`, obj);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
