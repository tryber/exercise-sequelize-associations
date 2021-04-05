const bodyParser = require('body-parser');
const PatientsController = require('./controllers/PatientsController');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', PatientsController);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
