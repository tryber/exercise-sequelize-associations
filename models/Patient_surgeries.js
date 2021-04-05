const createPatientSurgery = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define('Patient_surgeries', {}, {timestamps: false});
  
  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patient',
      through: PatientSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id'
    });
    
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: PatientSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id'
    });    
  };
  return PatientSurgery;
}

module.exports = createPatientSurgery;
