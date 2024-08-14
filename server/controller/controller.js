const dbFile = require("../model/model");

exports.createUser = (req, res) => {
  const check = new dbFile({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });
  check.save().then((check) => {
    console.log(check);
    res.redirect("/user-credentials");
  });
};

exports.fetchUser = (req, res) => {
  dbFile.find().then((userDatas) => {
    console.log("Data fetching from db to controller", userDatas);
    res.send(userDatas);
  });
};
