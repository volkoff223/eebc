migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.id = 'admin'"
  collection.viewRule = "@request.auth.id = 'admin'"
  collection.createRule = "@request.auth.id = 'admin'"
  collection.updateRule = "@request.auth.id = 'admin' || @request.auth.id = id"
  collection.deleteRule = "@request.auth.id = 'admin'"
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": null,
    "onlyVerified": false,
    "requireEmail": false
  }

  // remove
  collection.schema.removeField("oeuq1sxa")

  // remove
  collection.schema.removeField("c7jxl19o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbjqszba",
    "name": "role",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "admin",
        "director",
        "user"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oeuq1sxa",
    "name": "isAdmin",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c7jxl19o",
    "name": "isDirector",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("jbjqszba")

  return dao.saveCollection(collection)
})
