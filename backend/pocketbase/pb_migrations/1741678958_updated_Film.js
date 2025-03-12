/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3809222740",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Affiche_film",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2017353280",
    "max": 0,
    "min": 0,
    "name": "Synopsis_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url417379484",
    "name": "Bande_annonce_film",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date3094223700",
    "max": "",
    "min": "",
    "name": "Duree_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
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

  // add field
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

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text945159775",
    "max": 0,
    "min": 0,
    "name": "Langue_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3515993000",
    "max": 0,
    "min": 0,
    "name": "Production_film",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("file3809222740")

  // remove field
  collection.fields.removeById("text2017353280")

  // remove field
  collection.fields.removeById("url417379484")

  // remove field
  collection.fields.removeById("date3094223700")

  // remove field
  collection.fields.removeById("date543929717")

  // remove field
  collection.fields.removeById("select1995727874")

  // remove field
  collection.fields.removeById("text945159775")

  // remove field
  collection.fields.removeById("text3515993000")

  return app.save(collection)
})
