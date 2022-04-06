'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Notebooks', [
      {
        userId: 1,
        title: 'T1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rainbow',
        createdAt: new Date(),
        userId: 1,
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Pokemon Gen 1 Starters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Notebook 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        title: 'Notebook 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
