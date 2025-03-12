/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1995727874",
    "maxSelect": 9,
    "name": "Genre_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Horreur",
      "Slasher",
      "Horreur psychologique",
      "Horreur surnaturelle",
      "Horreur comique",
      "Horreur gothique",
      "Thriller",
      "Zombies",
      "Fantastique / Magie"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1995727874",
    "maxSelect": 1,
    "name": "Genre_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Horreur",
      "Slasher",
      "Horreur psychologique",
      "Horreur surnaturelle",
      "Horreur comique",
      "Horreur gothique",
      "Thriller",
      "Zombies",
      "Fantastique / Magie"
    ]
  }))

  return app.save(collection)
})
