import jwt_decode from "jwt-decode";
import moment from "moment";

const { REACT_APP_AUTH_TOKEN } = process.env;

const tokenStatus = () => {
  const token = localStorage.getItem(REACT_APP_AUTH_TOKEN);
  if (token) {
    const decoded =  jwt_decode(token);
    const currDate = +moment().format("X");
    if (currDate >= decoded.exp) {
      localStorage.clear(REACT_APP_AUTH_TOKEN);
      window.location.replace("/login");
      window.stop();
      return null;
    }
    return decoded;
  } else {
    localStorage.clear(REACT_APP_AUTH_TOKEN);
    window.location.replace("/login");
    window.stop();
    return null;
  }
};

export default tokenStatus;
