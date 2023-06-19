const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(" ")[1]; // Fix typo: use 'split' instead of 'spilt'

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ // Change status code to 401 for authentication failure
          message: 'Auth Failed',
          success: false
        });
      } else {
        req.body.userId = decode.id; // Use assignment operator '=' instead of ':' for assigning value to req.body.userId
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: 'Auth Failed',
      success: false
    });
  }
};
