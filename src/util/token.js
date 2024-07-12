const jwt = require('jsonwebtoken');

async function checkToken (token, id, key){
    jwt.verify(token, key, (err, decoded) => {

})};

async function setToken (id, key) {
    console.log("id: "+id);
    if(id){
        return jwt.sign({id}, key, {expiresIn: 28800});
    }
    return false;
}

module.exports = {
    //checkToken,
    setToken
}