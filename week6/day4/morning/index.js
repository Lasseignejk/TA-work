const express = require("express")
const app = express()
const PORT = 3004
const userRoutes = require("./routes/users")
const petRoutes = require("./routes/myPets")


app.use(express.json())
app.use("/user", userRoutes)
app.use("/pet", petRoutes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))