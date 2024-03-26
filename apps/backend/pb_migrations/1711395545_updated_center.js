migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  collection.name = "centers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  collection.name = "center"

  return dao.saveCollection(collection)
})
