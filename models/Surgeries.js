const createSurgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    specialty: DataTypes.INTEGER,
    doctor: DataTypes.STRING
  }, { timestamps: false });
  return Surgery;
}

module.exports = createSurgery;
