module.exports = server => {
    server.use((req, res, next) => {
        console.warn(`[${req.method}] ${req.originalUrl}`)
        next()
    });

    // server.use((err, req, res, next) => {
    //     console.error(err.stack)
    //     res.status(500).send('Something broke!')
    // })
}