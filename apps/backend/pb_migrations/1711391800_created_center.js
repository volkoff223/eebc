migrate((db) => {
  const collection = new Collection({
    "id": "d8n8w3nhkngyiqo",
    "created": "2024-03-25 18:36:40.551Z",
    "updated": "2024-03-25 18:36:40.551Z",
    "name": "center",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c4supdba",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "frvci3l1",
        "name": "logo",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d8n8w3nhkngyiqo");

  return dao.deleteCollection(collection);
})
