// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PrismaMigrations = sequelize.define('prismaMigrations', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    checksum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finishedAt: {
      type: DataTypes.DATE,
    },
    migrationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logs: {
      type: DataTypes.STRING,
    },
    rolledBackAt: {
      type: DataTypes.DATE,
    },
    startedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
      allowNull: false,
    },
    appliedStepsCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  }, {
    tableName: '_prisma_migrations',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  PrismaMigrations.associate = (models) => {
  };

  return PrismaMigrations;
};