const { Router } = require('express');

const router = Router();

const { Patient, Surgery, Plan } = require('../models');

router.get('/', async(req, res) => {
  const patients = await Patient.findAll();
  
  res.status(200).json(patients);
});

// all patients with surgeries
router.get('/withSurg', async(req, res) => {
  // const patients = await Patient.findByPk(req.params.id, {
  //   include: { model: Surgery, as: 'surgeries' }
  // });
  
  const patients = await Patient.findAll({
    include: { model: Surgery, as: 'surgeries' }
  });
  
  // const patients = await Patient.findByPk(req.params.id);
  // const surgeries = await patients.getSurgery();
  
  res.status(200).json({ patients });
});

// patients By plan_id
router.get('/byPlan/:id', async(req, res) => {
  const { id } = req.params;
  
  const patients = await Patient.findAll({
    where: { plan_id: id }
  });
  
  res.status(200).json(patients);
});

// by Id with surgeries
router.get('/:id', async(req, res) => {
  const patients = await Patient.findByPk(req.params.id, {
    include: { model: Surgery, as: 'surgeries' }
  });
  
  res.status(200).json({ patients });
});

router.get('/surg', async(req, res) => {
  const surgeries = await Surgery.findAll()
  
  res.status(200).json(surgeries);
})

// Adicionar paciente
router.post('/', async(req, res) => {
  const { fullname, plan_id } = req.body;
  
  // existe um plano com esse id ?
  const plan = await Plan.findAll({
    where: { plan_id },
  });
  if (!plan.length) return res.status(404).json({ message: 'Não existe plano com esse id.' });
  
  const user = await Patient.create({fullname, plan_id});
  
  res.status(200).json(user);
});

module.exports = router;
