import { MongoClient } from "mongodb";
import { mongoURI } from "./secrets.js";

const client = new MongoClient(mongoURI) //MongodbURL path to database

export const db = client.db("meetups")
