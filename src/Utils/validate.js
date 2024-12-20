/* eslint-disable no-useless-escape */
const checkValidData = (email, password, username) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const fullNameRegex = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)* [a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/.test(username);
    return {emailRegex, passwordRegex, fullNameRegex}
}

export default checkValidData