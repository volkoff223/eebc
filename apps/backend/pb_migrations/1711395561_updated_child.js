migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n3i98qt9jf0l9oj")

  collection.name = "children"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n3i98qt9jf0l9oj")

  collection.name = "child"

  return dao.saveCollection(collection)
})
