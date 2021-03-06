'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type:  DataTypes.STRING(50),
      allowNull: false
    },
  }, {});
  Notebook.associate = function(models) {
    // associations can be defined here
    Notebook.hasMany(models.Note, { foreignKey: 'notebookId', onDelete: 'cascade' } )
    Notebook.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Notebook;
};
