const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  let token = req?.headers?.token?.split(" ")[1];
    try {
      let decode = await jwt.verify(token, process.env.SECRET_KEY);
      req.body.email = decode.email;
      console.log(decode.email);
      next();
    } catch (e) {
      console.log(e);
      res.send("User is not logged in");
    }
  
};

module.exports = {
  authentication
};
