import "dotenv/config"
import { getCollection } from "./mongo"
import micro, { send, json } from "micro"
import { router, get, post } from "microrouter"
import microCors from "micro-cors"
import microMorgan from "micro-morgan"
import { find } from "./find"

const cors = microCors()
const morgan = microMorgan("tiny")

const index = (req, res) => {
  console.log("request: /")
  send(res, 200, { haveYouArrived: true })
}

const withRouting = router(get("/", index), post("/find", find))
const withMiddleware = cors(morgan(withRouting))
const server = micro(withMiddleware)

server.listen(6699, () => {
  console.log(`Server listening @ http://localhost:6699`)
})
