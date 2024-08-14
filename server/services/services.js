exports.signUp = (req, res) => res.render("signup");

const axios = require("axios");
exports.displayUsers = (req, res) => {
  axios
    .get("http://localhost:7000/api/signup/")
    .then(function (controllerData) {
      console.log(
        "Fetching data from controller to services",
        controllerData.data
      );
      res.render("displayUsers", { userDatas: controllerData.data });
    });
};
