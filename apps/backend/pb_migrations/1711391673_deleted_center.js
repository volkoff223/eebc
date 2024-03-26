migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("av34ezp5prmwbud");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "av34ezp5prmwbud",
    "created": "2023-12-02 21:11:34.380Z",
    "updated": "2024-03-25 18:33:57.090Z",
    "name": "center",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8bzerxue",
        "name": "product",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "naodygtm",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eezomc5g",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "izhhbzae",
        "name": "images",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "fukeuxsy",
        "name": "thumbnail",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [
            "80x80"
          ],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.isAdmin = true",
    "updateRule": "@request.auth.isAdmin = true",
    "deleteRule": "@request.auth.isAdmin = true",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
