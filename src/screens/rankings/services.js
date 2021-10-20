import URL from "../../utils/endpoint";
import axios from "axios";

export const getUserInfoService = async (email) => {
  try {
    const res = await axios.post(`${URL}/api/member/getInfo`, {
      email,
    });
    return res.data;
  } catch (e) {
    return {};
  }
};

export const getUserContribService = async (email) => {
  try {
    const res = await axios.post(`${URL}/api/member/getContribution`, {
      email,
    });
    return res.data;
  } catch (e) {
    return res.data;
  }
};
