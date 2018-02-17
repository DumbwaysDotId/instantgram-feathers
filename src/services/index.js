const todos = require('./todos/todos.service.js');
const users = require('./users/users.service.js');
const posts = require('./posts/posts.service.js');
const comments = require('./comments/comments.service.js');
module.exports = function (app) {
  app.configure(todos);
  app.configure(users);
  app.configure(posts);
  app.configure(comments);
};
