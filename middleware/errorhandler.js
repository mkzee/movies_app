const errorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = "Oops!, something went wrong"
    res.status(statusCode).json({message: message}) 
}

module.exports = errorHandlerMiddleware