const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass

//middleware to check if the dish has a name
//needed in order to move onto 'create()' and 'update()'
function bodyHasName(req, res, next) {
    const { data: { name } = {} } = req.body
    if (name) {
        res.locals.name = name
        return next()
    }else{ 
        next({
            status: 400, message: `A 'name' property is required.`,})
    }
}

//middleware to check if dish has description
//needed in order to move onto 'create()' and 'update()'
function bodyHasDescription(req, res, next) {
    const { data: { description } = {} } = req.body
    if(description) {
        res.locals.description = description
        return next() 
    }else {
        next({status: 400, message: `A 'description' property is required.`,}) 
    }
}

//middleware to check if dish has a price
//needed in order to move onto 'create()' and 'update()'
function bodyHasPrice(req, res, next) {
    const { data: { price } = {} } = req.body
    if (price) {
        res.locals.price = price
        return next() 
    }else {
        next({status: 400, message: `A 'price' property is required.`,})
    };
}

//middleware to check if dish price provided is valid
//needed to move onto 'create'
function bodyHasValidPrice(req, res, next) {
    const { data: { price } = {} } = req.body
    if (price > -1) {
        res.locals.price = price
        return next() 
    }else {
        next({status: 400, message: `price cannot be less than 0`,})
    } 
}

//middleware to check if dish price is valid for 'update()'
//needed to move onto 'update'
function bodyHasValidPriceforUpdate(req, res, next) {
    const { data: { price } = {} } = req.body
    if (res.locals.price <= 0 || typeof res.locals.price !== "number") {
        next({status: 400, message: `price must be an integer greater than $0`,})
    } else {
        return next()
    }
}

//middleware to check if dish has an image property
//needed to move onto 'create() and 'update()'
function bodyHasImg(req, res, next) {
    const { data: { image_url } = {} } = req.body
    if (image_url) {
        res.locals.image_url = image_url
        return next()
    } else {
        next ({status: 400, message: `An 'image_url' property is required.`,})
    }
}

//middleware to check if the dish exists 
//dish id is needed in order to move onto 
//'read()' and 'update()'
function dishExists(req, res, next) {
    const matchingDish = dishes.find((dish) => dish.id === dishId)
    if (matchingDish) {
        res.locals.matchingDish = matchingDish
        return next()
    }
    next ({status: 400, message: `Dish id not found: ${dishId}`,})
}

//middleware for checking if the data id matches it's parameters id
// in order to move onto the 'update' handler

 

module.exports = {
    bodyHasName,
    bodyHasDescription,
    bodyHasPrice,
};