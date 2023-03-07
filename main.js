const express = require("express")
const app = express()

app.listen(3000, () => console.log("API OK!"))

app.get("/", (req, res) => {
    res.send("Hello!")
})