const express = require('express');
const { Patient, Plan, PatientSurgeries, Surgerie } = require('../models');

const patientRouter = express.Router();

const getAllWithPlan = (_, res, next) => Patient
  .findAll({ include: { model: Plan, as: 'plan' } })
  .then((patients) => res.status(200).json(patients))
  .catch((e) => next(e.message));

const getAllWithSurgeries = (_, res, next) => Patient
  .findAll({ include: Surgerie })
  .then((patients) => res.status(200).json(patients))
  .catch((e) => next(e.message));

patientRouter
  .get('/plan', getAllWithPlan)
  .get('/surgery', getAllWithSurgeries);

module.exports = patientRouter;
