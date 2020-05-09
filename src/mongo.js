import awa from "await-to-js"
import monk from "monk"

const db = monk(process.env.MONGO_CONNECTION_STRING)
const collections = {}

export const getCollection = (name) => {
  if (collections[name]) return collections[name]

  const collection = db.get(name)
  const insert = (args) => awa(collection.insert(...args))
  const find = (args) => awa(collection.find(...args))
  const update = (args) => awa(collection.update(...args))
  const remove = (args) => awa(collection.remove(...args))

  const final = {
    insert,
    find,
    update,
    remove,
  }

  collections[name] = final
  return final
}
