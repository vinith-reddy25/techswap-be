var express = require("express");
var router = express.Router();
var User = require('../models/user')
/* GET users listing. */
router.get("/", function (req, res, next) {
  const {mobile} = req.body
  User.find({mobile}).exec().then(result => {
    console.log("result after success storing",result);
    res.status(200).send(result)
  }).catch(error => {
    console.log("error in storing the info",error)
    res.status(404).send(error)
  })
});
router.post("/register", function (req, res, next) {
  const {name,email,mobile,city} = req.body
  const user = new User();
  user.name = name;
  user.email = email;
  user.mobile = mobile;
  user.city = city;
  console.log("user",user)
  user.save().then(result => {
    console.log("result after success storing",result);
    res.status(200).send(result)
  }).catch(error => {
    console.log("error in storing the info",error)
    res.status(404).send(error)
  })
});

module.exports = router;
