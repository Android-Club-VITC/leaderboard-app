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

export const editSocialsService = async (email, socials) => {
  try {
    const res = await axios.post(`${URL}/api/member/editSocials`, {socials, email});
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const editNameService = async (email, name) => {
  try {
    const res = await axios.post(`${URL}/api/member/editName`, {name, email});
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};