const createPatient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    fullname: DataTypes.STRING,
    plan_id: DataTypes.INTEGER
  }, { timestamps: false });
  
  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {as: 'plans', foreignKey: 'plan_id'})
  }
  return Patient;
}

module.exports = createPatient;
