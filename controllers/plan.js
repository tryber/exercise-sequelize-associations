const express = require('express');
const { Patient, Plan } = require('../models');

const plansRouter = express.Router();

const getPatientsById = (req, res, next) => Plan
  .findAll({ where: { plan_id: req.params.id }, include: { model: Patient, as: 'patients' } })
  .then((planWithPatients) => res.status(200).json(planWithPatients))
  .catch((e) => next(e.message));

plansRouter
  .get('/:id', getPatientsById)

module.exports = plansRouter;
