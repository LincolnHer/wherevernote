'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Notes', [
      {
        userId: 1,
        notebookId: 1,
        title: 'Top',
        content: 'Zeus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 1,
        title: 'Jungle',
        content: 'Oner',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 1,
        title: 'Mid',
        content: 'Faker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 1,
        title: 'ADC',
        content: 'Gumayusi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 1,
        title: 'Support',
        content: 'Keria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Red',
        content: 'Color 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Orange',
        content: 'Color 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Yellow',
        content: 'Color 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Green',
        content: 'Color 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Blue',
        content: 'Color 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Indigo',
        content: 'Color 6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 2,
        title: 'Violet',
        content: 'Color 7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 3,
        title: 'Bulbasaur',
        content: 'small, squat amphibian and plant Pok??mon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 3,
        title: 'Charmander',
        content: 'a small, bipedal, dinosaur like Pok??mon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 3,
        title: 'Squirtle',
        content: 'Tiny Turtle Pok??mon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        notebookId: 4,
        title: 'Test 1',
        content: 'Chocolate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        notebookId: 5,
        title: 'Test 2',
        content: 'Strawberry',
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
   return queryInterface.bulkDelete('Notes', null, {});
  }
};
