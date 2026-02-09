function checkOwnership(req, res, next) {
  const requestedId = parseInt(req.params.id);

  if (req.user.role === "admin") {
    return next();
  }

  if (req.user.id !== requestedId) {
    return res.status(403).json({ error: "Not resource owner" });
  }

  next();
}

module.exports = checkOwnership;
