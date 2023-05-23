require('dotenv').config()
const express = require('express');
const app = express();
const port = 3004; 
const { Pool } = require('pg');

const pool = new Pool({
	host: "localhost",
	port: 5432,
	database: "restaurant",
	user: "postgres",
	password: process.env.DB_PASSWORD,
});

app.use(express.json());

// --------------------- ORDER ROUTES ---------------------
// ------------ READ ALL ------------
app.get("/get_all_orders", (req, res) => {
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}
		client.query(`SELECT * FROM orders;`, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result.rows);
		});
	});
});
// ------------ READ ONE ------------
app.get("/get_order/:id", (req, res) => {
	const { id } = req.params;
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal service error");
			return;
		}
		const sqlQuery = `SELECT * FROM orders WHERE id=$1;`;
		const values = [id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result.rows);
		});
	});
});
// ------------ CREATE ONE ------------
app.post("/create_order", (req, res) => {
    const { customerId, recipeId } = req.body
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}
		const sqlQuery = `INSERT INTO orders(customer_id,recipe_id) VALUES ($1,$2);`;
		const values = [customerId, recipeId];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});
// ------------ UPDATE ONE ------------
app.post("/update_order/:id", (req, res) => {
	const { id } = req.params;
	const { newCustomer, newRecipe } = req.body;
	pool.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `UPDATE orders SET customer_id=$1,recipe_id=$2 WHERE id=$3`;
		const values = [newCustomer, newRecipe, id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});
// ------------ DELETE ONE ------------
app.post("/delete_order/:id", (req, res) => {
	const { id } = req.params;
	pool.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `DELETE FROM orders WHERE id=$1`;
		const values = [id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});






// --------------------- RECIPE ROUTES ---------------------
// ------------ READ ALL ------------
app.get("/get_all_recipes", (req, res) => {
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}
		client.query(`SELECT * FROM recipes;`, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result.rows);
		});
	});
});
// ------------ READ ONE ------------
app.get("/get_recipe/:id", (req, res) => {
    const {id} = req.params;
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal service error");
			return;
		}
                const sqlQuery = `SELECT * FROM recipes WHERE id=$1;`;
				const values = [id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result.rows);
		});
	});
});
// ------------ CREATE ONE ------------
app.post("/create_recipe", (req, res) => {
    const {recipeName} = req.body
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}
		const sqlQuery = `INSERT INTO recipes(recipe_name) VALUES ($1);`;
		const values = [recipeName];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});
// ------------ UPDATE ONE ------------
app.post("/update_recipe/:id", (req, res) => {
	const { id} = req.params
    const {newRecipeName} = req.body
	pool.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `UPDATE recipes SET recipe_name=$1 WHERE id=$2`;
		const values = [newRecipeName, id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});
// ------------ DELETE ONE ------------
app.post("/delete_recipe/:id", (req, res) => {
	const {id} = req.params
	pool.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `DELETE FROM recipes WHERE id=$1`;
		const values = [id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});







// --------------------- CUSTOMER ROUTES ---------------------
// ------------ READ ALL ------------
app.get("/get_all_customers", (req, res) => {
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}
		client.query(`SELECT * FROM customers;`, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result.rows);
		});
	});
});
// ------------ READ ONE ------------
app.get("/get_customer/:id", (req, res) => {
    const {id} = req.params;
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal service error");
			return;
		}
                const sqlQuery = `SELECT * FROM customers WHERE id=$1;`;
				const values = [id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result.rows);
		});
	});
});
// ------------ CREATE ONE ------------
app.post("/create_customer", (req, res) => {
    const {customerName} = req.body
	pool.connect((err, client, release) => {
		if (err) {
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}
		const sqlQuery = `INSERT INTO customers(customer_name) VALUES ($1);`;
		const values = [customerName];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});
// ------------ UPDATE ONE ------------
app.post("/update_customer/:id", (req, res) => {
	const { id} = req.params
    const {newCustomerName} = req.body
	pool.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `UPDATE customers SET customer_name=$1 WHERE id=$2`;
		const values = [newCustomerName, id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});
// ------------ DELETE ONE ------------
app.post("/delete_customer/:id", (req, res) => {
	const {id} = req.params
	pool.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `DELETE FROM customers WHERE id=$1`;
		const values = [id];
		client.query(sqlQuery, values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});