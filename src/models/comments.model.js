// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const comments = sequelizeClient.define('comments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    comment: {
      type: Sequelize.TEXT
    },

    //relation
    postId: {
      type: Sequelize.INTEGER
    },
    createdBy: {
      type: Sequelize.INTEGER
    },

    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  comments.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    models.comments.belongsTo(models.posts, {foreignKey: 'postId', targetKey: 'id', as: 'post'});
  };

  return comments;
};
