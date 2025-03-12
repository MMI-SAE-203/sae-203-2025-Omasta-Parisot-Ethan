/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // update field
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
      "Acteur",
      "Animateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // update field
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
})
