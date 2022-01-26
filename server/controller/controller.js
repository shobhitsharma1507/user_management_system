var UserDB = require("../model/model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }

  const user = new UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  user
    .save(user)
    .then((data) => {
      res.redirect("/add_user");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
      const id = req.query.id;
      UserDB.findById(id)
      .then(data =>{
          if(!data){
              res.status(404).send({message: "Uer not found"})
          }else{
              res.send(data)    
          }
      })  
      .catch(err =>{
        res.status(500).send({
          message: 'Error retrieving the data'  
        })
      })  
  } else {
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error occured while finding data" });
      });
  }
};


// Update a new idetified user by user id
exports.update = (req, res)=>{
  if(!req.body){
      return res
          .status(400)
          .send({ message : "Data to update can not be empty"})
  }

  const id = req.params.id;
 UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
          }else{
              res.send(data)
          }
      })
      .catch(err =>{
          res.status(500).send({ message : "Error Update user information"})
      })
}
exports.delete = (req, res) => {
  const id = req.params.id;
  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "ID not found" });
      } else {
        res.send({
          message: "USER DELETED SUCCESSFULLYT",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete user",
      });
    });
};
