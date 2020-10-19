const express = require('express');
const { Patient, Plan, PatientSurgeries, Surgerie } = require('../models');

const plansRouter = express.Router();

const getPatientsById = (req, res, next) => Plan
  .findAll({ where: { plan_id: req.params.id }, include: { model: Patient, as: 'patients' } })
  .then((planWithPatients) => res.status(200).json(planWithPatients))
  .catch((e) => next(e.message));

const getAllWithSurgeries = (_, res, next) => Patient
  .findAll({ include: Surgerie })
  .then((patients) => res.status(200).json(patients))
  .catch((e) => next(e.message));

plansRouter
  .get('/:id', getPatientsById)
  .get('/surgery', getAllWithSurgeries)
  .get('/s', (req, res, next) => {
    Surgerie.findAll().then((s) => res.status(200).json(s)).catch((e) => next(e))
  })
  .get('/ps', (req, res, next) => {
    PatientSurgeries.findAll().then((s) => res.status(200).json(s)).catch((e) => next(e))
  });

module.exports = plansRouter;
