let jwt=require("jsonwebtoken");

module.exports.adduser = async (body_data) => {
  return new Promise((resolve, reject) => {
    console.log(body_data);
    db.user
      .create({
        ...body_data,
        token:jwt.sign(body_data,"123456789"),
      })
      .then((data) => {
        resolve("data added successfully");
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
