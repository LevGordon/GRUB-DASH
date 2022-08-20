function notFound(request, response, next) {
  next({ status: 404, message: `Path not found: ${request.originalUrl}. Try entering /dishes or /orders into your search query.` });
}

module.exports = notFound;
