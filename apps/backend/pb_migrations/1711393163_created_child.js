migrate((db) => {
  const collection = new Collection({
    "id": "n3i98qt9jf0l9oj",
    "created": "2024-03-25 18:59:23.071Z",
    "updated": "2024-03-25 18:59:23.071Z",
    "name": "child",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "47tzjn2s",
        "name": "first_name",
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
        "id": "ocqql3js",
        "name": "last_name",
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
        "id": "f8rdaeje",
        "name": "dob",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "vxbglke4",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "d8n8w3nhkngyiqo",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ccnetkzh",
        "name": "birth_cert",
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
  const collection = dao.findCollectionByNameOrId("n3i98qt9jf0l9oj");

  return dao.deleteCollection(collection);
})
