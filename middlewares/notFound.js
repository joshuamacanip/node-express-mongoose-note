const notFound = (req, res) => {
  res.status(404).json({ msg: "Resources does not exist!" });
};

module.exports = notFound;
