// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const posts = sequelizeClient.define('posts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    location: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    likes: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },

    //relation
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

  posts.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    models.posts.hasMany(models.comments, {foreignKey: 'postId', targetKey: 'id', as: 'comments'});
  };

  return posts;
};
