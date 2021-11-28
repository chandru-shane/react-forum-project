
const loginHandler = (username_or_email, password) => { }

const registerHandler = (username, email, password) => { }



const getToken = () => {
    return localStorage.getItem('token');
}

const setToken = (token) => {
    return localStorage.setItem('token',token)
}

const checkToken = () => {

}

const clearAuthentication = ()=> {
    localStorage.setItem('auth', false)
    localStorage.removeItem('token')
}

export { getToken, checkToken,setToken, loginHandler, registerHandler, clearAuthentication};