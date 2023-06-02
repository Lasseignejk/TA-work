const express = require("express")
const app = express()
const PORT = 3006
const bcrypt = require("bcrypt")
const { User} = require("./models")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

app.use(express.json())
passport.use(
    new LocalStrategy(async(email, password, done) => {
        const userToFind = await User.findOne({
            where: {
                email: email,
            },
        })
        const passwordMatch = await bcrypt.compare(
			password,
			userToFind.password
		);
        if(passwordMatch) {
            return done(null, userToFind)
        } else {
            return done(null, false, {message: "email or password did not match, please try again"})
        }
    })
)

passport.serializeUser((user,done) => {
    done(null,user.id)
})
passport.deserializeUser(async(user,done) => {
            const userToFind = await User.findOne({
            where: {
                id: user.id,
            },
        })
        done(null, userToFind)
})

app.use(passport.initialize())
app.use(passport.session())


function authenticate(req, res, next) {
    passport.authenticate("local", (err,user,info) => {
        if(err) {
            return next(err)
        }
        if(!user) {
            return res.status(401).json({message: "email or password did not match, please try again."})
        }
        req.logIn(user, (err) => {
            if(err) {
                return next(err)
            }
            next()
        })
    }) (req,res,next)
}

app.post("/login", authenticate, (req, res) => {
	// we need to accept a email and a password
	// const { email, password } = req.body;
	// if (!email) {
	// 	res.status(400).send("Please include an email");
	// 	return;
	// }
	// if (!password) {
	// 	res.status(400).send("Please include an password");
	// 	return;
	// }
	// // find the user by email
	// const userToFind = await User.findOne({
	// 	where: {
	// 		email: email,
	// 	},
	// });
	// // compare the user password that is coming in
	// // to the user password that we found in the database on line 49
	// // this returns true if it matches, false if it doesn't
	// // const passwordMatch = await bcrypt.compare(password, userToFind.password);
	// if (!passwordMatch) {
	// 	res.status(403).send("That is the wrong password, try again");
	// 	return;
	// }
	// this is where we start the passport session
	res.send("Successfully logged in");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`))