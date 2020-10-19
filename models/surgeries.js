module.exports = (sequelize, DataType) => {
  const Surgerie = sequelize.define(
    'Surgerie',
    {
      surgery_id: { primaryKey: true, type: DataType.INTEGER },
      specialty: DataType.STRING,
      doctor: DataType.STRING,
    },
    { timestamps: false },
  );

  Surgerie.associate = (models) => Surgerie.belongsToMany(
    models.Patient,
    { through: models.PatientSurgeries, foreignKey: 'surgery_id' },
  );

  return Surgerie;
};
