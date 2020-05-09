import { getCollection } from "./mongo"
import micro, { send, json } from "micro"

export const find = async (req, res) => {
  const body = await json(req)
  const collection = getCollection(body.collection)
  const [error, docs] = await collection.find(body.args)
  send(res, 200, [error, docs])
}
