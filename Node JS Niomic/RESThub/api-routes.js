// Api-Routes.js

// Import express routes
const express = require("express");
const router = express.Router();

// Set Default api respond
router.get('/',(req,res)=>{
    res.json({
        status : "API its working",
        message : "Welcome to resthub Backend Apps",
    });
});

// Import contact controller
const contactController = require("./contactController");

//Contact Routes
router.route('/contacts')
.get(contactController.index)
.post(contactController.new)

router.route("contacts/:contact_id")
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete)
// Export API routes
module.exports = router;


