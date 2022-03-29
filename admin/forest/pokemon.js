const { collection } = require('forest-express-sequelize');
const models = require('../models');
const { Op, QueryTypes } = require('@sequelize/core');
const Sequelize = require('sequelize');


// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('pokemon', {
  actions: [{
    name: 'Seen'
  },
  {
    name: 'Capture',
    type: 'single',
    fields: [
    //   {
    //   field: 'Assign to a trainer',
    //   description: 'Please choose a trainer',
    //   reference: 'trainer'
    // },
    {
      field: 'trainer', 
      type: "Number",
      reference: "trainer.id",
      isRequired: true,
    }
  ]

  }
],

  fields: [{
    field: 'ovrStrength',
    type: 'Number',
    get: (poke) => {
      return (poke.attack + poke.defense + poke.hp + poke.spAttack + poke.spDefense + poke.speed)
        ;
    }
  }],

  segments: [
    {
    name: 'Top 10 Strongest Pokemon',
    where: async () => {
      const allPokemon = await models.pokemon.findAll();
      const top10 = allPokemon
        .map(pokemon => ({ ...pokemon, dataValues: {...pokemon.dataValues, overallStrength: pokemon.dataValues.attack + pokemon.dataValues.defense + pokemon.dataValues.hp + pokemon.dataValues.spAttack + pokemon.dataValues.spDefense + pokemon.dataValues.speed }}))
        .sort((a, b) => b.dataValues.overallStrength - a.dataValues.overallStrength)
        .splice(0, 10)
        .map(pokemon => pokemon.dataValues.id);
        // console.log(top10, 'line 31')
        // console.log(typeof(top10), 'line 32')
        // const top10Array = Object.entries(top10).sort((a,b) => b[1]-a[1]);
        // console.log(top10Array);
        // console.log(typeof(top10Array), 'line 35');
      return { id: { [Op.in]: top10 } };
      
      // return { order: [Sequelize.fn('max', Sequelize.col('ovrStrength')), 'DESC'] };
    }
  }, 
  {
    name: 'Top 10 Fire Pokemon',
    where: async () => {
      const allPokemonFire = await models.pokemon.findAll();
      const top10Fire = allPokemonFire
      .map(pokemon => ({ ...pokemon, dataValues: {...pokemon.dataValues}}))
      .sort((a,b) => b.dataValues.againstFire - a.dataValues.againstFire)
      .splice(0, 10)
      .map(pokemon => pokemon.dataValues.id);
      return { id: { [Op.in]: top10Fire }};
    }
  },
  {
    name: 'Top 30 Heaviest Pokemon',
    where: async () => {
      const allBigPokemon = await models.pokemon.findAll();
      const top10Big = allBigPokemon
      .map(pokemon => ({ ...pokemon, dataValues: {...pokemon.dataValues}}))
      .sort((a,b) => b.dataValues.weightKg - a.dataValues.weightKg)
      .splice(0, 30)
      .map(pokemon => pokemon.dataValues.id);
      // object because sequelize requires it to be this way 
      return { id: { [Op.in]: top10Big } }
    }
  }
]

  

});


