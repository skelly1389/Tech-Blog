const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'postId'
});

Post.belongsTo(User, {
  through: 'User',
  foreignKey: 'id',
});

User.hasMany(Comment, {
  foreignKey: 'id',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comment, {
  foreignKey: 'id'
})

Comment.belongsTo(Post, {
  foreignKey: 'id'
})

module.exports = { User, Post, Comment };
