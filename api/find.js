import "dotenv/config"
import "regenerator-runtime/runtime"
import microCors from "micro-cors"

import { getCollection } from "./utilities/mongo"

const find = async (req, res) => {
  const { method, query, body, headers } = req
  const collection = await getCollection(body.collection)
  const [error, docs] = await collection.find(body.args)
  res.status(200).json({ body: [error, docs] })
}

export default microCors()(find)
