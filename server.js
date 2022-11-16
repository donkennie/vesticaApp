const app= require('./src/app');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!🙀')
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('server is running on port 8080')
})