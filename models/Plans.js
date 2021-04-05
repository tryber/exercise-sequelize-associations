const createPlan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, { timestamps: false });
  return Plan;
}

module.exports = createPlan;
