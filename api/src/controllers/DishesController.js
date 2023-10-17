const knex = require("../database/knex")

class DishesController {
  async create(request, response) {
    const { title, description, tags, category } = request.body
    const { user_id } = request.params

    const [dishe_id] = await knex("dishes").insert({
      title,
      description,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        dishe_id,
        name,
        user_id
      }
    })

    await knex("tags").insert(tagsInsert)

    response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const dishe = await knex("dishes").where({ id }).first()
    const tags = await knex("tags").where({ dishe_id: id }).orderBy("name")

    return response.json({
      ...dishe,
      tags
    })
  }

  async delete(request, response) {
    const { id } = request.params

    await knex("dishes").where({ id }).delete()

    return response.json()
  }
}

module.exports = DishesController