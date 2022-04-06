'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Tags', [
      {
        userId: 1,
        noteId: 1,
        name: 'Esports',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        userId: 1,
        noteId: 13,
        name: 'Pokémon',
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
   return queryInterface.bulkDelete('Tags', null, {});
  }
};
