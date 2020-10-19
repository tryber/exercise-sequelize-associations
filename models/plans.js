module.exports = (sequelize, DataType) => {
  const Plan = sequelize.define(
    'Plan',
    {
      plan_id: { primaryKey: true, type: DataType.INTEGER },
      coverage: DataType.STRING,
      price: DataType.INTEGER,
    },
    { timestamps: false },
  );

  Plan.associate = (models) =>
    Plan.belongsTo(models.Patient, { foreignKey: 'plan_id', as: 'patients' });

  return Plan;
};
