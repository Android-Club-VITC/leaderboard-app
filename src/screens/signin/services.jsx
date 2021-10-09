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
