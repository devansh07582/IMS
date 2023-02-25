  // example route that requires the "admin" role

  const {checkRole} = require('../middleware/check-role');


  app.get("/admin", checkRole("admin"), function(req, res) {
    res.send("Welcome, admin!");
  });

  let signin = ()=>{

  }

  module.exports ={
    getEnquiries,
    postEnquiries
}