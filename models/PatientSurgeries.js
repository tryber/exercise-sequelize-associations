module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'PatientSurgeries',
    {
      patient_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Patient', key: 'patient_id' }
      },
      surgery_id: {
        type: DataTypes.INTEGER,
        references: { model: 'Surgerie', key: 'surgery_id' }
      },
    },
    { timestamps: false, tableName: 'Patient_surgeries' },
  );
  return PatientSurgeries;
};
