export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const LoginAStart = (adminCredentials) => ({
  type: "LOGIN_STARTA",
});

export const LoginASuccess = (admin) => ({
  type: "LOGIN_SUCCESSA",
  payload: admin,
});

export const LoginAFailure = () => ({
  type: "LOGIN_FAILUREA",
});

export const LogoutA = () => ({
  type: "LOGOUTA",
});
