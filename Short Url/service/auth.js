// const sessionIdToUserIdMap = new Map();

// function setUser(id,user){
//     sessionIdToUserIdMap.set(id,user);
// }

// function getUser(id){
//     return sessionIdToUserIdMap.get(id);
// }

// module.exports = {
//     setUser,
//     getUser,
// };



//stateless authentication implementation using JWT
const jwt = require('jsonwebtoken');
const secret="6august2005";

function setUser(user){
    return jwt.sign({
        id: user._id,
        email: user.email,
    },secret);
}

function getUser(token){
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        console.error('JWT verification failed:', err.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};
