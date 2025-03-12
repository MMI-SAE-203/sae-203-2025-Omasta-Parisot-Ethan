/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2427533966",
    "hidden": false,
    "id": "relation2061159561",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "associe_a",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4150093999",
    "hidden": false,
    "id": "relation3184018080",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "associe_a_",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("relation2061159561")

  // remove field
  collection.fields.removeById("relation3184018080")

  return app.save(collection)
})
