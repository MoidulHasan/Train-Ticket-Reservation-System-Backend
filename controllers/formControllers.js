// Dependencies
const formData = require('../models/formData')

// Module scafolding
const form = {};

//  10 digit random number generator
const randomNumber = () => {
    return Math.floor(Math.random() * 10000000000);
}

form.saveData = async (req, res, next) => {
    try {
        // 1) validate user input
        const Name =
            typeof req.body.Name === "string" && req.body.Name.length > 0 ?
                req.body.Name :
                false;

        const Gender =
            typeof req.body.Gender === "string" && req.body.Gender.length > 0 ?
                req.body.Gender :
                false;


        const From =
            typeof req.body.From === "string" &&
                req.body.From.length > 0 ?
                req.body.From :
                false;


        const To =
            typeof req.body.From === "string" &&
                req.body.From.length > 0 ?
                req.body.To :
                false;

        const Date =
            typeof req.body.Date === "string" && req.body.Date.length > 0 ?
                req.body.Date :
                false;

        const Time =
            typeof req.body.Time === "string" && req.body.Time.length > 0 ?
                req.body.Time :
                false;

        const Price =
            typeof req.body.Price === "number" ?
                req.body.Price :
                false;

        const Note =
            typeof req.body.Note === "string" && req.body.Note.length > 0 ?
                req.body.Note :
                false;

        if (Name && From && To && Date && Time && Price && Note) {

            // 2) check and response if user exist
            const userStatus = await formData.findOne({ Name });
            if (userStatus) {
                res.status(400).json({
                    status: "Bad Request",
                    message: "This name already exists.",
                });
            } else {
                // 3) create application object
                const applicationObj = {
                    Name,
                    Gender,
                    From,
                    To,
                    Date,
                    Time,
                    Price,
                    Note
                };

                // 4) save application object to database
                const application = await formData.create(applicationObj);

                // 5) check and response success if application is inserted to database
                if (application) {

                    res.status(201).json({
                        status: "success",
                        message: `Your reservation ID is: ${randomNumber()}`
                    });
                } else {
                    // 6) if user is not inserted
                    res.status(500).json({
                        status: "server error",
                        message: "There is an internal server error, please try agein letter.",
                    });
                }
            }
        } else {
            // console.log(Name, From, To, Date, Time, Price, Note);
            const err = {
                statusCode: 400,
                status: "bad request",
                message: "You have problem with your input data"
            };
            next(err);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "server error",
            message: "There is an internal server error, please try agein letter.",
        });
    }
};


module.exports = form;