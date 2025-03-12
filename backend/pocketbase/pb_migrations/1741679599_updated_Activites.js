/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select264857469",
    "maxSelect": 2,
    "name": "Type_activites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Atelier costume / maquillage",
      "Exposition",
      "Animation"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2222527961",
    "max": "",
    "min": "",
    "name": "Date_activites",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // remove field
  collection.fields.removeById("select264857469")

  // remove field
  collection.fields.removeById("date2222527961")

  return app.save(collection)
})
