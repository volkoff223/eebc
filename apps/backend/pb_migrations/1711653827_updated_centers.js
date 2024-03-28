migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  // update
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
      "mimeTypes": [
        "text/csv"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo")

  // update
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
})
