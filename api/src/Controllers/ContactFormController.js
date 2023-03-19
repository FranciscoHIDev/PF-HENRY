const contactFormSchema = require("../Models/ContactForm.js");
const { eMail2 } = require("../Nodemailer/NodemailerContactForm.js");
/**
 * It gets all the forms from the database and returns them in the response
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const routerGetContactForm = async (req, res) => {
  const { name } = req.query;
  const contForm = await contactFormSchema.find();
  try {
    if (name) {
      let contaName = contForm.filter((con) =>
        con.name.toLowerCase().includes(name.toLowerCase())
      );
      carsName.length
        ? res.status(200).json(contaName)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(contForm);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
};

/**
 * It takes the request body, validates it, creates a new form object, checks if the user is an admin or
 * superAdmin, and if so, saves the form object to the database
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns the contactFormSchema.
 */
const routerPostContactForm = async (req, res) => {
  // validateCreate;
  const carForm = contactFormSchema(req.body);

  carForm
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
    eMail2(carForm.emailAddress);
};

/**
 * It finds a form by its id and populates the review field with the description and rate fields
 * @param req - The request object.
 * @param res - The response object.
 */
const routerByidForm = (req, res) => {
  // const { id } = req.params;
  contactFormSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};
/**
 * It gets the email from the body of the request, then it finds the user in the database, then it gets
 * the id from the params, then it gets the rest of the data from the body of the request, then it
 * checks if the user exists and if the user is valid, then it checks if the user is an admin or a
 * superAdmin, then it updates the form in the database, then it populates the review, then it returns
 * the data or an error
 * @param req - The request object.
 * @param res - The response object.
 * @returns the updated  information.
 */

const routerPutContactForm = async (req, res) => {
  const { id } = req.params;

  const { name, lastname, emailAddress, message, active } = req.body;

  contactFormSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastname,
          emailAddress,
          message,
          active,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

/**
 * It takes the id of a form and the email of a user and if the user is a superAdmin and the user's
 * loading is valid, it will update the form's active status to the value of the active key in the
 * request body
 * @param req - The request object.
 * @param res - The response object.
 * @returns the contactFormSchema.updateOne method.
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
  routerPutContactForm,
  routerDeleteContactForm,
};
