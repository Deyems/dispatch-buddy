import {
  SignUp,
  Login,
  Homepage,
  Verification,
  ForgotPassword,
  CreateNewPassword,
  Profile,
  
} from "../Pages";

const routes = [
  { path: "/signup", component: SignUp },
  { path: "/login", component: Login },
  { path: "/", component: Homepage },
  { path: "/verification", component: Verification },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/new-password", component: CreateNewPassword },
  { path: "/profile", component: Profile },

];

export { routes };
