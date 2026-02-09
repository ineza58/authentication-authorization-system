function allowDepartment(department) {
  return (req, res, next) => {
    if (req.user.department !== department) {
      return res.status(403).json({ error: "Department access denied" });
    }
    next();
  };
}

module.exports = allowDepartment;
