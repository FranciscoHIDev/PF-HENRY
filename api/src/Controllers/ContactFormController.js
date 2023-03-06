const contactFormSchema = require("../Models/ContactForm.js");



/**
 * It gets all the cars from the database and returns them in the response
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetContactForm = async (req, res) => {
    const { name } = req.query;
    const contForm = await contactFormSchema
        .find()
    try {
        if (name) {
        let carsName = contForm.filter((car) =>
        car.name.toLowerCase().includes(name.toLowerCase())
        );
        carsName.length
        ? res.status(200).json(carsName)
        : res.status(201).json("Not found");
        } else {
        res.status(200).json(contForm);
    }
        } catch (error) {
        res.send(`Error ${error}`);
    }
    };

/**
   * It takes the request body, validates it, creates a new car object, checks if the user is an admin or
   * superAdmin, and if so, saves the car object to the database
   * @param req - The request object. This object represents the HTTP request and has properties for the
   * request query string, parameters, body, HTTP headers, and so on.
   * @param res - The response object.
   * @returns the carSchema.
   */
const routerPostContactForm = async (req, res) => {
    // validateCreate;
    const carForm = contactFormSchema(req.body);

    carForm
      .save()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(500).json({ message: `${error}` }));

};

/**
   * It finds a car by its id and populates the review field with the description and rate fields
   * @param req - The request object.
   * @param res - The response object.
   */
const routerByidForm = (req, res) => {
    const { id } = req.params;
    contactFormSchema
      .findById(id)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(500).json({ message: `${error}` }));
  };

/**
   * It takes the id of a car and the email of a user and if the user is a superAdmin and the user's
   * loading is valid, it will update the car's active status to the value of the active key in the
   * request body
   * @param req - The request object.
   * @param res - The response object.
   * @returns the carSchema.updateOne method.
   */
const routerDeleteContactForm = async (req, res) => {
    const { active } = req.body;
    const { id } = req.params;

    contactFormSchema
    .updateOne({ _id: id }, { $set: { active } })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};
module.exports = {
    routerGetContactForm,
    routerPostContactForm,
    routerByidForm,
    routerDeleteContactForm,
};