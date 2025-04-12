const response = (res, status, message = null, body = null, error = null) => {
  let response = {};

  response.statusCode = status;

  if (!message) {
    response.message = message;
  }
  if (!body) {
    response.body = body;
  }
  if (!error) {
    response.error = error;
  }

  res.status(status).json(response);

};

module.exports = response;