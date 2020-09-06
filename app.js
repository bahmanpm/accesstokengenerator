const jwt = require("jsonwebtoken");
const prompt = require("prompt");

const profileInfo = [
  {
    name: "full_name",
    validator: /^[a-zA-Z\s\-]+$/,
    warning: "full_name must be only letters, spaces, or dashes",
  },
  {
    name: "mobile_number",
    validator: /^[0-9]+$/,
    warning: "mobile_number must be only digits",
  },
  {
    name: "password",
    hidden: true,
  },
];

prompt.start();

prompt.get(profileInfo, function (err, result) {
  if (err) {
    return onErr(err);
  }
  var accessTokenPayload = { sessionid: "abcd", profile: profileInfo };
  var accessToken = jwt.sign(accessTokenPayload, "secrettoken", {
    expiresIn: 10000,
  });
  console.log("Entered Info Are:");
  console.log("  Full Name: " + result.full_name);
  console.log("  Mobile: " + result.mobile_number);
  // console.log("  Password: " + result.password);
  console.log("Generted Access Token is:");
  console.log(accessToken);
});

function onErr(err) {
  console.log(err);
  return 1;
}
