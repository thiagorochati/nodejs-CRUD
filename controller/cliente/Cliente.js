const express = require("express");
const router = express.Router();

router.get("/cliente", function(req, res) {
    res.render('cliente/index')
});

router.get("/cliente/new", function(req, res) {
    res.render('cliente/new')
}); 

module.exports = router;