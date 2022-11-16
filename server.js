const app= require('./src/app');



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!🙀')
})

app.listen(8080, () => {
    console.log('server is running on port 8080')
})