import express from "express"
import cors from "cors"
import { addMeetUps, deleteMeetUps, getAllMeetUps, updateMeetUps } from "./meetUps.js"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("My Api is working!")
})

app.get("/meets", getAllMeetUps)
app.post("/meets", addMeetUps)
app.delete("/meets/:meetsId", deleteMeetUps)
app.patch("/meets/:meetsId", updateMeetUps)


app.listen(3010, () => {
    console.log("http://localhost:3010...")
})
