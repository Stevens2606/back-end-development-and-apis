function inputCleaner(req, res, next) {
  if (req.body && req.body.username) {
    req.body.username = String(req.body.username).toLowerCase();
  }

  if (req.body && req.body.comment) {
    req.body.comment = String(req.body.comment).replace(/<[^>]*>/g, "");
  }

  next();
}

function inputValidator(req, res, next) {
  const username = req.body && req.body.username;

  if (username && username.length >= 3) {
    return next();
  }

  res.redirect("/form?error=Username must be at least 3 characters.");
}

module.exports = { inputCleaner, inputValidator };
