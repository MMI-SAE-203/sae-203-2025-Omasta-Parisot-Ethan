/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // update field
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
      "Défilés de costumes",
      "Exposition",
      "Animations",
      "Maisons hantées"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2427533966")

  // update field
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

  return app.save(collection)
})
