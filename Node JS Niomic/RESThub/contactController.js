
Contact = require("./contactModel");
// Handle index action
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "contact retrived successfully",
            data: contacts
        })
    });
};

//handle create contact
exports.new = function (req, res) {
    let contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            message: "new contact created",
            data: contact
        })
    })
}

//handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            message: "contact detail loading...",
            data: contact
        })
    })
}

//handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                })
            }
            res.json({
                message: "contact info update",
                data: contact
            });
        });
    });
};

///handle delete contact info
exports.delete = function (req,res) {
    Contact.remove({
        _id : req.params.contact_id
    },function (err,contact){
        if(err){
            res.send(err)
        }
        res.json({
            status : "Success",
            message : "delete Contact Succes"
        })
    })
}


