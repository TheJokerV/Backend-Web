exports.allAccess = (req, res) => {
  res.status(200).send("Inicio publico");
};


exports.userBoard = (req, res) => {
  res.status(200).send("Inicio solo para usuarios registrados");
};


