const router = require("express").Router();

// TODO: Implement the /orders routes needed to make the tests pass

router
.route("/")
// to make a GET request that uses list()
.get(controller.list)
// make POST request to create new dish using create()
.post(controller.create)
// for request types that aren't available to use on dish
.all(methodNotAllowed)

router
.route("/:orderId")
// to make a GET request that uses read()
.get(controller.read) 
// makes PUT request that uses update() to update a dish
.put(controller.update)
// for request types that aren't available to use on dish
.delete(controller.delete) //  
.all(methodNotAllowed)


module.exports = router;