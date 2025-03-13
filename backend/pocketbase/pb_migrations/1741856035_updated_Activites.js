/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file2934539745",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_activites",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("file2934539745")

  return app.save(collection)
})
