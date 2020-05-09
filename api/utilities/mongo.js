import awa from "await-to-js"
import monk from "monk"

const onConnected = (db) => {
  console.log("✔ Connected to database.")
  return db
}

const onError = (error) => {
  console.log("❌ Failed to connect to database.")
  throw error
}

export const mongo = monk(process.env.CONNECTION_STRING).then(onConnected).catch(onError)
const collections = {}

export const getCollection = async (name) => {
  if (collections[name]) return collections[name]
  const db = await mongo

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
