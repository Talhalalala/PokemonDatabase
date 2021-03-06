// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const PokemonTypes = sequelize.define('pokemonTypes', {
    pokemonId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(\'"PokemonTypes_pokemonId_seq"\'::regclass)'),
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(\'"PokemonTypes_typeId_seq"\'::regclass)'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    expiresAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'PokemonTypes',
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  PokemonTypes.associate = (models) => {
    PokemonTypes.belongsTo(models.pokemon, {
      foreignKey: {
        name: 'pokemonIdKey',
        field: 'pokemonId',
      },
      as: 'pokemon',
    });
    PokemonTypes.belongsTo(models.type, {
      foreignKey: {
        name: 'typeIdKey',
        field: 'typeId',
      },
      as: 'type',
    });
  };

  return PokemonTypes;
};
