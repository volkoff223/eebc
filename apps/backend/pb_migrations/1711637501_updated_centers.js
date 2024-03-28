migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  collection.listRule = "@request.auth.role = 'admin'"
  collection.viewRule = "@request.auth.role = 'admin' || @request.auth.role = 'director'"
  collection.createRule = "@request.auth.role = 'admin'"
  collection.updateRule = "@request.auth.role = 'admin' || @request.auth.role = 'director'"
  collection.deleteRule = "@request.auth.role = 'admin'"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3r7llyjk",
    "name": "vax",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oezera3q",
    "name": "vax_record",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // remove
  collection.schema.removeField("3r7llyjk")

  // remove
  collection.schema.removeField("oezera3q")

  return dao.saveCollection(collection)
})
