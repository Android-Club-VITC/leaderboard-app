import URL from "../../utils/endpoint";
import axios from "axios";

export const verifyEmailService = async (email) => {
  try {
    await axios.post(`${URL}/api/auth/verifyEmail`, {
      email,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const getAllContributionService = async () => {
  try {
      const res = await axios.get(`${URL}/api/public/getAllContribution`);
      return res.data
  } catch(e) {
      console.log(e);
      return [];
  }
}