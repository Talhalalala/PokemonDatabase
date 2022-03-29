const express = require('express');
const { PermissionMiddlewareCreator, RecordSerializer } = require('forest-express-sequelize');
const { captured, pokemon, trainer } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('captured');

// I added this
const recordSerializer = new RecordSerializer({ name: 'trainer' });

// This file contains the logic of every route in Forest Admin for the collection captured:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/actions/create-and-manage-smart-actions

// Create a Captured
router.post('/captured', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Captured
router.put('/captured/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Captured
router.delete('/captured/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Captureds
router.get('/captured', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Captureds
router.get('/captured/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Captured
router.get('/captured/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Captureds
router.get('/captured.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Captureds
router.delete('/captured', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

// router.get('/trainer', permissionMiddlewareCreator.list(), async (request, response, next) => {
//   const trainer = await trainer.findAll({
//     where: { desired_trainer: trainer.name}
//   });
//   console.log(trainer)
  // const selection = [];

// })

// const companyTransactions = await transactions.findAll({
//   where: { beneficiary_company_id: company.id },
// });
// const selection = [];
// companyTransactions.forEach((transaction) => {
//   const record = {
//     id: transaction.id,
//     info: `ref ${transaction.reference} - amount ${transaction.amount} USD`,
//   };
//   selection.push(record);
// });
// return recordSerializer.serialize(selection)
//   .then((recordsSerialized) => {
//     response.send(recordsSerialized);


module.exports = router;
