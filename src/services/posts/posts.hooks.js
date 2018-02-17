const { authenticate } = require('@feathersjs/authentication').hooks;
const hydrate = require('feathers-sequelize/hooks/hydrate');

function includeAssociated() {
    return function (hook) {
      const comments = hook.app.service('comments').Model;
      const association = { include: [
        { model: comments, as: 'comments', attributes: ['id', 'comment'] }
      ] };

      switch (hook.type) {
        case 'before':
          hook.params.sequelize = Object.assign(association, { raw: false });
          return Promise.resolve(hook);
          break;

        case 'after':
          hydrate( association ).call(this, hook);
          break;
      }
    }
}

module.exports = {
  before: {
    all: [ includeAssociated() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
