import "dotenv/config"
import { getCollection } from "./mongo"
import micro, { send, json } from "micro"
import { router, get, post } from "microrouter"
import microCors from "micro-cors"
import microMorgan from "micro-morgan"

const cors = microCors()
const morgan = microMorgan("tiny")

const index = (req, res) => {
  console.log("request: /")
  send(res, 200, { haveYouArrived: true })
}

const find = async (req, res) => {
  const body = await json(req)
  const collection = getCollection(body.collection)
  const [error, docs] = await collection.find(body.args)
  send(res, 200, [error, docs])
}

const withRouting = router(get("/", index), post("/find", find))
const withMiddleware = cors(morgan(withRouting))
const server = micro(withMiddleware)

server.listen(6699, () => {
  console.log(`Server listening @ http://localhost:6699`)
})
