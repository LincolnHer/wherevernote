'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notebookId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsTo(models.User, { foreignKey: 'userId' })
    Note.belongsTo(models.Notebook, { foreignKey: 'notebookId' })
    // Note.belongsTo(models.Tag, { foreignKey: 'noteId' })
  };
  return Note;
};
