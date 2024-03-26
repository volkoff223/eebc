migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilv5sy0c",
    "name": "director",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  // remove
  collection.schema.removeField("ilv5sy0c")

  return dao.saveCollection(collection)
})
