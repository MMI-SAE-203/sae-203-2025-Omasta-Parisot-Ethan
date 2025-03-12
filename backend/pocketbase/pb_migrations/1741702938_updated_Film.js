/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update collection data
  unmarshal({
    "name": "Films"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update collection data
  unmarshal({
    "name": "Film"
  }, collection)

  return app.save(collection)
})
