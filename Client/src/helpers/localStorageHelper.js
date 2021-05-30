export const checkIfAccesTokenExist = () => {
  return localStorage.getItem("AT") !== null;
};

export const getAccesToken = () => {
  return localStorage.getItem("AT");
};

export const setAccesToken = (token) => {
  return localStorage.setItem("AT", token);
};

export const removeAccessToken = () => {
  return localStorage.removeItem("AT");
};
