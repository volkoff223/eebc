migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  collection.name = "center"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud")

  collection.name = "products"

  return dao.saveCollection(collection)
})
