require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3003
const connectionCreds = require('./databasecreds')

app.use(express.json())

// CREATE 
app.post("/create_user", (req, res) => {
    const {username, email, password} = req.body
    connectionCreds.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

        const sqlQuery = `INSERT INTO users(username,email,password) VALUES ($1, $2, $3);`;
        const values = [username,email,password]
		client.query(sqlQuery,values, (err, result) => {
			release();
			if (err) {
				console.error("Error in executing the query: ", err);
				res.status(500).send("Internal server error");
				return;
			}
			res.send(result);
		});
	});
})


// READ
app.get("/get_all_users", (req,res) => {
    // this route will return either an error or the client, which is where we can run our queries. 
    connectionCreds.connect((err,client,release) => {
        if(err){
            // if we get an error, release the connection. stop the connection.
            release()
            console.error("Error connecting to database: ", err)
            res.status(500).send("Internal server error")
            return
        }
        client.query(`SELECT * FROM users;`, (err,result) => {
            release()
            if(err){
                console.error("Error in executing the query: ", err)
                res.status(500).send("Internal server error")
                return
            }
            res.send(result.rows)
        })
    })
})

// UPDATE
app.post("/update_username", (req, res) => {
	const { username, newUserName } = req.body;
	connectionCreds.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

        const sqlQuery = `UPDATE users SET username=$1 WHERE username=$2`
		const values = [newUserName, username];
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

app.post("/update_email", (req, res) => {
	const { email, newEmail } = req.body;
	connectionCreds.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `UPDATE users SET email=$1 WHERE email=$2`;
		// const sqlQuery = `INSERT INTO users(username,email,password) VALUES ($1, $2, $3);`;
		const values = [newEmail, email];
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

// DELETE
app.post("/delete_user", (req, res) => {
	const { email } = req.body;
	connectionCreds.connect((err, client, release) => {
		if (err) {
			// if we get an error, release the connection. stop the connection.
			release();
			console.error("Error connecting to database: ", err);
			res.status(500).send("Internal server error");
			return;
		}

		const sqlQuery = `DELETE FROM users WHERE email=$1`;
		// const sqlQuery = `INSERT INTO users(username,email,password) VALUES ($1, $2, $3);`;
		const values = [email];
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


app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))