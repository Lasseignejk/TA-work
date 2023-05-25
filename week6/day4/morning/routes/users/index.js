const express = require("express")
const router = express.Router()
const {Jaye} = require("../../models")

// get all users
router.get("/get_users", async (req, res) => {
    const users = await Jaye.findAll()
	res.send(users);
});

// create user
router.post("/post_users", async (req, res) => {
    const {name} = req.body
    const newUser = await Jaye.create({
        name: name
    })
	res.send(newUser);
});

// update user
router.put("/put_users/:id", async (req, res) => {
    const {id} = req.params
    const name = req.body.name
    const updatedUser = await Jaye.update({name: name}, {
        where: {
            id: id
        }
    })
	res.send(updatedUser);
});

// delete
router.delete("/delete_users/:id", async (req, res) => {
    const {id} = req.params
    await Jaye.destroy({
        where: {
            id: id
        }
    })
	res.send("deleted");
});

module.exports = router
