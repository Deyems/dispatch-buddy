import axios from "axios";
import qs from 'qs';

export const login = async ({ grant_type, email, password }) => {
  try {
     const basicAuth = "Basic " + window.btoa("web-client:password");
     let data = qs.stringify({
      'grant_type': grant_type,
      'username': email,
      'password': password
     });
     let config = {
       method: 'post',
       url: `${process.env.REACT_APP_BASE_LOGIN_URL}/oauth/token`,
       headers: {
        'Authorization': basicAuth,
        'Content-Type': 'application/x-www-form-urlencoded'
       },
       data : data
     };
     
     return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });

  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const signup = async ({
  email,
  password,
  phoneNumber,
  dateOfBirth,
  name,
}) => {
  try {
    const data = JSON.stringify({
      "name": name,
      "email": email,
      "phoneNumber": phoneNumber,
      "password": password,
      "dateOfBirth": dateOfBirth,
      "authProvider": "EMAIL"
    });
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/signup`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });

    // const response = await axios.post(
    //   "api/user/signup",
    //   JSON.stringify({
    //     email,
    //     password,
    //     phoneNumber,
    //     dateOfBirth,
    //     authProvider: "EMAIL",
    //   }),
    //   {
    //     headers: { "Content-type": "application/json" },
    //     withCredentials: true,
    //   }
    // );
    // return {
    //   data: response,
    //   error: null,
    // };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const verify = async ({ username, otp }) => {
  //Username is an email
  try {
    const data = JSON.stringify({
      "username": username,
      "otp": otp,
    });
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/verify`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const validate = async (username) => {
  console.log(username);
  try {
    var data = JSON.stringify({
      "username": username
    });
    
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/validate`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config)
    .then( (response) => {
      return response;
    })
    .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
    })


    // const response = await axios.post(
    //   "api/user/validate",
    //   JSON.stringify({
    //     username,
    //   }),
    //   {
    //     headers: { "Content-type": "application/json" },
    //     withCredentials: true,
    //   }
    // );
    // return {
    //   data: response,
    //   error: null,
    // };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const reset = async (
  username = "net.rabiualiyu@gmail.com",
  { password }
) => {
  // console.log(username, password)
  try {
    const response = await axios.post(
      "api/user/password-reset",
      JSON.stringify({
        username,
        password,
      }),
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );
    return {
      data: response,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const updatePassword = async (formdata, email) => {
  try {
    const data = JSON.stringify({
      "username": email,
      "password": formdata.new_password
    });
    
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/password-reset`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });

  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export const acceptRide = async (id, reason) => {
  try {
    const data = JSON.stringify({
      id,
      reason,
    });

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/rider/reject-request`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config)
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        console.log(error, "do we have error");
        return {
          data: null,
          error,
        };
      });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};
export const rejectRide = async (id, reason) => {
  try {
    const data = JSON.stringify({
      id,
      reason
    });

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/rider/reject-request`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config)
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        console.log(error, "do we have error");
        return {
          data: null,
          error,
        };
      });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const updateProfile = async(username, country, city, gender, dob) => {
  try {
    const data = JSON.stringify({
      "name": username,
      "country": country,
      "city": city,
      "gender": gender,
      "dateOfBirth": dob.replace('-', '/')
    });

    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/update`,
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });
  
  } catch (err) {
    console.log(err, 'at update route...');
    return {
      data: null,
      error: err,
    };
  }
}

export const getProfile = async (id) => {
  try {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND_URL}/user/get-by-id/${id}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export const getAllRequests = async (
 page=0
) => {
  try {
    let config = {
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND_URL}/rider/requests?page=${page}`,
      headers: {
       "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};

export const getAllRiders = async (
  page=0, pickup="Ajah", destination="Ikeja"
 ) => {
   try {
    let config = {
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND_URL}/rider/search?page=${page}&pickup=${pickup}&destination=${destination}`,
      headers: { }
    };
    
    return axios(config)
     .then( (response) => {
       console.log(response, 'respond....');
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });

   } catch (err) {
     return {
       data: null,
       error: err,
     };
   }
 };

export const addLocations = async (locations) => {
  try {
    const data = JSON.stringify({
      "locations": locations
    })
    
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND_URL}/rider/add-locations`,
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      data : data
    };

    return axios(config)
     .then( (response) => {
        return response;
      })
     .catch(function (error) {
      console.log(error, 'do we have error');
      return {
        data: null,
        error,
      }
     });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export const requestRider = async (formData, otherDetails) => {
  try {
    const data = JSON.stringify({
      "name": formData.name,
      "email": formData.email,
      "phone": formData.mobileNumber,
      "pickupLocation": otherDetails.pickup,
      "destination": otherDetails.dest,
      "riderUuid": otherDetails.uuid
    });

    const config = {
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/rider/request`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config)
      .then((response) => {
        return response;
      })
      .catch(function (error) {
        console.log(error, "do we have error");
        return {
          data: null,
          error,
        };
      });
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
};