const app= require('./src/app');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());



app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!🙀')
})

app.listen(8080, () => {
    console.log('server is running on port 8080')
})