const bodyParser = require('body-parser');
const express = require('express');

const Routers = require('./controllers');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patient', Routers.patientsRouter);
app.use('/plan', Routers.plansRouter);

const PORT = 3000;

app.use((err, req, res, next) => res.status(500).json({ message: err.message }));

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});