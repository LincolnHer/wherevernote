'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    noteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.hasMany(models.Note, { foreignKey: 'noteId' })
    Tag.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Tag;
};
