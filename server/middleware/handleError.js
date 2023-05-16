module.exports = (error, req, res, next) => {
    if (error) {
        const statusCode = (res.statusCode < 400) ? 500 : res.statusCode
        if (error.message) res.status(statusCode).send(error.message);
        else res.sendStatus(statusCode);
    }
    next()
}