const express = require("express")
const app = express()
const PORT = 3005
const userRoutes = require("./routes/user")
const dashboardRoutes = require("./routes/dashboard")


app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views/partials"))
app.use(express.static(__dirname + "/public/css"))



app.use("/user", userRoutes)
app.use("/dashboard", dashboardRoutes)


app.listen(PORT, console.log(`listening on port ${PORT}`))