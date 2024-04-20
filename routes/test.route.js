const {
    addTest,
    getAllTests
  } = require("../controllers/test.controller");
  
  const router = require("express").Router();
  
  //register
  router.post("/addTest", addTest);
  router.get("/getAll", getAllTests);
  module.exports = router;
