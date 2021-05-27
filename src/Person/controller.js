const db = require("../../models");
const DAO = db.Person

exports.findAll = () => {
  const result = DAO.findAll()
  .then(function(retorno){      
    return retorno;  
  })

  return result
}

exports.create = (req) => {
  const result = DAO.create(req)
  .then(function(retorno){      
    return retorno;  
  }); 
  return result
}

exports.findOne = (id) => {

  const result = DAO.findByPk(id)
  .then(function(retorno){      
    return retorno;  
  });
  
  return result
}

exports.update = (id,req) => {

  const result = DAO.update(
    req,
    {where:
      {id:id}})
   .then(function(retorno){
     return retorno
   });
  
  return result
}

exports.delete = async (id) =>{

  objeto = await this.findOne(id)
  
  const result = objeto.destroy(id)
  .then(function(retorno){      
    return retorno;  
  });

  return result
}






