migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foqoedfa",
    "name": "swipeReport",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  // remove
  collection.schema.removeField("foqoedfa")

  return dao.saveCollection(collection)
})
