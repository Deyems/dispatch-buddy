import { createContext, useReducer, useContext } from "react";
import { tokenStatus, setAuthToken, setUser } from "../utils";

export const loadUser = (token) => {
  const decoded = tokenStatus();

  if (decoded) {
    setAuthToken(token);
  }
  return {
    username: decoded?.name,
    isAuthenticated: true,
    loading: false,
    error: null,
    dp: decoded?.dp,
    accountType: decoded?.accountType,
    role: decoded?.role,
    contact: decoded?.phoneNumber,
    gender: decoded?.gender,
    id: decoded?.id,
    uuid: decoded?.uuid,
    city: decoded?.city,
    status: decoded?.status,
  };
};

const initialState = {
  username: "",
  isAuthenticated: false,
  loading: false,
  error: null,
  loggingIn: false,
  token: null,
  logginError: null,
  signupError: null,
  loadingDeliveries: false,
  loadingDeliveriesError: null,
  deliveries: [],
};
const AppReducer = (state, action) => {
  switch (action.type) {
    // USER
    case "SIGNUP_SUCCESS":
      setUser(action?.payload);
      return { ...state, username: action.payload };
    case "SIGNUP_FAILURE":
      return { ...state, signupError: action?.payload?.message };
    case "LOAD_USER":
      return { ...state, ...loadUser(action?.payload?.access_token) };
    case "LOGIN_START":
      return { ...state, loggingIn: true };
    case "LOGIN_SUCCESS":
      console.log(action.payload, 'at Success login.????');
      console.log(state, 'at success login');
      setAuthToken(action?.payload?.access_token);
      return { 
        ...state, 
        loggingIn: false,
        isAuthenticated: true,
        token: action?.payload?.access_token,
        username: action?.payload?.email
      };
    case "FORGOT_PASSWORD_SUCCESS":
      return { ...state, username: action.payload };
    case "LOGIN_FAILURE":
      return { 
        ...state,
        loggingIn: false,
        logginError: action?.payload?.message
    };
    case "LOGOUT":
      localStorage.removeItem('token');
      localStorage.removeItem("user");
      return {
        username: "",
        isAuthenticated: false,
        loading: false,
        error: null,
        loggingIn: false,
        token: null,
        logginError: null,
      };

    // DELIVERIES
    case "GET_DELIVERIES_START":
      return {
        ...state,
        loadingDeliveries: true,
      };
    case "GET_DELIVERIES_SUCCESS":
      return {
        ...state,
        loadingDeliveries: false,
        loadingDeliveriesError: null,
        deliveries: action.payload,
      };
    case "GET_DELIVERIES_ERROR":
      return {
        ...state,
        loadingDeliveries: false,
        loadingDeliveriesError: action.payload,
      };
    
    // SELECT RIDER
    case "GET_RIDER_START":
      return {
        ...state,
        loadingRider: true,
      };
    case "GET_RIDER_SUCCESS":
      console.log(action.payload, 'payload at rider success...');
      return {
        ...state,
        loadingRider: false,
        loadingRiderError: null,
        rider: action.payload,
      };
    case "GET_RIDER_ERROR":
      return {
        ...state,
        loadingRider: false,
        loadingRiderError: action.payload,
      };
      //Add locations
      case "ADD_LOCATION_START":
      return {
        ...state,
        addingLocation: true,
      };
      case "ADD_LOCATION_SUCCESS":
      console.log(action.payload, 'payload at adding location success...');
      return {
        ...state,
        addingLocation: false,
        loadingRiderError: null,
        addedLocations: action?.payload,
      };
      case "ADD_LOCATION_ERROR":
      return {
        ...state,
        addingLocation: false,
        addingLocationError: action?.payload,
      };
      case "UPDATE_PASSWORD_START": 
      return {
        ...state, updatingPassword: true,
      }
      case "UPDATE_PASSWORD_SUCCESS":
        return {
          ...state, updatingPassword: false, username: action?.payload?.email
        }
      case "UPDATE_PASSWORD_ERROR":
        return {
          ...state, updatingPassword: false,
          updatingPasswordError: true,
        }
    
      default:
      return state;
  }
};

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(context === undefined ){
    throw new Error("UseAuth must be used in an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {/* {console.log(state)} */}
      {children}
    </AuthContext.Provider>
  );
};
