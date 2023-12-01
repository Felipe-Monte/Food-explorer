const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class DishImageController {
  async create(request, response) {
    const user_id = request.user.id
    const { title, description, price, tags } = request.body
    const imageFilename = request.file.filename

    const [dishe_id] = await knex("dishes").insert({
      title,
      description,
      price,
      image: imageFilename,
      user_id
    })

    const tagsArray = Array.isArray(tags) ? tags : [tags]

    const tagsInsert = tagsArray.map(name => {
      return {
        dishe_id,
        name,
        user_id
      }
    })

    await knex("tags").insert(tagsInsert)

    return response.json()
  }
}

module.exports = DishImageController