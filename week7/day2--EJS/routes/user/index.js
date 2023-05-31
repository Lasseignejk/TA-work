const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {

    res.render("./user/user.ejs", {
        user: {
            name: "Jaye"}
    })
})
router.get("/user_contact", (req, res) => {

    res.render("./user/contact.ejs", {
        user: {
            name: "Jaye",
            email: "123@email.com"
        
        }
    })
})
router.get("/user_about", (req, res) => {

    res.render("./user/about.ejs", {
        user: {
            name: "Jaye",
            location: "Greenville, SC",
            hobbies: "DnD, watercolor painting"
        }
    })
})
router.get("/display_all_users", (req,res) => {
    const userData = [
        {
        name: "Joe",
        address: "123 main st", 
        city: "Tomball",
        zipcode: 77733
    },
        {
        name: "Cameron",
        address: "123 main st", 
        city: "Atlanta",
        zipcode: 23232
    },
        {
        name: "Matt",
        address: "123 main st", 
        city: "Houston",
        zipcode: 72733
    },
]
res.render("./user/displayAll.ejs", {
    userData: userData
})
})

module.exports = router;