import { ObjectId } from "mongodb";
import { db } from "./mongoConnect.js";

const collection = db.collection("data")

export async function getAllMeetUps(req, res) {
    const getAllMeetUps = await collection.find({}).toArray();
    res.send(getAllMeetUps)
}

export async function addMeetUps(req, res) {
    const addMeetUps = req.body
    await collection.insertOne(addMeetUps)
    res.send("Congratulations, your meet-up has been created!")
}

export async function deleteMeetUps(req, res) {
    const meetsId = { "_id": new ObjectId(req.params.meetsId) }

    await collection.deleteOne(meetsId)
    res.status(201).send({ message: "your meet-up has been permenently deleted" })
}

export async function updateMeetUps(req, res) {
    const { meetsId } = req.params
    const updateMeetUps = req.body
    await collection.updateOne({ "_id": new ObjectId(meetsId) }, { $set: updateMeetUps })
        .catch(err => res.status(500).send(err))
    res.status(201).send("Your meet-up has been updated successfully!")
}


