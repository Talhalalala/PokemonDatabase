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
router.post('/actions/seen', permissionMiddlewareCreator.smartAction(), (req, res) => {
  const recordsGetter = new RecordsGetter(pokemon, req.user, req.query);
  
  return recordsGetter.getIdsFromRequest(req)
    .then(pokemonIds => pokemon.update({ status: 'Seen' }, { where: { id: pokemonIds }}))
    .then(() => res.send({ success: 'Pokemon has been seen!' }));
});

// Mark pokemon as captured 
router.post('/actions/capture', permissionMiddlewareCreator.smartAction(), async (req, res) => {
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


module.exports = router;
