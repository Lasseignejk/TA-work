'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    User.belongsToMany(Group, {through: UserGroup});
    Group.belongsToMany(User, {through: UserGroup})
    }
  }
  UserGroup.init({
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserGroup',
  });
  return UserGroup;
};