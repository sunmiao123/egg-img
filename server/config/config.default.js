exports.keys = "11111111";

module.exports.bodyParser = {
  enable: true,
  formLimit: "100kb",
  jsonLimit: "100kb"
};
module.exports.multipart = {
  mode: "file"
};

module.exports.security = {
  csrf: false
};
