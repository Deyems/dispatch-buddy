const getUser = (email) => {
    return localStorage.getItem("user");
};
export default getUser