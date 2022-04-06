const express = require('express');
const { PermissionMiddlewareCreator, RecordsGetter, RecordSerializer, RecordUpdater } = require('forest-express-sequelize');
const { pokemon, captured, trainer } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('pokemon');


// This file contains the logic of every route in Forest Admin for the collection pokemon:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a Pokemon
router.post('/pokemon', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Pokemon
router.put('/pokemon/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Pokemon
router.delete('/pokemon/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Pokemon
router.get('/pokemon', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Pokemon
router.get('/pokemon/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Pokemon
router.get('/pokemon/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Pokemon
router.get('/pokemon.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Pokemon
router.delete('/pokemon', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

// Mark pokemon as seen 
router.post('/actions/mark-as-seen', permissionMiddlewareCreator.smartAction(), (req, res) => {
  const recordsGetter = new RecordsGetter(pokemon, req.user, req.query);
  
  return recordsGetter.getIdsFromRequest(req)
    .then(pokemonIds => pokemon.update({ status: 'Seen' }, { where: { id: pokemonIds }}))
    .then(() => res.send({ success: 'Pokemon has been seen!' }));
});

// Mark pokemon as captured 
router.post('/actions/capture-pokemon', permissionMiddlewareCreator.smartAction(), async (req, res) => {
  // This collects the information from the selected pokemon
  const recordsGetter = new RecordsGetter(pokemon, req.user, req.query);

  const trainerId = req.body.data.attributes.values.trainer;  
  // const trainerDetails = await trainer.findByPk(trainerId);
  // console.log('trainerDetails =  ', trainerDetails);
  // console.log('trainerId = ', trainerId )
  // console.log(req.body.data.attributes.values)

  const pokemonIds = await recordsGetter.getIdsFromRequest(req);

  // const stuff = req.body.data.attributes.all_records_subset_query['fields[pokemon]']
  // const stuff2 = req.user
  // console.log('line 84 values = ', stuff)


  function pokemonLvl(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;}

  await Promise.all(pokemonIds.map(async pokemonId => {
    const pokemom = await pokemon.findByPk(pokemonId);
    console.log(pokemom.dataValues.percentageMale);

    // const pMale = pokemon.dataValues.percentageMale
    // async function mOrF(pMale){
    //   const pMale = await pokemon.dataValues.percentageMale
    //   mORf = Math.random() * 100;
    //   if(mORf <= pMale){
    //     gender = 'Male'
    //   }
    //   else{
    //     gender = 'Female'
    //   }
    // };

    await captured.create({ gender: 'Male', level: pokemonLvl(3, 10), trainerIdKey: trainerId, pokemonIdKey: pokemonId })
    return pokemon.update({ status: 'Captured' }, { where: { id: pokemonId }})
  }));
  return res.send({ success: 'Congratulations! You have caught a new Pokemon.' })
  });

  // give pokemon default stats 
router.post('/actions/assign-default-stats', permissionMiddlewareCreator.smartAction(), async (req, res) => {

  const pokemonId = req.body.data.attributes.ids;

  const defaultStats = {
    fire: 1,
    grass: 1,
    normal: 1,
    water: 1
  }

  const pokemonStats = await pokemon.findAll({
    where: {
      id: pokemonId
    }, attributes: ['againstFire', 'againstWater', 'againstNormal', 'againstGrass']
  });

  const pokemonElements = {
    fire: pokemonStats[0].dataValues.againstFire,
    grass: pokemonStats[0].dataValues.againstGrass,
    normal: pokemonStats[0].dataValues.againstNormal,
    water: pokemonStats[0].dataValues.againstWater,
  }


  if(pokemonElements.fire === null && pokemonElements.grass === null && pokemonElements.normal === null && pokemonElements.water === null){
    await Promise.all(
      await pokemon.update({
        againstFire: defaultStats.fire, 
        againstGrass: defaultStats.grass, 
        againstNormal: defaultStats.normal, 
        againstWater: defaultStats.water
      },
         { where: { id: pokemonId }})
    )
    return res.send({ success: 'Pokemon has been assigned default stats!' })
  } else{
    return res.send({ success: 'This Pokemon already has stats!'})
  }

});

// stats smart form
router.post('/actions/select-and-assign-stats', permissionMiddlewareCreator.smartAction(), async (req, res) => {
  const stats = {
    high: 3,
    medium: 1, 
    low: 0.25
  }

  const pokemonId = req.body.data.attributes.ids;

  const incomingStats = {
    fire: req.body.data.attributes.values['Fire Stats'],
    grass: req.body.data.attributes.values['Grass Stats'],
    normal: req.body.data.attributes.values['Normal Stats'],
    water: req.body.data.attributes.values['Water Stats']
  }

  const databaseStats = await pokemon.findAll({
    where: {
      id: pokemonId
    }, attributes: ['againstFire', 'againstWater', 'againstNormal', 'againstGrass']
  });

  const currentStats = {
    fire: databaseStats[0].dataValues.againstFire,
    grass: databaseStats[0].dataValues.againstGrass,
    normal: databaseStats[0].dataValues.againstNormal,
    water: databaseStats[0].dataValues.againstWater,
  }

  if(currentStats.fire === null && currentStats.grass === null && currentStats.normal === null && currentStats.water === null){
    if(incomingStats.fire === 'High'){
      await pokemon.update({
        againstFire: stats.high
      },
         { where: { id: pokemonId }})
    } else if(incomingStats.fire === 'Medium'){
      await pokemon.update({
        againstFire: stats.medium
      },
         { where: { id: pokemonId }})
    } else{
      await pokemon.update({
        againstFire: stats.low
      },
         { where: { id: pokemonId }})
    };

    if(incomingStats.grass === 'High'){
      await pokemon.update({
        againstGrass: stats.high
      },
         { where: { id: pokemonId }})
    } else if(incomingStats.grass === 'Medium'){
      await pokemon.update({
        againstGrass: stats.medium
      },
         { where: { id: pokemonId }})
    } else{
      await pokemon.update({
        againstGrass: stats.low
      },
         { where: { id: pokemonId }})
    };

    if(incomingStats.normal === 'High'){
      await pokemon.update({
        againstNormal: stats.high
      },
         { where: { id: pokemonId }})
    } else if(incomingStats.normal === 'Medium'){
      await pokemon.update({
        againstNormal: stats.medium
      },
         { where: { id: pokemonId }})
    } else{
      await pokemon.update({
        againstNormal: stats.low
      },
         { where: { id: pokemonId }})
    };

    if(incomingStats.water === 'High'){
      await pokemon.update({
        againstWater: stats.high
      },
         { where: { id: pokemonId }})
    } else if(incomingStats.water === 'Medium'){
      await pokemon.update({
        againstWater: stats.medium
      },
         { where: { id: pokemonId }})
    } else{
      await pokemon.update({
        againstWater: stats.low
      },
         { where: { id: pokemonId }})
    };


    return res.send({ success: 'Pokemon stats assigned successfully!' })
  } else{
    return res.send({ success: 'This Pokemon already has stats!'})
  }
});









module.exports = router;
