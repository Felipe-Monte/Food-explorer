const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")

class DishImageController {
  async create(request, response) {
    const user_id = request.user.id
    // const imageFilename = request.file.filename

     const { title, description, price, tags } = request.body
    
     const [dishe_id] = await knex("dishes").insert({
       title,
       description,
       price,
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

    // const diskStorage = new DiskStorage()

    // const filename = await diskStorage.saveFile(imageFilename)

    // const dish = await knex("dishes").insert({ 
    //   image: filename,
    //   title, 
    //   description, 
    //   price, 
    //   tags  
    // })

     return response.json()
  }
}

module.exports = DishImageController