const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('type')
        .exists()
        .not()
        .withMessage("You must enter a type")
        .isString(),
    check('brand')
        .exists()
        .withMessage("You must enter a brand")
        .isLength({min: 1}, {max: 15})
        .not()
        .isString(),
    check('image')
        .isString(),
    check('status')
        .exists()
        .not()
        .withMessage("You must enter a status")
        .isString(),
    check('active')
        .exists()
        .withMessage("You must enter a active")
        .not()
        .isString(),
    check('price')
        .isLength({min: 1})
        .withMessage("You must enter a price")
        .isNumeric(),
    check('description')
        .exists()
        .withMessage("You must enter a description")
        .not()
        .isLength({min: 30}, {max:500})
        .isString(),
    check('fuelConsumption')
        .exists()
        .withMessage("You must enter a fuelConsumption")
        .not()
        .isLength({min: 3}, {max: 15})
        .isString(),
    check('location')
        .exists()
        .withMessage("You must enter a location")
        .not()
        .isLength({min: 10}, {max: 100})
        .isString(),
    check('color')
        .exists()
        .withMessage("You must enter a color")
        .not()
        .isLength({min: 3}, {max: 18})
        .isString(),
    check('doors')
        .exists()
        .withMessage("You must enter a doors")
        .not()
        .isNumeric(),
    check('model')
        .exists()
        .withMessage("You must enter a model")
        .not()
        .isLength({min: 2}, {max:20})
        .isString(),
    check('category')
        .exists()
        .withMessage("You must enter a category")
        .not()
        .isLength({min: 3}, {max:15})
        .isString(),
    check('fuelType')
        .exists()
        .withMessage("You must enter a fuelType")
        .not()
        .isString(),
    check('transissionType')
        .exists()
        .withMessage("You must enter a transissionType")
        .not()
        .isString(),
    check('year')
        .exists()
        .not()
        .isLength({min: 4}, {max:5})
        .isNumeric()
        .withMessage("You must enter a year"),
    check('mileage')
        .exists()
        .not()
        .isLength({min: 1}, {max:7})
        .isString()
        .withMessage("You must enter a mileage"),
    (req, res, next) => {
        validateResult(req, res, next)
        }
]


module.exports = { validateCreate }