/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date543929717",
    "max": "2025-08-31 07:00:00.000Z",
    "min": "2025-08-29 22:00:00.000Z",
    "name": "Date_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date543929717",
    "max": "",
    "min": "",
    "name": "Date_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
