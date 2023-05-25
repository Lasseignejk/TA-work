const express = require("express");
const app = express();
const {Customers, Transactions} = require("./models");
const {Op} = require("sequelize");
const PORT = 3001;

app.use(express.json())


app.get("/get_all_customers", async (req, res) => {
	const customers = await Customers.findAll();
	res.send(customers);
});

// delete a customer by id, only ONE customer 
app.post("/delete_one/:id", async (req, res) => {
    const {id} = req.params;
    const customerToDelete = await Customers.destroy({
        where: {
            id: id,
        }
    })
    res.send("deleted")
})

// insert customers
// app.post("/create_customer", async (req,res) => {
//     const {name, accountType, ssn} = req.body
//     const newCustomer = await Customers.create({name:})
// })

// find all customers that start with J
// [Op.like]
app.get("/get_all_customers_with_j", async (req, res) => {
	const customers = await Customers.findAll({
        where: {
            name: {
                [Op.startsWith]: 'J'
            }
        }
    });
	res.send(customers);
});


// update customers accountTypes whose names start with "J"
app.get("/update_accountType", async (req, res) => {
const customers = await Customers.update(
    {accountType: 'savings'},
    {where: {
        name: {
            [Op.startsWith]: 'J'
        }
    }});
	res.send(customers);
});






app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
