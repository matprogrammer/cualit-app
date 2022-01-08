export const setToken = (value) => sessionStorage.setItem('token', value);

export const getToken = async () => sessionStorage.getItem('token');
