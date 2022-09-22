import axios from "axios";
const {REACT_APP_AUTH_TOKEN} = process.env;

export const apiGet = (path, conf = {}, auth = "admin") => {
    const config = {
      ...conf,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    if (!auth) {
      config.headers = {};
    }
    return axios.get(`${process.env.REACT_APP_BASE_URL}${path}`, config);
  };

export const apiPost = (path, data, { headers, conf }, auth = true)  => {
    const Authorization = auth && `Bearer ${JSON.parse(localStorage.getItem(REACT_APP_AUTH_TOKEN))?.token}`;
    const config = {
        ...conf,
        headers: {
        Authorization,
        ...(headers ? headers : {}),
        },
    };
return axios.post(`${process.env.REACT_APP_BACKEND_URL}${path}`, data, config);

//     const Authorization = auth && `Bearer ${process.env.PAYSTACK_SECRET_KEY}`;
//   const config = {
//     conf,
//     headers: {
//       Authorization,
//       ...(headers ? headers : {} ),
//     },
//   };
//   return axios.post(`${path}`, data, config);
};
  export const apiPut = (path, data, conf = {}) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      ...conf,
    };
    return axios.put(`${process.env.REACT_APP_BASE_URL}${path}`, data, config);
  };
  export const apiPatch = (path, data, conf = {}) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      ...conf,
    };
    return axios.patch(`${process.env.REACT_APP_BASE_URL}${path}`, data, config);
  };
  export const apiDelete = (path, conf = {}) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      ...conf,
    };
    return axios.delete(`${process.env.REACT_APP_BASE_URL}${path}`, config);
  };

//   width: 40%;
//     min-height: 40vh;


// outer
// border: 1px solid red;
//     position: fixed;
//     top: 40px;
//     width: 100%;
//     left: 10px;
//     /* background: yellow; */
//     display: flex;
//     justify-content: center;
//     align-items: center;