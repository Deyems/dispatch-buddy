import { login } from "../../api"

const { REACT_APP_AUTH_TOKEN } = process.env;

export const LoginAction = (payload) => async (dispatch) => {
        console.log(payload);

    const { data, error } = await login(payload);
if (data?.data?.success) {
  const user = {
    token: data?.data?.payload.token,
  };
  localStorage.setItem(REACT_APP_AUTH_TOKEN, user.token);
  dispatch({
    type: "LOGIN_USER_SUCCESS",
    payload: user,
  });
  alert("Successful");
} else if (!data?.data?.success) {
  const message = data?.data?.message;
  dispatch({
    type: "LOGIN_USER_FAILURE",
    payload: message,
  });
  alert("Failed");
} else {
  alert(error?.message);
}


}