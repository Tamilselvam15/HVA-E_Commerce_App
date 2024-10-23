exports.validateFields = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// Middleware for validating request params (ID validation)
exports.validateParams = (schema) => (req, res, next) => {
  const paramsId = { id: req.params.id };
  const { error } = schema.validate(paramsId);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};