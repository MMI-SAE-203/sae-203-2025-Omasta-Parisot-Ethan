/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // remove field
  collection.fields.removeById("text3931668145")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3931668145",
    "maxSelect": 2,
    "name": "Role_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Organisateur",
      "Equipe technique",
      "Acteur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3931668145",
    "max": 0,
    "min": 0,
    "name": "Role_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select3931668145")

  return app.save(collection)
})
