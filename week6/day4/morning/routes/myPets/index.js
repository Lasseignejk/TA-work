const express = require("express");
const router = express.Router();
const { JayePets } = require("../../models");

router.get("/get_pets", async (req, res) => {
        const pets = await JayePets.findAll()
	res.send(pets);
});
router.post("/post_pets", async (req, res) => {
		const { name } = req.body;
		const newPet = await JayePets.create({
			name: name,
		});
		res.send(newPet);
	});

router.put("/put_pets", (req, res) => {
	res.send("/get_users");
});
router.delete("/delete_pets", async (req, res) => {
	    const {id} = req.params
        await JayePets.destroy({
        where: {
            id: id
        }
    })
	res.send("deleted");
});

module.exports = router;
