module.exports = (sequelize, DataType) => {
  const Patient = sequelize.define(
    'Patient',
    { patient_id: { primaryKey: true, type: DataType.INTEGER }, fullname: DataType.STRING },
    { timestamps: false },
  );

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
    Patient.belongsToMany(models.Surgerie, {
      through: models.PatientSurgeries, foreignKey: 'patient_id',
    });
  }

  return Patient;
};
