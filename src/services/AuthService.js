import axios from "axios";
import LocalStorageUtil from "../utils/LocalStorageUtil";

const AuthService = (function () {
  const _signin = async (credentials) => {
    const response = await axios.post(
      "http://localhost:8080/api/auth/signin",
      credentials
    );

    if (!response) {
      console.log("Bir hata oluştu");
      //ToDo: Display error message to user not just log it
      //Ex: https://www.npmjs.com/package/react-toastify
      return;
    }
    LocalStorageUtil.setToken(response.data.token);

    return response.data;
  };

  return {
    signin: _signin
  };
})();

export default AuthService;
